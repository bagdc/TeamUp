<?php
/**
 * Bp add group type general setting file.
 *
 * @since    1.0.0
 * @author   Wbcom Designs
 * @package  Bp_Add_Group_Types
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
global $bp_grp_types;
?>
<div class="wbcom-tab-content">
	<form method="post" action="options.php">
		<?php
		settings_fields( 'bpgt_general_settings' );
		do_settings_sections( 'bpgt_general_settings' );
		?>
		<table class="form-table wcctp-admin-page-table">
			<tbody>
				<!-- GROUP TYPE SEARCH -->
				<tr>
					<th scope="row"><label for="group_types_search"><?php esc_html_e( 'Enable Group Type Search', 'bp-add-group-types' ); ?></label></th>
					<td>
						<input type="checkbox" value="on" name="bpgt_general_settings[group_type_search_enabled]" id="bpgt_group_types_search_enabled" <?php echo ( isset( $bp_grp_types->group_type_search_enabled ) && 'on' === $bp_grp_types->group_type_search_enabled ) ? 'checked' : ''; ?> />
						<label for="group_type_search_enabled"><?php esc_html_e( 'Group type searching on front-end', 'bp-add-group-types' ); ?></label>
						<p class="description"><?php esc_html_e( 'This setting will enable the group type searching on the \'domain.com/groups\' page.', 'bp-add-group-types' ); ?></p>
					</td>
				</tr>
			</tbody>
		</table>
		<?php submit_button(); ?>
	</form>
</div>
