<?php
/**
 * BP Nouveau Group's edit settings template.
 *
 * @since 3.0.0
 * @version 3.2.0
 */
?>

<?php if ( bp_is_group_create() ) : ?>

	<h3 class="bp-screen-title creation-step-name">
		<?php esc_html_e( 'Select Group Settings', 'buddypress' ); ?>
	</h3>

<?php else : ?>

	<h2 class="bp-screen-title">
		<?php esc_html_e( 'Change Group Settings', 'buddypress' ); ?>
	</h2>

<?php endif; ?>

<div class="group-settings-selections">

	<fieldset class="radio group-status-type">
		<legend><?php esc_html_e( 'Privacy Options', 'buddypress' ); ?></legend>


		<label for="group-status-private">
			<input type="radio" name="group-status" id="group-status-private" value="private"<?php { ?> checked="checked"<?php } ?> aria-describedby="private-group-description" /> <?php esc_html_e( 'This is a private group', 'buddypress' ); ?>
		</label>

		<ul id="private-group-description">
			<li><?php esc_html_e( 'Only people who request membership and are accepted can join the group.', 'buddypress' ); ?></li>
			<li><?php esc_html_e( 'This group will be listed in the groups directory and in search results.', 'buddypress' ); ?></li>
			<li><?php esc_html_e( 'Group content and activity will only be visible to members of the group.', 'buddypress' ); ?></li>
		</ul>

	</fieldset>

<?php
// Group type selection
$group_types = bp_groups_get_group_types( array( 'show_in_create_screen' => true ), 'objects' );
if ( $group_types ) : ?>

	<fieldset class="group-create-types">
		<legend><?php esc_html_e( 'Group Types', 'buddypress' ); ?></legend>

		<p tabindex="0"><?php esc_html_e( 'Select the types this group should be a part of.', 'buddypress' ); ?></p>

		<?php foreach ( $group_types as $type ) : ?>
			<div class="checkbox">
				<label for="<?php printf( 'group-type-%s', $type->name ); ?>">
					<input type="checkbox" name="group-types[]" id="<?php printf( 'group-type-%s', $type->name ); ?>" value="<?php echo esc_attr( $type->name ); ?>" <?php bp_nouveau_group_type_checked( $type ); ?>/> <?php echo esc_html( $type->labels['name'] ); ?>
					<?php
					if ( ! empty( $type->description ) ) {
						printf( '&ndash; %s', '<span class="bp-group-type-desc">' . esc_html( $type->description ) . '</span>' );
					}
					?>
				</label>
			</div>

		<?php endforeach; ?>

	</fieldset>

<?php endif; ?>

	<fieldset class="radio group-invitations">
		<legend><?php esc_html_e( 'Group Invitations', 'buddypress' ); ?></legend>
<label for="group-invite-status-admins"><input type="radio" name="group-invite-status" id="group-invite-status-admins" value="admins"<?php bp_group_show_invite_status_setting( 'admins' ); ?> checked="checked" /> <?php _e( 'Group admins only', 'buddypress' ); ?></label>

	</fieldset>

</div><!-- // .group-settings-selections -->
