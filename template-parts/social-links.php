<div class="flex space-x-4">
    <?php if ($facebook_url = get_theme_mod('facebook_url')): ?>
        <a href="<?php echo esc_url($facebook_url); ?>" class="text-gray-400 hover:text-gold">Facebook</a>
    <?php endif; ?>
    
    <?php if ($instagram_url = get_theme_mod('instagram_url')): ?>
        <a href="<?php echo esc_url($instagram_url); ?>" class="text-gray-400 hover:text-gold">Instagram</a>
    <?php endif; ?>
    
    <?php if ($linkedin_url = get_theme_mod('linkedin_url')): ?>
        <a href="<?php echo esc_url($linkedin_url); ?>" class="text-gray-400 hover:text-gold">LinkedIn</a>
    <?php endif; ?>
</div>