<?php
if (!defined('ABSPATH')) exit;

function ncc_luxury_register_vehicle_post_type() {
    register_post_type('vehicle', [
        'labels' => [
            'name' => __('Vehicles', 'ncc-luxury'),
            'singular_name' => __('Vehicle', 'ncc-luxury')
        ],
        'public' => true,
        'has_archive' => true,
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'menu_icon' => 'dashicons-car',
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'fleet']
    ]);

    register_taxonomy('vehicle_category', 'vehicle', [
        'label' => __('Categories', 'ncc-luxury'),
        'hierarchical' => true,
        'show_in_rest' => true,
        'rewrite' => ['slug' => 'vehicle-category']
    ]);
}
add_action('init', 'ncc_luxury_register_vehicle_post_type');