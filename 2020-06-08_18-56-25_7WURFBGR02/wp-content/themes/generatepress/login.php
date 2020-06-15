<?php
/**
* Template Name: Login Page A2
*
* Login Page Template.
*
* @author Alessio Angeloro
* @since 1.0.0
*/
get_header(); ?>
 
<style>
section.a2_loginForm label {
width: 100%;
}
section.a2_loginForm input[type="text"],section.a2_loginForm input[type="password"] {
border-radius: 3px;
width: 100%;
}
section.a2_loginForm p.login-password::before {
content: "\f023";
font-family: fontawesome;
margin: 35px 0px 0px 334px;
position: absolute;
}
section.a2_loginForm p.login-username::before {
content: "\f007";
font-family: fontawesome;
margin: 35px 0 0 336px;
position: absolute;
}
section.a2_loginForm {
margin: 0 auto;
display: block;
width: 400px;
background: #ffffff;
border-radius: 3px;
padding: 22px;
}
</style>
 
<!-- section -->
<section class="a2_loginForm">
<?php
global $user_login;
// In case of a login error.
if ( isset( $_GET['login'] ) && $_GET['login'] == 'failed' ) : ?>
<div class="a2_error">
<p><?php _e( 'FAILED: Try again!', 'A2' ); ?></p>
</div>
<?php
endif;
// If user is already logged in.
if ( is_user_logged_in() ) : ?>
 
<div class="a2_logout">
 
<?php
_e( 'Ciao, sei connesso come ', 'A2' );
echo '<strong>' . $user_login .'</strong>';
?>
 
</div>
 
<a id="wp-submit" class="btn btn-danger btn-lg" href="<?php echo wp_logout_url( home_url() ); ?>" title="Logout">
<?php _e( 'Logout', 'A2' ); ?>
</a>
 
<?php
// If user is not logged in.
else:
 
// Login form arguments.
$args = array(
'echo' => true,
'redirect' => home_url( '/' ),
'form_id' => 'loginform',
'label_username' => __( 'Username' ),
'label_password' => __( 'Password' ),
'label_remember' => __( 'Remember Me' ),
'label_log_in' => __( 'Log In' ),
'id_username' => 'user_login',
'id_password' => 'user_pass',
'id_remember' => 'rememberme',
'id_submit' => 'wp-submit',
'remember' => true,
'value_username' => NULL,
'value_remember' => true
);
 
// Calling the login form.
wp_login_form( $args );
endif;
?>
 
</section>
<!-- /section -->
 
<?php get_footer(); ?>