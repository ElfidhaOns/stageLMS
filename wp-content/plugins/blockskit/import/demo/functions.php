<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

/**
 * The Blockskit Import hooks callback functionality of the plugin.
 *
 */
class Bk_Import_Hooks {

    private $hook_suffix;

    public static function instance() {

        static $instance = null;

        if ( null === $instance ) {
            $instance = new self();
        }

        return $instance;
    }

    /**
     * Initialize the class and set its properties.
     *
     */
    public function __construct() {
        add_action( 'switch_theme', array( $this, 'flush_transient' ) );
    }

    /**
     * Check to see if advanced import plugin is not installed or activated.
     * Adds the Demo Import menu under Apperance.
     *
     */
    public function import_menu() {
        if( !class_exists( 'Advanced_Import' ) ){
            $this->hook_suffix[] = add_theme_page( esc_html__( 'Demo Import ','blockskit' ), esc_html__( 'Demo Import','blockskit'  ), 'manage_options', 'advanced-import', array( $this, 'demo_import_screen' ) );
        } 
    }

    /**
     * Enqueue styles.
     *
     */
    public function enqueue_styles( $hook_suffix ) {
        if ( !is_array( $this->hook_suffix ) || !in_array( $hook_suffix, $this->hook_suffix ) ){
            return;
        }
    
        wp_enqueue_style( 'bk-demo-import', BK_TEMPLATE_URL . 'assets/demo-import.css',array( 'wp-admin' ), '1.0.0', 'all' );
    }

    /**
     * Enqueue scripts.
     *
     */
    public function enqueue_scripts( $hook_suffix ) {
        if ( !is_array($this->hook_suffix) || !in_array( $hook_suffix, $this->hook_suffix )){
            return;
        }

        wp_enqueue_script( 'bk-demo-import', BK_TEMPLATE_URL . 'assets/demo-import.js', array( 'jquery' ), '1.0.0', true );
        wp_localize_script( 'bk-demo-import', 'bk_import', array(
            'btn_text' => esc_html__( 'Processing...', 'blockskit' ),
            'nonce'    => wp_create_nonce( 'bk_import_nonce' )
        ) );
    }

    /**
     * The demo import menu page content.
     *
     */
    public function demo_import_screen() {
        ?>
        <div id="ads-notice">
            <div class="ads-container">
                <img class="ads-screenshot" src="<?php echo esc_url( bk_import_get_theme_screenshot() ) ?>" >
                <div class="ads-notice">
                    <h2>
                        <?php
                        printf(
                            esc_html__( 'Thank you for choosing %1$s! It is detected that an essential plugin, Advanced Import, is not activated. Importing demos for %1$s can begin after pressing the button below.', 'blockskit' ), '<strong>'. wp_get_theme()->get('Name'). '</strong>');
                        ?>
                    </h2>

                    <p class="plugin-install-notice"><?php esc_html_e( 'Clicking the button below will install and activate the Advanced Import plugin.', 'blockskit' ); ?></p>

                    <a class="ads-gsm-btn button button-primary" href="#" data-name="" data-slug="" aria-label="<?php esc_html_e( 'Get started with the Theme', 'blockskit' ); ?>">
                        <?php esc_html_e( 'Install Now', 'blockskit' );?>
                    </a>
                </div>
            </div>
        </div>
        <?php

    }

    /**
     * Installs or activates advanced import plugin if not detected as such.
     *
     */
    public function install_advanced_import() {

        check_ajax_referer( 'bk_import_nonce', 'security' );

        $slug   = 'advanced-import';
        $plugin = 'advanced-import/advanced-import.php';
        $status = array(
            'install' => 'plugin',
            'slug'    => sanitize_key( wp_unslash( $slug ) ),
        );
        $status['redirect'] = admin_url( '/themes.php?page=advanced-import&browse=all&at-gsm-hide-notice=welcome' );

        if ( is_plugin_active_for_network( $plugin ) || is_plugin_active( $plugin ) ) {
            // Plugin is activated
            wp_send_json_success( $status );
        }

        if ( ! current_user_can( 'install_plugins' ) ) {
            $status['errorMessage'] = __( 'Sorry, you are not allowed to install plugins on this site.', 'blockskit' );
            wp_send_json_error( $status );
        }

        include_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
        include_once ABSPATH . 'wp-admin/includes/plugin-install.php';

        // Looks like a plugin is installed, but not active.
        if ( file_exists( WP_PLUGIN_DIR . '/' . $slug ) ) {
            $plugin_data          = get_plugin_data( WP_PLUGIN_DIR . '/' . $plugin );
            $status['plugin']     = $plugin;
            $status['pluginName'] = $plugin_data['Name'];

            if ( current_user_can( 'activate_plugin', $plugin ) && is_plugin_inactive( $plugin ) ) {
                $result = activate_plugin( $plugin );

                if ( is_wp_error( $result ) ) {
                    $status['errorCode']    = $result->get_error_code();
                    $status['errorMessage'] = $result->get_error_message();
                    wp_send_json_error( $status );
                }

                wp_send_json_success( $status );
            }
        }

        $api = plugins_api(
            'plugin_information',
            array(
                'slug'   => sanitize_key( wp_unslash( $slug ) ),
                'fields' => array(
                    'sections' => false,
                ),
            )
        );

        if ( is_wp_error( $api ) ) {
            $status['errorMessage'] = $api->get_error_message();
            wp_send_json_error( $status );
        }

        $status['pluginName'] = $api->name;

        $skin     = new WP_Ajax_Upgrader_Skin();
        $upgrader = new Plugin_Upgrader( $skin );
        $result   = $upgrader->install( $api->download_link );

        if ( defined( 'WP_DEBUG' ) && WP_DEBUG ) {
            $status['debug'] = $skin->get_upgrade_messages();
        }

        if ( is_wp_error( $result ) ) {
            $status['errorCode']    = $result->get_error_code();
            $status['errorMessage'] = $result->get_error_message();
            wp_send_json_error( $status );
        } elseif ( is_wp_error( $skin->result ) ) {
            $status['errorCode']    = $skin->result->get_error_code();
            $status['errorMessage'] = $skin->result->get_error_message();
            wp_send_json_error( $status );
        } elseif ( $skin->get_errors()->get_error_code() ) {
            $status['errorMessage'] = $skin->get_error_messages();
            wp_send_json_error( $status );
        } elseif ( is_null( $result ) ) {
            require_once( ABSPATH . 'wp-admin/includes/file.php' );
            WP_Filesystem();
            global $wp_filesystem;

            $status['errorCode']    = 'unable_to_connect_to_filesystem';
            $status['errorMessage'] = __( 'Unable to connect to the filesystem. Please confirm your credentials.', 'blockskit' );

            // Pass through the error from WP_Filesystem if one was raised.
            if ( $wp_filesystem instanceof WP_Filesystem_Base && is_wp_error( $wp_filesystem->errors ) && $wp_filesystem->errors->get_error_code() ) {
                $status['errorMessage'] = esc_html( $wp_filesystem->errors->get_error_message() );
            }

            wp_send_json_error( $status );
        }

        $install_status = install_plugin_install_status( $api );

        if ( current_user_can( 'activate_plugin', $install_status['file'] ) && is_plugin_inactive( $install_status['file'] ) ) {
            $result = activate_plugin( $install_status['file'] );

            if ( is_wp_error( $result ) ) {
                $status['errorCode']    = $result->get_error_code();
                $status['errorMessage'] = $result->get_error_message();
                wp_send_json_error( $status );
            }
        }

        wp_send_json_success( $status );

    }
    /**
     * Demo list of the Blockskit with their recommended plugins.
     *
     */
    public function bk_import_demo_import_lists( $demos ){

        $theme_slug = bk_import_get_theme_slug();
        $demo_lists = array();
        switch( $theme_slug ):
            case 'blockskit':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
            break;
            case 'blockskit-base':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-base-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-corporate':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-corporate-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-shop':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-shop-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-medical':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-medical-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-business':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-business-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-education':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-education-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-agency':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-agency-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-marketing':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-marketing-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-consultancy':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-consultancy-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-construction':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-construction-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-startup':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-startup-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-digital-agency':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-digital-agency-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, DAY_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-medical-health':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-medical-health-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, MINUTE_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-blog':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-blog-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, MINUTE_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-corporate-services':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-corporate-services-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, MINUTE_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-finance':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-finance-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, MINUTE_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-accounting':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-accounting-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, MINUTE_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-online-education':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-online-education-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, MINUTE_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-business-sector':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-business-sector-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, MINUTE_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            case 'blockskit-consulting-firm':
                $list_url = "https://gitlab.com/api/v4/projects/46250773/repository/files/blockskit-consulting-firm-demo-list%2Ejson?ref=master";
                while( empty( get_transient( 'bk_import_demo_lists' ) ) ){
                    $request_demo_list_body = wp_remote_retrieve_body( wp_remote_get( $list_url ) );
                    if( is_wp_error( $request_demo_list_body ) ) {
                        return false; // Bail early
                    }
                    $demo_list_std     = json_decode( $request_demo_list_body, true );
                    $demo_list_array   = (array) $demo_list_std;
                    $demo_list_content = $demo_list_array['content'];
                    $demo_lists_json   = base64_decode( $demo_list_content );
                    $demo_lists        = json_decode( $demo_lists_json, true );
                    set_transient( 'bk_import_demo_lists', $demo_lists, MINUTE_IN_SECONDS );
                }
                $demo_lists = get_transient( 'bk_import_demo_lists' );
                break;
            default:
                $demo_lists = array();
            break;
        endswitch;
        return array_merge( $demo_lists, $demos );
    }

    /**
     * Deletes the demo and template lists upon theme switch.
     *
     */
    public function flush_transient(){
        delete_transient( 'bk_import_demo_lists' );
    }

    /**
     * Includes options in advanced export plugin demo zip.
     *
     */
    public function bk_import_include_options( $included_options ){
        $my_options = array(
            'site_logo',
            'site_icon'
        );
        return array_unique (array_merge( $included_options, $my_options));
    }

    /**
     * Replaces attachment id during demo import.
     *
     */
    public function bk_import_replace_attachment_ids( $replace_attachment_ids ){

        /*attachments IDS*/
        $attachment_ids = array(
            'site_logo',
            'site_icon'
        );
                
        return array_merge( $replace_attachment_ids, $attachment_ids );
    }
}

/**
 * Begins execution of the hooks.
 *
 */
function bk_import_hooks( ) {
    return Bk_Import_Hooks::instance();
}