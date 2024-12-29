<?php
if (!defined('ABSPATH')) exit;

function ncc_luxury_setup_caching() {
    // Browser caching headers
    add_action('send_headers', function() {
        if (!is_admin()) {
            header('Cache-Control: public, max-age=31536000');
            header('Expires: ' . gmdate('D, d M Y H:i:s', time() + 31536000) . ' GMT');
            header('X-Content-Type-Options: nosniff');
        }
    });

    // Add preload for critical assets
    add_action('wp_head', function() {
        ?>
        <link rel="preload" href="<?php echo get_theme_file_uri('assets/css/critical.min.css'); ?>" as="style">
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap" as="style">
        <?php
    }, 1);
}
add_action('init', 'ncc_luxury_setup_caching');