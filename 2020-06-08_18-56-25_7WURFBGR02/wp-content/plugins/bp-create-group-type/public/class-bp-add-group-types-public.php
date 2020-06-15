<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://wbcomdesigns.com/
 * @since      1.0.0
 *
 * @package    Bp_Add_Group_Types
 * @subpackage Bp_Add_Group_Types/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Bp_Add_Group_Types
 * @subpackage Bp_Add_Group_Types/public
 * @author     Wbcom Designs <admin@wbcomdesigns.com>
 */

if ( ! class_exists( 'Bp_Add_Group_Types_Public' ) ) :

	class Bp_Add_Group_Types_Public {

		/**
		 * The ID of this plugin.
		 *
		 * @since    1.0.0
		 * @access   private
		 * @var      string    $plugin_name    The ID of this plugin.
		 */
		private $plugin_name;

		/**
		 * The version of this plugin.
		 *
		 * @since    1.0.0
		 * @access   private
		 * @var      string    $version    The current version of this plugin.
		 */
		private $version;

		/**
		 * Initialize the class and set its properties.
		 *
		 * @since    1.0.0
		 * @param      string $plugin_name       The name of the plugin.
		 * @param      string $version    The version of this plugin.
		 */
		public function __construct( $plugin_name, $version ) {

			$this->plugin_name = $plugin_name;
			$this->version     = $version;
		}

		/**
		 * Register the stylesheets for the public-facing side of the site.
		 *
		 * @since    1.0.0
		 */
		public function enqueue_styles() {

			/**
			 * This function is provided for demonstration purposes only.
			 *
			 * An instance of this class should be passed to the run() function
			 * defined in Bp_Add_Group_Types_Loader as all of the hooks are defined
			 * in that particular class.
			 *
			 * The Bp_Add_Group_Types_Loader will then create the relationship
			 * between the defined hooks and the functions defined in this
			 * class.
			 */
			global $bp;
			$bp_template_option = bp_get_option( '_bp_theme_package_id' );

			if ( bp_is_groups_component() ) {

				wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/bp-add-group-types-public.css', array(), $this->version, 'all' );

				if ( 'nouveau' == $bp_template_option ) {
					wp_enqueue_style( $this->plugin_name . '-nouveau-css', plugin_dir_url( __FILE__ ) . 'css/bp-add-group-types-public-nouveau.css', array(), $this->version, 'all' );
				}
			}
		}

		/**
		 * Register the JavaScript for the public-facing side of the site.
		 *
		 * @since    1.0.0
		 */
		public function enqueue_scripts() {

			/**
			 * This function is provided for demonstration purposes only.
			 *
			 * An instance of this class should be passed to the run() function
			 * defined in Bp_Add_Group_Types_Loader as all of the hooks are defined
			 * in that particular class.
			 *
			 * The Bp_Add_Group_Types_Loader will then create the relationship
			 * between the defined hooks and the functions defined in this
			 * class.
			 */
			global $bp;
			global $bp_grp_types;
			$bp_template_option = bp_get_option( '_bp_theme_package_id' );

			if ( bp_is_groups_component() ) {

				if ( 'nouveau' == $bp_template_option ) {
					wp_enqueue_script( $this->plugin_name . '-nouveau', plugin_dir_url( __FILE__ ) . 'js/bp-add-group-types-public-nouveau.js', array( 'jquery' ), $this->version, false );
				} else {

					wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/bp-add-group-types-public.js', array( 'jquery' ), $this->version, false );

					wp_localize_script(
						$this->plugin_name,
						'bpgt_front_js_object',
						array(
							'ajaxurl' => admin_url( 'admin-ajax.php' ),
						)
					);
				}
			}

		}

		/**
		 * Change the group search template.
		 *
		 * @param string $search_form_html The seach form html.
		 * @since    1.0.0
		 */
		public function bpgt_modified_group_search_form( $search_form_html ) {
			global $bp_grp_types;
			if ( ! isset( $bp_grp_types->group_type_search_template ) || 'textbox' !== $bp_grp_types->group_type_search_template ) {
				$group_types       = bp_groups_get_group_types( array(), 'objects' );
				$group_select_html = '';
				if ( ! empty( $group_types ) && is_array( $group_types ) ) {
					$group_select_html .= '<div class="bpgt-groups-search-group-type select-wrap" id="bpgt-groups-nouveau-search-group-type"><select class="bpgt-groups-search-group-type">';
					$group_select_html .= '<option value="">' . __( 'All Types', 'bp-add-group-types' ) . '</option>';
					foreach ( $group_types as $group_type_slug => $group_type ) {
						$group_select_html .= '<option value="' . $group_type_slug . '">' . $group_type->labels['name'] . '</option>';
					}
					$group_select_html .= '</select><span class="select-arrow" aria-hidden="true"></span></div>';
				}

				if ( isset( $bp_grp_types->group_type_search_template ) && 'both' === $bp_grp_types->group_type_search_template ) {
					$search_html       = $search_form_html;
					$search_form_html  = '';
					$search_form_html .= $group_select_html;
					$search_form_html .= $search_html;
				} else {
					$search_form_html = $group_select_html;
				}
			}
			return $search_form_html;
		}

		/**
		 * Change the group search template.
		 *
		 * @param string $bp_ajax_querystring The seach form html.
		 * @param string $object The seach form html.
		 * @since    1.0.0
		 */
		public function bpgt_alter_bp_ajax_querystring( $bp_ajax_querystring, $object ) {
			global $bp;
			$object             = filter_input( INPUT_POST, 'object' );
			$query_extras       = filter_input( INPUT_POST, 'extras' );
			$scope              = filter_input( INPUT_POST, 'scope' );
			$bp_template_option = bp_get_option( '_bp_theme_package_id' );

			if ( empty( $object ) ) {
				if ( bp_is_groups_directory() ) {
					$object = 'groups';
				}
			}
			if ( 'legacy' == $bp_template_option ) {
				parse_str( $query_extras, $legacy_extra );
				if ( empty( $legacy_extra['group_type'] ) ) {
					if ( isset( $_COOKIE['current_bpgt_tab'] ) ) {
						$current_tab = $_COOKIE['current_bpgt_tab'];
						if ( 'all' == $_COOKIE['current_bpgt_tab'] ) {
							$query_extras = '';
						} else {
							$query_extras = 'group_type=' . $current_tab;
						}
					}
				}
			} else {
				if ( empty( $query_extras ) ) {
					if ( isset( $_COOKIE['current_bpgt_tab'] ) ) {
						$current_tab = $_COOKIE['current_bpgt_tab'];
						if ( 'all' == $_COOKIE['current_bpgt_tab'] ) {
							$query_extras = '';
						} else {
							$query_extras = 'group_type=' . $current_tab;
						}
					}
				}
			}
			parse_str( $query_extras, $extras );
			if ( null !== $extras && isset( $extras['group_type'] ) ) {
				if ( 'all' === $extras['group_type'] ) {
					$extras = null;
				}
			}

			if ( ( null !== $object ) && ( 'groups' === $object ) && ( null !== $extras ) && ! empty( $extras ) ) {
				if ( ! empty( $extras ) && is_array( $extras ) ) {
					if ( ! empty( $extras['group_type'] ) ) {
						$bp_ajax_querystring = add_query_arg( 'group_type', $extras['group_type'], $bp_ajax_querystring );
						if ( ! empty( $scope ) && 'all' !== $scope ) {
							if ( 'all' !== $extras['group_type'] && ! empty( $extras['group_type'] ) ) {
								$allgroups = groups_get_groups(
									array(
										'per_page' => 999,
									)
								);
								if ( ! empty( $allgroups ) && array_key_exists( 'groups', $allgroups ) ) {
									$include_groups = array();
									$exclude_groups = array();
									foreach ( $allgroups['groups'] as $group ) {
										$group_type = (array) bp_groups_get_group_type( $group->id, false );
										if ( ! empty( $group_type ) && is_array( $group_type ) ) {
											if ( in_array( $extras['group_type'], $group_type, true ) && in_array( $scope, $group_type, true ) ) {
												array_push( $include_groups, $group->id );
											}
										}
										array_push( $exclude_groups, $group->id );
									}

									if ( ! empty( $include_groups ) ) {
										$include_groups      = implode( ',', $include_groups );
										$bp_ajax_querystring = add_query_arg( 'include', $include_groups, $bp_ajax_querystring );
									} elseif ( ! empty( $exclude_groups ) ) {
										$exclude_groups      = implode( ',', $exclude_groups );
										$bp_ajax_querystring = add_query_arg( 'exclude', $exclude_groups, $bp_ajax_querystring );
									}
								}
							}
						}
					}
				}
			}

			return $bp_ajax_querystring;
		}


		/**
		 * Ajax served to search groups
		 *
		 * @since 1.0.0
		 */
		public function bpgt_search_groups() {
			if ( ( null !== filter_input( INPUT_POST, 'action' ) ) && 'bpgt_search_groups' === filter_input( INPUT_POST, 'action' ) ) {
				$_POST['object'] = 'groups';
				bp_legacy_theme_object_template_loader();
				die;
			}
		}

		/**
		 * Add group type tabs in nouveau template.
		 *
		 * @since 2.0.0
		 */
		public function bpgt_nouveau_display_directory_tabs( $tabs ) {
			global $bp_grp_types;
			global $wp;
			$current_url = home_url( add_query_arg( array(), $wp->request ) ) . '/';
			$group_types = bp_groups_get_group_types();
			if ( $current_url === bp_get_groups_directory_permalink() ) {
				if ( ! empty( $group_types ) ) {
					foreach ( $group_types as $key => $group_type ) :
						$query = new WP_Query(
							array(
								'post_type'  => 'bp_group_type',
								'meta_key'   => 'type_id',
								'meta_value' => $key,
							)
						);
						$posts = $query->posts;
						if ( isset( $query->posts ) ) {
							foreach ( $query->posts as $post ) {
								$display = get_post_meta( $post->ID, 'display_as_tab', true );
								$name    = get_post_meta( $post->ID, 'singular_name', true );
								if ( 'on' == $display ) {
									$tabs[ esc_attr( $key ) ] = array(
										'component' => 'groups',
										'slug'      => esc_attr( $key ),
										'li_class'  => array(
											'0' => 'bpgt-type-tab',
										),
										'link'      => bp_get_groups_directory_permalink(),
										'text'      => esc_attr( $name ),
										'count'     => $this->bb_count_group_types( $key ),
										'position'  => 16,
									);
								}
							}
						}
					endforeach;
				}
			}
			return $tabs;
		}

		/**
		 * Add group type tabs in legacy template.
		 *
		 * @since 1.0.0
		 */
		public function bb_display_directory_tabs() {
			global $bp_grp_types;
			global $bp;
			$group_types        = bp_groups_get_group_types();
			$bp_template_option = bp_get_option( '_bp_theme_package_id' );
			if ( 'legacy' == $bp_template_option ) {
				if ( ! empty( $group_types ) ) {
					foreach ( $group_types as $key => $group_type ) :
						$query = new WP_Query(
							array(
								'post_type'  => 'bp_group_type',
								'meta_key'   => 'type_id',
								'meta_value' => $key,
							)
						);
						if ( isset( $query->posts ) ) {
							foreach ( $query->posts as $post ) {
								$display = get_post_meta( $post->ID, 'display_as_tab', true );
								$name    = get_post_meta( $post->ID, 'singular_name', true );
								if ( 'on' == $display ) {
									?>
							<li id="groups-<?php echo esc_attr( $key ); ?>" class="bpgt-type-tab" >
								<a href="<?php bp_groups_directory_permalink(); ?>"><?php printf( '%s <span>%d</span>', esc_attr( $name ), esc_attr( $this->bb_count_group_types( $key ) ) ); ?></a>
							</li>
									<?php
								}
							}
						}
					endforeach;
				}
			}
		}

		/**
		 * Get group count of group type tabs groups.
		 *
		 * @param string $group_type The group type.
		 * @param string $taxonomy The group taxonomy.
		 * @since 1.0.0
		 */
		public function bb_count_group_types( $group_type = '', $taxonomy = 'bp_group_type' ) {
			global $wpdb;
			$group_types = bp_groups_get_group_types();
			if ( empty( $group_type ) || empty( $group_types[ $group_type ] ) ) {
				return false;
			}
			$count_types = wp_cache_get( 'bpex_count_group_types', 'using_gt_bp_group_type' );
			if ( ! $count_types ) {
				if ( ! bp_is_root_blog() ) {
					switch_to_blog( bp_get_root_blog_id() );
				}
				$sql         = array(
					'select' => "SELECT t.slug, tt.count FROM {$wpdb->term_taxonomy} tt LEFT JOIN {$wpdb->terms} t",
					'on'     => 'ON tt.term_id = t.term_id',
					'where'  => $wpdb->prepare( 'WHERE tt.taxonomy = %s', $taxonomy ),
				);
				$count_types = $wpdb->get_results( join( ' ', $sql ) );
				wp_cache_set( 'bpex_count_group_types', $count_types, 'using_gt_bp_group_type' );
				restore_current_blog();
			}
			$type_count = wp_filter_object_list( $count_types, array( 'slug' => $group_type ), 'and', 'count' );
			$type_count = array_values( $type_count );
			if ( empty( $type_count ) ) {
				return 0;
			}
			return (int) $type_count[0];
		}

		/**
		 * Get group type args.
		 *
		 * @param array $args The group type.
		 * @since 1.0.0
		 */
		public function bb_set_has_groups_type_arg( $args = array() ) {
			$display_group_types = get_site_option( 'bpgt_type_display_settings' );
			if ( ! empty( $display_group_types ) && is_array( $display_group_types ) ) {
				// Get group types to check scope.
				$group_types = bp_groups_get_group_types();
				// Set the group type arg if scope match one of the registered group type.
				if ( ! empty( $args['scope'] ) && ! empty( $group_types[ $args['scope'] ] ) ) {
					$args['group_type'] = $args['scope'];
				}
			}
			return $args;
		}

		/**
		 * Display group type.
		 *
		 * @param string $group_id The group id.
		 * @since 1.0.0
		 */
		public function bb_group_directory_show_group_type( $group_id = null ) {
			if ( empty( $group_id ) ) {
				$group_id = bp_get_group_id();
			}
			// Group directory.
			if ( bp_is_active( 'groups' ) && bp_is_groups_directory() ) {
				// Passing false means supporting multiple group types.
				$group_types = (array) bp_groups_get_group_type( $group_id, false );
				if ( ! empty( $group_types ) ) {
					$types = array();
					foreach ( $group_types as $type ) {
						$obj = bp_groups_get_group_type_object( $type );
						// Group type name/description.
						if ( ! empty( $obj ) ) {
							array_push( $types, esc_attr( $obj->labels['singular_name'] ) );
						}
					}
					if ( ! empty( $types ) ) {
						$types = implode( ', ', $types );
						echo '<div class="item-meta wb-bpgt-group-types">' . esc_html__( 'Group Types', 'bp-add-group-types' ) . ': ' . $types . '</div>';
					}
				}
			}
		}

		/**
		 * Displays shortcode data.
		 *
		 * @since 2.0.0
		 *
		 * @param $atts
		 *
		 * @return false|string
		 */
		public function bp_group_type_short_code( $atts ) {
			global $wpdb;
			ob_start();
			if ( ! empty( $atts['type'] ) ) {
				?>
			<div id="buddypress" class="buddypress-wrap round-avatars bp-dir-hori-nav bp-shortcode-wrap">
				<div class="screen-content">
					<div class="subnav-filters filters no-ajax" id="subnav-filters">
						<?php bp_get_template_part( 'common/filters/grid-filters' ); ?>
					</div>
					<div id="groups-dir-list" class="groups dir-list">
						<?php
						$atts['group_type'] = $atts['type'];

						if ( ! bp_is_root_blog() ) {
							switch_to_blog( bp_get_root_blog_id() );
						}

						$bp_group_type_query = "SELECT tr.object_id FROM {$wpdb->term_relationships} tr LEFT JOIN {$wpdb->terms} t ON tr.term_taxonomy_id = t.term_id LEFT JOIN {$wpdb->term_taxonomy} tt ON tt.term_id = t.term_id WHERE tt.taxonomy = 'bp_group_type' AND t.slug= '{$atts['group_type']}'";
						$bp_get_group_ids    = $wpdb->get_results( $bp_group_type_query );

						$group_id = array();
						if ( ! empty( $bp_get_group_ids ) ) {
							foreach ( $bp_get_group_ids as $id ) {
								$group_id[] = $id->object_id;
							}
						}
						restore_current_blog();

						if ( ! empty( $atts['type'] ) ) {

							$name = str_replace( array( ' ', ',' ), array( '-', '-' ), strtolower( $atts['type'] ) );

							// Set the "current" profile type, if one is provided, in member directories.
							buddypress()->groups->current_directory_type = $name;
							buddypress()->current_component              = 'groups';
							buddypress()->is_directory                   = true;
						}
						/*
						unset( $atts['type'] );
						$bp_group_type_query = build_query( $atts );
						if ( ! empty( $bp_group_type_query ) ) {
							$bp_group_type_query = '&' . $bp_group_type_query;
						}

						update_option( 'bp_group_type_short_code_query_build', $bp_group_type_query );

						add_filter(
							'bp_ajax_querystring',
							function ( $qs ) {
								return $qs .= get_option( 'bp_group_type_short_code_query_build' );;
							}
						);
						*/

						// Get a BuddyPress groups-loop template part for display in a theme.
						bp_get_template_part( 'groups/groups-loop' );
						?>
					</div>
				</div>
			</div>
				<?php
			}
			return ob_get_clean();
		}
	}

endif;
