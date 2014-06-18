<!DOCTYPE html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta name="viewport" content="width=device-width" />
<title>
	<?php bloginfo('name'); ?> | 
	<?php is_front_page() ? bloginfo('description') : wp_title(''); ?>
</title>

<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php // load other stylesheets with an @import call in style.css ?>

<?php // Loads HTML5 JavaScript file to add support for HTML5 elements in older IE versions. ?>
<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->

<?php wp_head(); // plugin placeholder ?>
</head>

<body 
	<?php body_class(); 
	// This will display a class specific to whatever is being loaded by Wordpress
	// i.e. on a home page, it will return [class="home"]
	// on a single post, it will return [class="single postid-{ID}"]
	// and the list goes on. Look it up if you want more.
	?>
>
<div class="dot-overlay"></div>
<div id="navbar">
	<nav id="menu" class="menu">
		<!--img id="logo" src='./img/logo_150w.png' /-->
		<a href="/index.html" class="home">Andrew Hollenbach</a>
		<a href="about.html" class="about">About</a>
		<a href="thoughts/" class="thoughts menu-bold">Thoughts</a>
		<a href="http://github.com/ahollenbach" class="projects">Projects</a>
	</nav>
</div>
	
<div class="main-fluid"><!-- start the page containter -->