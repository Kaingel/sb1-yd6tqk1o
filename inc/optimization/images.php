<?php
if (!defined('ABSPATH')) exit;

function ncc_luxury_optimize_images() {
    // Add WebP support
    add_filter('upload_mimes', function($mimes) {
        $mimes['webp'] = 'image/webp';
        return $mimes;
    });

    // Add responsive image sizes
    add_image_size('vehicle-thumbnail', 600, 400, true);
    add_image_size('vehicle-large', 1200, 800, true);
    add_image_size('vehicle-mobile', 400, 267, true);
    add_image_size('hero-desktop', 1920, 1080, true);
    add_image_size('hero-mobile', 768, 432, true);
    
    // Enable lazy loading
    add_filter('wp_get_attachment_image_attributes', function($attr) {
        $attr['loading'] = 'lazy';
        $attr['decoding'] = 'async';
        return $attr;
    });

    // Add srcset for responsive images
    add_filter('wp_calculate_image_srcset', function($sources, $size_array, $image_src, $image_meta, $attachment_id) {
        if (isset($image_meta['sizes']['vehicle-mobile'])) {
            $sources[400] = [
                'url' => wp_get_attachment_image_url($attachment_id, 'vehicle-mobile'),
                'descriptor' => 'w',
                'value' => 400
            ];
        }
        return $sources;
    }, 10, 5);
}
add_action('init', 'ncc_luxury_optimize_images');