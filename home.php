<?php
// Home / Blog page changes

remove_action( 'genesis_loop', 'genesis_do_loop' );

add_action( 'genesis_loop', 'dld_custom_blog_functionality' );
function dld_custom_blog_functionality() {

	echo '<div id="app"></div>';
}

genesis();