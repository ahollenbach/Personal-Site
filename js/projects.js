window.onload = function () {
	//$(".project:odd").css("background-color","rgba(35,35,90,.98)");
	collapseAll();
	$(".more").click(function(e) {
		//$(this).parent().toggleClass("minimized");
		var parent = $(this).parent();
		parent.toggleClass("expanded");
		
		if(parent.children(".project-descr").is(":visible")) {
			parent.children(".project-descr").slideUp('slow');
		} else {
			parent.children(".project-descr").slideDown('slow');
		}

		if($(this).html() == "more...") {
			$(this).html("less");
		} else {
			$(this).html("more...");
		}
	});
};

function collapseAll() {
	$(".project-descr").hide();
	$(".project-activity").hide();
	$(".info-label").hide();

	$(".project-info").addClass("minimized");
}