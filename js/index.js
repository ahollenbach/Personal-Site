var word_list = [
    {text: "Data Mining", weight: 15},
    {text: "Disruptive Technologies", weight: 9},
    {text: "Problem Solving", weight: 10},
    {text: "HTML5",   weight: 7},
    {text: "Computer Science",  weight: 7},
    {text: "Innovation",  weight: 8},
    {text: "Buzzwords",  weight: 8}
];

$(document).ready(function() {
    //makeWordCloud();
    //var width = window.width;
    //var contentWindow = $("#content");
    //contentWindow.width(width-left_offset);
    $(".error button").click(function(e) {
        $(".error").css("display","none")
    })
    addMustache();

    // add image source
    $("body").append("<div class='photo-source'>Photo provided by db-prods.net</div>");
});
/*
$(window).resize(function() {
    var width = $(window).width();
    $("#content").animate({width:(width-left_offset-30)}, {duration: 300, width: 'easeOutBounce'});
    makeWordCloud();
});*/

function makeWordCloud() {
    var cloud = $("#wordcloud");
    cloud.width($("#content").width()-left_offset-30);
    cloud.empty();
    cloud.jQCloud(word_list);
}

function addMustache() {
    var menu = {
        items: [
            {
                name: "Thoughts",
                URL: "thoughts/"
            },
            {
                name: "Projects",
                URL: "http://github.com/ahollenbach"
            },
            {
                name: "About",
                URL: "about.html"
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

function appendAddress() {
    console.log(window.location.href)
}