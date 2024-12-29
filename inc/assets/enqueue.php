<?php
if (!defined('ABSPATH')) exit;

function ncc_luxury_enqueue_assets() {
    // Styles
    wp_enqueue_style(
        'ncc-luxury-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap',
        [],
        null
    );
    
    wp_enqueue_style(
        'ncc-luxury-style',
        get_stylesheet_uri(),
        [],
        wp_get_theme()->get('Version')
    );

    // Only load React assets on front page
    if (is_front_page()) {
        $manifest_path = get_template_directory() . '/dist/manifest.json';
        
        if (file_exists($manifest_path)) {
            $manifest = json_decode(file_get_contents($manifest_path), true);
            
            // Enqueue main CSS
            if (isset($manifest['index.css'])) {
                wp_enqueue_style(
                    'ncc-luxury-react',
                    get_template_directory_uri() . '/dist/' . $manifest['index.css'],
                    [],
                    null
                );
            }
            
            // Enqueue main JS
            if (isset($manifest['index.js'])) {
                wp_enqueue_script(
                    'ncc-luxury-react',
                    get_template_directory_uri() . '/dist/' . $manifest['index.js'],
                    [],
                    null,
                    true
                );
                
                // Pass data to React
                wp_localize_script('ncc-luxury-react', 'wpData', [
                    'siteUrl' => get_site_url(),
                    'ajaxUrl' => admin_url('admin-ajax.php'),
                    'nonce' => wp_create_nonce('wp_rest'),
                    'vehicles' => get_vehicles_data()
                ]);
            }
        }
    }

    // Regular WordPress scripts
    wp_enqueue_script(
        'ncc-luxury-navigation',
        get_template_directory_uri() . '/assets/js/navigation.min.js',
        [],
        wp_get_theme()->get('Version'),
        true
    );
}
add_action('wp_enqueue_scripts', 'ncc_luxury_enqueue_assets');

// Optimize assets
function ncc_luxury_optimize_assets() {
    // Remove emoji script
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');

    // Remove unnecessary meta tags
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');
    remove_action('wp_head', 'wp_shortlink_wp_head');

    // Disable self pingbacks
    add_action('pre_ping', function(&$links) {
        $home = get_option('home');
        foreach ($links as $l => $link) {
            if (strpos($link, $home) === 0) {
                unset($links[$l]);
            }
        }
    });
}
add_action('init', 'ncc_luxury_optimize_assets');