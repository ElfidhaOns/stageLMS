<?php /* @var $model array */ ?>

<div class="wapf-field__setting" data-setting="<?php echo esc_attr( $model['id'] ); ?>">
    <div class="wapf-setting__label">
        <label><?php echo wp_kses_post($model['label'],'advanced-product-fields-for-woocommerce');?></label>
        <?php if(isset($model['description'])) { ?>
            <p class="wapf-description">
                <?php echo wp_kses_post($model['description'],'advanced-product-fields-for-woocommerce');?>
            </p>
        <?php } ?>
    </div>
    <div class="wapf-setting__input">
        <select rv-default="<?php echo $model['is_field_setting'] ? 'field' : 'settings'; ?>.<?php echo esc_attr( $model['id'] ); ?>" data-default="<?php echo isset($model['default']) ? esc_attr($model['default']) : ''; ?>" rv-on-change="onChange" rv-value="<?php echo $model['is_field_setting'] ? 'field' : 'settings'; ?>.<?php echo esc_attr( $model['id'] ); ?>">
            <?php
            foreach($model['options'] as $option) {
                echo '<option '.($option['pro'] === true ? 'disabled':'').' value="'.esc_attr($option['id']).'">'.esc_html($option['title']).($option['pro'] === true ? __(' (Pro only)','advanced-product-fields-for-woocommerce'):'').'</option>';
            }
            ?>
        </select>
    </div>
</div>