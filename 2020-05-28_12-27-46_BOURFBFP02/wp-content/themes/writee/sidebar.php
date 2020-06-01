<?php
/*****************************************/
## common sidebar page
/*****************************************/
if ( ! is_active_sidebar( 'primary-sidebar' ) ) {
	return;
}
/* modifica */ do_action( 'av_main_banner' ); /* fine */
dynamic_sidebar('primary-sidebar'); 

?>