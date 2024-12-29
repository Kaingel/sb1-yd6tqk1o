<?php
if (!defined('ABSPATH')) exit;

function ncc_luxury_setup_theme() {
    // Theme supports
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ]);
    add_theme_support('custom-logo', [
        'height' => 100,
        'width' => 400,
        'flex-height' => true,
        'flex-width' => true
    ]);
    add_theme_support('custom-header');
    add_theme_support('automatic-feed-links');
    add_theme_support('wp-block-styles');
    add_theme_support('responsive-embeds');
    
    // Register menus
    register_nav_menus([
        'primary' => __('Primary Menu', 'ncc-luxury'),
        'footer' => __('Footer Menu', 'ncc-luxury')
    ]);
}
add_action('after_setup_theme', 'ncc_luxury_setup_theme');