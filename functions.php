<?php
if (!defined('ABSPATH')) exit;

// Autoload theme files
$files_to_load = [
    'inc/setup/theme-setup.php',
    'inc/assets/enqueue.php',
    'inc/performance/caching.php',
    'inc/optimization/images.php',
    'inc/post-types/vehicles.php',
    'inc/theme-options.php'
];

foreach ($files_to_load as $file) {
    require_once get_template_directory() . '/' . $file;
}

// React App Integration
function ncc_luxury_enqueue_react_app() {
    $asset_manifest = json_decode(file_get_contents(get_template_directory() . '/dist/manifest.json'), true);
    
    if (isset($asset_manifest['index.html'])) {
        // Enqueue React built files
        wp_enqueue_style(
            'ncc-luxury-react',
            get_template_directory_uri() . '/dist/' . $asset_manifest['index.css'],
            [],
            null
        );

        wp_enqueue_script(
            'ncc-luxury-react',
            get_template_directory_uri() . '/dist/' . $asset_manifest['index.js'],
            [],
            null,
            true
        );

        // Pass WordPress data to React
        wp_localize_script('ncc-luxury-react', 'wpData', [
            'siteUrl' => get_site_url(),
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('wp_rest'),
            'vehicles' => get_vehicles_data()
        ]);
    }
}
add_action('wp_enqueue_scripts', 'ncc_luxury_enqueue_react_app');

// Get vehicles data for React
function get_vehicles_data() {
    $vehicles = get_posts([
        'post_type' => 'vehicle',
        'posts_per_page' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC'
    ]);

    return array_map(function($vehicle) {
        $image = get_the_post_thumbnail_url($vehicle->ID, 'vehicle-large');
        $features = get_post_meta($vehicle->ID, 'vehicle_features', true);
        $price = get_post_meta($vehicle->ID, 'vehicle_price', true);

        return [
            'id' => $vehicle->ID,
            'name' => $vehicle->post_title,
            'description' => $vehicle->post_excerpt,
            'image' => $image ?: '',
            'features' => $features ?: [],
            'basePrice' => $price ?: 0
        ];
    }, $vehicles);
}