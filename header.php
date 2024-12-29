<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<nav class="bg-black/90 text-white fixed w-full z-50 top-0 left-0">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16 md:h-20">
            <?php if (has_custom_logo()): ?>
                <?php the_custom_logo(); ?>
            <?php else: ?>
                <div class="text-2xl font-serif"><?php bloginfo('name'); ?></div>
            <?php endif; ?>
            
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'container_class' => 'hidden md:flex items-center space-x-8',
                'menu_class' => 'flex space-x-8'
            ));
            ?>
        </div>
    </div>
</nav>