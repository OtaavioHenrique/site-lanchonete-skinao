<?php
/**
 * Plugin Name: Lanchonete Skinão — Landing Page
 * Description: Página com cardápio e pedidos no WhatsApp. Use [lanchonete_skinao] em uma página de largura total.
 * Version: 1.0.0
 * Requires at least: 6.3
 * Requires PHP: 7.4
 * Author: Lanchonete Skinão
 */
if (!defined('ABSPATH')) { exit; }

function skn_has_landing() {
    return is_singular() && has_shortcode(get_post_field('post_content', get_queried_object_id()), 'lanchonete_skinao');
}

add_action('wp_enqueue_scripts', function () {
    if (!skn_has_landing()) { return; }
    wp_enqueue_style('skn-landing', plugins_url('styles.css', __FILE__), array(), '1.0.0');
    wp_enqueue_script('skn-landing', plugins_url('app.js', __FILE__), array(), '1.0.0', array('strategy' => 'defer', 'in_footer' => true));
});

add_shortcode('lanchonete_skinao', function () {
    static $rendered = false;
    if ($rendered) { return ''; }
    $rendered = true;
    $document = file_get_contents(__DIR__ . '/index.html');
    if ($document === false) { return ''; }
    $start = strpos($document, '<!-- SKINAO:START -->');
    $end = strpos($document, '<!-- SKINAO:END -->');
    if ($start === false || $end === false) { return ''; }
    $fragment = substr($document, $start + strlen('<!-- SKINAO:START -->'), $end - $start - strlen('<!-- SKINAO:START -->'));
    return str_replace('src="assets/', 'src="' . esc_url(plugins_url('assets/', __FILE__)), $fragment);
});
