<footer class="bg-black text-white py-12">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
            <div>
                <h3 class="text-2xl font-serif mb-4"><?php bloginfo('name'); ?></h3>
                <p class="text-gray-400"><?php bloginfo('description'); ?></p>
            </div>
            <div>
                <h4 class="text-xl mb-4"><?php _e('Contact', 'ncc-luxury'); ?></h4>
                <?php if ($contact_info = get_theme_mod('contact_info')): ?>
                    <div class="space-y-2 text-gray-400">
                        <?php echo wp_kses_post($contact_info); ?>
                    </div>
                <?php endif; ?>
            </div>
            <div>
                <h4 class="text-xl mb-4"><?php _e('Follow Us', 'ncc-luxury'); ?></h4>
                <?php get_template_part('template-parts/social-links'); ?>
            </div>
        </div>
    </div>
    <?php wp_footer(); ?>
</footer>