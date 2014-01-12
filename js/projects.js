var left_offset = 250;

$(document).ready(function() {
    var width = window.width;
    var contentWindow = $("#content");
    contentWindow.width(width-left_offset);

    addMenu();
    addContent();
});
$(window).resize(function() {
    var width = $(window).width();
    $("#content").animate({width:(width-left_offset-30)}, {duration: 300, width: 'easeOutBounce'});
});

function addMenu() {
    var menu = {
        items: [
            {
                name: "Projects",
                URL: "projects.php"
            },
            {
                name: "About",
                URL: "#"
            },
            {
                name: "Contact",
                URL: "#"
            }
        ]
    };
    var template = '<a href={{URL}}>{{name}}</a>';
    var html = "";
    menu.items.forEach(function(item) {
        html += Mustache.to_html(template, item);
    });
    $("#menu").append(html);
}

function drawLogo() {
    var canvas = document.getElementById("logo");
    var ctx = canvas.getContext("2d");
    var cat = document.getElementById("cat");
    context.drawImage(cat, 0, 0);
}

function addContent() {
    var content = {
        projects: [
            {
                name : "Animatron Racing",
                URL  : { address : "https://github.com/brianclanton/game-racer", newTab : true }, 
                desc : "Animatron Racing is a web-based, HTML5 and Javascript-powered racing game. It takes full advantage of the HTML5 canvas through the Animatron Player is in the process of being developed into a full game."
            },
            {
                name : "About",
                URL : "about"
            },
            {
                name : "Contact",
                URL : "contact"
            }
        ]
    };
    var template = '<h3>{{name}}</h3><p>{{desc}}</p>';
    var html = Mustache.to_html(template, content.projects[0]);
    $("#content").html(html);
}