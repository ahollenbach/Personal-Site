(function () {

var loves = [
	"data mining",
	"problem solving",
	"innovation",
	"the web",
	"quidditch",
	"a cappella",
	"the Brick City Singers",
	"space",
	"science",
	"nature",
	"web development",
	"3D printing",
	"music",
	"sports",
	"soccer",
	"running",
	"photography",
	"film",
	"backpacking",
	"computer vision",
	"databases",
	"startups",
	"Kickstarter",
	"algorithms",
	"nerdy jokes",
	"quadrotors",
	"traveling",
	"Germany",
	"languages",
	"cooking",
	"food"
];
// track 7 latest. First elem showing is loves[0], so we fill with that
var loveHistory = [0,0,0,0,0,0,0,0];
var selectedIndex;

function setLove() {
	var container = document.getElementById("love-container");
	var cur = document.getElementById("cur-love");
	var next = document.createElement('span');
	next.setAttribute('id','new-love');
	next.setAttribute('class','love-elem');
	container.insertBefore(next,cur);

    var nextText = getRandomLove();
    next.innerHTML = nextText;

    window.setTimeout( function() {
		next.style.opacity = 1;
		next.style.bottom = "0em";
	}, 100 );

    cur.classList.add('transition');

    sleep(2000, removeTransition);
}

function removeTransition() {
	var cur = document.getElementById("cur-love");
	var next = document.getElementById("new-love");
	cur.classList.remove('transition');

	// make the "cur" now the "new", reset the "new" for the next love
	cur.innerHTML = next.innerHTML;
	next.parentNode.removeChild(next);
}

// gets a random love, making sure the same doesn't show up if it has recently
function getRandomLove() {
	var i = Math.floor(Math.random()*loves.length);

	while($.inArray(i,loveHistory) >= 0) {
		i = Math.floor(Math.random()*loves.length);
	}
	loveHistory.shift();
	loveHistory.push(i);
	return loves[i];
}

function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}


window.onload = function () {
	if(document.getElementById("love-container") !== null) {
    	setInterval(setLove,3000);
  }
};

}());
