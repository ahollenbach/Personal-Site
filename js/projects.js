window.onload = function () {
	$(".project:odd").css("background-color","rgba(35,35,90,.98)");
	collapseAll();
	$(".project").click(function(e) {
		
	});
};

function collapseAll() {
	$(".project-descr").hide();
	$(".project-activity").hide();
	$(".info-label").hide();

	$(".project-info").addClass("minimized");
}