<?php if ( is_active_sidebar( 'sidebar-1' ) ) : ?>
	<div id="sidebar">
		<?php /* modifica */ do_action( 'av_main_banner' ); /* fine */ ?>
		<?php dynamic_sidebar( 'sidebar-1' ); ?>
	</div> <!-- end #sidebar -->
<?php endif; ?>
