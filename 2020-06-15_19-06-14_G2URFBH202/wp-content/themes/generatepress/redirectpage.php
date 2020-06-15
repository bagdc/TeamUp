
<?php
/**
* Template Name: Redirect
*
* Redirect to my profile Page Template.
*
* @author IO
* @since 1.0.0
*/
get_header(); ?>
 
// If user is already logged in.
<?php 
if ( is_user_logged_in() ){
$stringa = bp_loggedin_user_domain();
header("Location: $stringa");
} else {
header("Location: https://bagdcteamup.altervista.org/nuovo-login/"); 
       }
?>
 
</section>
<!-- /section -->
 
<?php get_footer(); ?>