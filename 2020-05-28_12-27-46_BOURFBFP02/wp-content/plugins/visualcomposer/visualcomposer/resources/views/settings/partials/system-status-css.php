<?php
if (!defined('ABSPATH')) {
    header('Status: 403 Forbidden');
    header('HTTP/1.1 403 Forbidden');
    exit;
}
?>
<style>
    #adminmenu .wp-submenu a[href*='page=vcv-system-status'] {
        display: none;
    }
</style>
