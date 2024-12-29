<?php get_header(); ?>

<main class="pt-20">
    <?php if (is_front_page()): ?>
        <div id="root"></div>
    <?php else: ?>
        <div class="container mx-auto px-4 py-12">
            <?php if (have_posts()): ?>
                <?php while (have_posts()): the_post(); ?>
                    <?php get_template_part('template-parts/content', get_post_type()); ?>
                <?php endwhile; ?>
                
                <?php the_posts_pagination(); ?>
            <?php endif; ?>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>