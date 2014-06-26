<!doctype html>
<html lang="en">
<head>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8">
	<meta name="description" content="The personal site of Andrew Hollenbach, a computer science student at the Rochester Institute of Technology.">
	<meta content="img/me_small.png" itemprop="image">

	<meta name="viewport" content="width=device-width">

	<title>Andrew Hollenbach <?php  if(isset($title)) { echo "| {$title}"; } ?></title>

	<link href="css/global.css" rel="stylesheet" type="text/css" />
	<script src="js/menu.js"></script>
</head>
<body>
	<div class="dot-overlay"></div>
	<div id="navbar">
		<nav id="menu">
			<a href="index.php"    id="menu-home"     <?php if(!isset($title)) { echo "class='menu-bold'"; } ?>                                    >Andrew Hollenbach</a>
			<a href="about.php"    id="menu-about"    <?php if(isset($title) && strtolower($title) == "about")    { echo "class='menu-bold'"; } ?> >About</a>
			<a href="thoughts/"    id="menu-thoughts" <?php if(isset($title) && strtolower($title) == "thoughts") { echo "class='menu-bold'"; } ?> >Thoughts</a>
			<a href="projects.php" id="menu-projects" <?php if(isset($title) && strtolower($title) == "projects") { echo "class='menu-bold'"; } ?> >Projects</a>
		</nav>
	</div>
	<div id="content">