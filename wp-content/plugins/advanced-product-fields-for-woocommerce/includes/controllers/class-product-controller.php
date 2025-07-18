<?php

namespace SW_WAPF\Includes\Controllers {

    use SW_WAPF\Includes\Classes\Enumerable;
    use SW_WAPF\Includes\Classes\Field_Groups;
    use SW_WAPF\Includes\Classes\Fields;
	use SW_WAPF\Includes\Classes\Helper;
	use SW_WAPF\Includes\Classes\Html;
    use SW_WAPF\Includes\Models\Field;

    if (!defined('ABSPATH')) {
        die;
    }

    class Product_Controller
    {

        public function __construct()
        {
            /*
             * Order of execution:
             * 'validate_cart_data'
             * 'add_fields_to_cart_item'
             * 'split_cart_items_by_quantity'
             */

            // Before the "add to cart" button, display the fields for product pages.
            add_action('woocommerce_before_add_to_cart_button',             [$this, 'display_field_groups']);

            // Validate data in cart
            add_filter('woocommerce_add_to_cart_validation',                [$this, 'validate_cart_data'], 10, 6);

            // Adjust cart item pricing for fields with pricing logic.
            add_action('woocommerce_before_calculate_totals',               [$this,'adjust_cart_item_pricing']);

            // Add the meta data of the fields to the cart item. and set options pricing if need be
            add_filter( 'woocommerce_add_cart_item_data',                   [$this, 'add_fields_to_cart_item'], 10, 3 );

            // Display custom cart item data in cart and checkout.
            add_filter('woocommerce_get_item_data',                         [$this,'display_fields_on_cart_and_checkout'],10, 2);

            // Save / Display custom field value as custom order item meta data.
            add_action( 'woocommerce_checkout_create_order_line_item',      [$this,'create_order_line_item'], 20, 4);

            // Change "add to cart" text when options need to be selected
            add_filter('woocommerce_product_add_to_cart_text',              [$this, 'change_add_to_cart_text'], 10, 2);

            // User has to select options so adding to cart via ajax isn't possible.
            add_filter('woocommerce_product_supports',                      [$this, 'check_product_support'], 10, 3);

            // Products with options shouldn't have an add to cart url (other than the product page URL)
            add_filter('woocommerce_product_add_to_cart_url',               [$this, 'set_add_to_cart_url'], 10, 2);

            // Order again
	        add_filter('woocommerce_order_again_cart_item_data',            [$this, 'order_again_cart_item_data'], 10, 3);

        }

        public function order_again_cart_item_data($cart_item_data, $order_item, $order) {

	        $meta_data = $order_item->get_meta('_wapf_meta');

	        if( ! empty($meta_data) && is_array($meta_data) ) {

		        $wapf = [];
		        $field_groups = Field_Groups::get_field_groups_of_product( $order_item->get_product_id() );
		        $fields = Enumerable::from( $field_groups )->merge( function($x){return $x->fields; } )->toArray();

		        foreach( $meta_data as $field_id => $field_meta ) {
			        /** @var Field $field */
			        $field = Enumerable::from($fields)->firstOrDefault(function($x) use($field_id){ return $x->id === $field_id;});
					if( ! $field ) continue;

			        $cart_field = $this->to_cart_fields( $field, $order_item->get_product(), $field_meta['raw'] );
			        $wapf[] = $cart_field;
		        }

		        if(!empty($wapf)) {
			        $cart_item_data['wapf'] = $wapf;
			        $cart_item_data['wapf_field_groups'] = Enumerable::from( $field_groups )->select(function($x){return $x->id;})->toArray();
			        $cart_item_data['wapf_order_again'] = true;
		        }

	        }

	        return $cart_item_data;

        }

        public function set_add_to_cart_url($url, $product) {

            // Leave external/affiliate links alone.
            if($product->get_type() === 'external')
                return $url;

            if(Field_Groups::product_has_field_group($product))
                return $product->get_permalink();

            return $url;
        }

        public function check_product_support($support, $feature, $product)
        {
            if($feature === 'ajax_add_to_cart' && Field_Groups::product_has_field_group($product) )
                $support = false;

            return $support;
        }

        public function change_add_to_cart_text($text, $product) {

            // Bail early if not in stock.
            if(!$product->is_in_stock())
                return $text;

            if (in_array($product->get_type(), ['grouped', 'external']))
                return $text;

            if( Field_Groups::product_has_field_group($product) )
	            return esc_html(get_option('wapf_add_to_cart_text', __('Select options','advanced-product-fields-for-woocommerce')));

            return $text;

        }

	    public function validate_cart_data($passed, $product_id, $qty, $variation_id = null, $variations = null, $cart_item_data = null) {

        	// No hidden field given and we're not adding to cart via a URL
		    if( ! isset( $_REQUEST['wapf_field_groups'] ) && ! isset( $_GET['add-to-cart'] ) )
			    return $passed;

		    // No field groups, so our plugin isn't active on this product.
		    $field_groups = Field_Groups::get_field_groups_of_product( $product_id );
		    if( empty( $field_groups ) )
			    return $passed;

		    $skip_fieldgroup_validation = false;
		    $is_order_again =  isset( $cart_item_data['wapf_order_again'] ) && $cart_item_data['wapf_order_again'];
		    if( ! empty( $cart_item_data ) && $is_order_again )
			    $skip_fieldgroup_validation = true;

		    if( ! $skip_fieldgroup_validation) {

			    if ( isset( $_REQUEST['wapf_field_groups'] ) ) {

				    $field_group_ids = explode( ',', sanitize_text_field( $_REQUEST['wapf_field_groups'] ) );
				    foreach ( $field_groups as $fg ) {
					    if ( ! in_array( $fg->id, $field_group_ids ) ) {
						    wc_add_notice( esc_html( __( 'Error adding product to cart.', 'advanced-product-fields-for-woocommerce' ) ), 'error' );

						    return false;
					    }
				    }

			    }

			    foreach ( $field_groups as $group ) {
				    foreach ( $group->fields as $field ) {

					    // Our validation. For now, only checks "required"
					    if ( ! Fields::should_field_be_filled_out( $group, $field ) ) {
						    continue;
					    }

					    $value = Fields::get_raw_field_value_from_request( $field, 0, true );

					    if ( empty( $value ) ) {
                            /* translators: %s points to the field's label as given in the admin settings */
						    wc_add_notice( sprintf( __( 'The field "%s" is required.', 'advanced-product-fields-for-woocommerce' ), esc_html( $field->label ) ), 'error' );

						    return false;
					    }
				    }
			    }
		    }

		    return $passed;

	    }

        public function create_order_line_item($item, $cart_item_key, $values, $order) {

            if (empty($values['wapf']))
                return;

	        $fields_meta = [];

            foreach ($values['wapf'] as $field) {

                // Hack so that empty order lines would also be shown in backend.
                if( ! empty( $field['value'] ) ) {
	                $item->add_meta_data( $field['label'], $field['value'] );
	                $fields_meta[$field['id']] = [
                        'id'    => $field['id'],
	                	'label' => $field['label'],
		                'value' => $field['value'],
		                'raw'   => $field['raw']
	                ];
                }
            }

	        if( ! empty( $fields_meta ) ) {
				$item->add_meta_data(
					'_wapf_meta',
					$fields_meta
				);
	        }

        }

        public function display_field_groups() {

	            global $product;
	            if(!$product)
	                return;

            // No external fields for grouped/external products
            if(in_array($product->get_type(),['grouped','external']))
                return;

            // Global field groups
            $field_groups = Field_Groups::get_valid_field_groups('product');

            // "local" field group as set on the product itself.
            $product_field_group = get_post_meta($product->get_id(),'_wapf_fieldgroup', true);

            if($product_field_group)
                array_unshift($field_groups, Field_Groups::process_data($product_field_group));

            if(empty($field_groups))
                return;

            $group_ids = [];

            echo '<div class="wapf">';
            echo '<div class="wapf-wrapper">';
            foreach ($field_groups as $field_group) {

                $variation_rules = [];

                // If it's a variable product
                if($product->is_type('variable')) {
                    // Variable products don't have their own product URL, rather - they are children of a parent product and selecting them happens on the frontend.
                    // So we may have to show/hide fields on the frontend for variable products - so we need the rules that have subject "product_variation".

                    // Get all valid rule groups for this field group.
                    $valids = Field_Groups::get_valid_rule_groups($field_group);

                    $variation_rules = [];

                    // Format the rules about variations for output in HTML attribute so we can take care of it on the frontend.
                    // Result is like this: [ [rule1,rul2,...] [rule1,...] ] Rules within an array should be checked with AND. Arrays should be checked in OR fashion.
                    foreach ($valids as $rule_group) {
                        $filtered_rules = Enumerable::from($rule_group->rules)->where(function($rule) {
                            return $rule->subject === 'product_variation';
                        })->select(function($rule){
                            return [
                                'condition' => $rule->condition,
                                'values'     => Enumerable::from((array)$rule->value)->select(function($value) {
                                    return intval($value['id']);
                                })->toArray()
                            ];
                        })->toArray();

                        if(!empty($filtered_rules))
                            $variation_rules[] = $filtered_rules;
                    }

                }

                $group_ids[] = $field_group->id;

                $data = [
                    'has_variation_logic'   => !empty($variation_rules),
                    'variation_rules'       => $variation_rules
                ];

                // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
                echo Html::field_group($product, $field_group, $data);

            }

            echo '<input type="hidden" value="'. esc_attr( implode(',', $group_ids ) ) .'" name="wapf_field_groups"/>';
            echo '</div>';
            // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            Html::product_totals($product);
			echo '</div>';
        }

        public function add_fields_to_cart_item($cart_item_data, $product_id, $variation_id) {

            if(empty($_REQUEST['wapf']) || isset($cart_item_data['wapf']) || !isset($_REQUEST['wapf_field_groups']))
                return $cart_item_data;

            if(!is_array($_REQUEST['wapf']))
                return $cart_item_data;

            $field_groups   = Field_Groups::get_by_ids(explode(',', sanitize_text_field($_REQUEST['wapf_field_groups'])));
            $fields         = Enumerable::from($field_groups)->merge(function($x){return $x->fields; })->toArray();
            $wapf_data      = [];
	        $product        = wc_get_product(empty($variation_id) ? $product_id : $variation_id);

            foreach($_REQUEST['wapf'] as $raw_field_id => $field_value) {
				if($field_value === '')
					continue;

                $field_id = str_replace('field_','',$raw_field_id);

                /** @var Field $field */
                $field = Enumerable::from($fields)->firstOrDefault(function ($x) use ($field_id) {
                    return $x->id === $field_id;
                });

                if(!$field)
                    continue;

                $wapf_data[] = self::to_cart_fields($field, $product);

            }

            if(!empty($wapf_data))
                $cart_item_data['wapf'] = $wapf_data;

            return $cart_item_data;

        }

        public function adjust_cart_item_pricing($cart_obj) {

            if (is_admin() && ! defined('DOING_AJAX'))
                return;

            foreach( $cart_obj->get_cart() as $item ) {

                // Not for us, bail early.
                if( empty( $item['wapf'] ) )
                    continue;

                $quantity = empty($item['quantity']) ? 1 : wc_stock_amount($item['quantity']);
                $product = wc_get_product($item['variation_id'] ? $item['variation_id'] : $item['product_id']);
                $base = Helper::get_product_base_price($product);
                $options_total = 0;

                foreach ($item['wapf'] as $field) {
                    if(!empty($field['price'])) {
                        foreach ($field['price'] as $price) {

                            if($price['value']  === 0)
                                continue;

                            $options_total = $options_total + Fields::do_pricing($price['value'],$quantity);

                        }
                    }

                }

                if($options_total > 0)
                    $item['data']->set_price($base + $options_total);

            }

        }

        public function display_fields_on_cart_and_checkout($item_data, $cart_item) {

            // Bail early
            if(empty($cart_item['wapf']) || !is_array($cart_item['wapf']) )
                return $item_data;

            if (!is_array($item_data))
                $item_data = [];

            if((is_cart() && get_option('wapf_settings_show_in_cart','yes') === 'yes') || (is_checkout() && get_option('wapf_settings_show_in_checkout','yes') === 'yes') ) {

                foreach($cart_item['wapf'] as $field) {
                    // Skip empty items.

                    if(empty($field['value_cart']))
                        continue;

                    $item_data[] = [
                        'key'   => $field['label'], // Append "wapf_" so we know it's from our plugin later on.
                        'value' => $field['value_cart']
                    ];

                }
            }
            return $item_data;

        }

        #region Private Helpers

        private function to_cart_fields(Field $field, $product, $raw_value = null) {

        	if($raw_value === null)
                $raw_value = Fields::get_raw_field_value_from_request( $field );

            // Pricing
            $price_addition = []; // An array because we can have multiple pricing additions for a field (when it's a multiple choice field)

            // Calculate the price if needed.

            if( $field->pricing_enabled() ) {
                // $price_addition = Fields::pricing_value($field, $base,$quantity, $raw_value, $clone_idx > 0);
                $price_addition = Fields::pricing_value($field, $raw_value);
            }

            return [
                'id'                => $field->id,
                'type'              => $field->type,
	            'raw'               => is_string( $raw_value ) ? sanitize_textarea_field( $raw_value ) : array_map('sanitize_textarea_field', $raw_value),
                'value'             => Fields::value_to_string($field, $raw_value, $price_addition > 0, $product),
                // Cart may have different tax settings, so we should also have a value_cart to use in cart/checkout.
                'value_cart'        => Fields::value_to_string($field, $raw_value, $price_addition > 0, $product,'cart'),
                'price'             => $price_addition,
                'label'             => esc_html($field->label),
            ];
        }

        #endregion

    }
}