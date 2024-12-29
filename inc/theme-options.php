<?php
if (!defined('ABSPATH')) exit;

function ncc_luxury_customize_register($wp_customize) {
    // Contact Information Section
    $wp_customize->add_section('contact_info', array(
        'title' => __('Contact Information', 'ncc-luxury'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('contact_info', array(
        'default' => '',
        'sanitize_callback' => 'wp_kses_post',
    ));

    $wp_customize->add_control('contact_info', array(
        'label' => __('Contact Information', 'ncc-luxury'),
        'section' => 'contact_info',
        'type' => 'textarea',
    ));

    // Social Media Links
    $wp_customize->add_section('social_links', array(
        'title' => __('Social Media Links', 'ncc-luxury'),
        'priority' => 31,
    ));

    $social_platforms = array('facebook', 'instagram', 'linkedin');

    foreach ($social_platforms as $platform) {
        $wp_customize->add_setting($platform . '_url', array(
            'default' => '',
            'sanitize_callback' => 'esc_url_raw',
        ));

        $wp_customize->add_control($platform . '_url', array(
            'label' => ucfirst($platform) . ' URL',
            'section' => 'social_links',
            'type' => 'url',
        ));
    }
}
add_action('customize_register', 'ncc_luxury_customize_register');