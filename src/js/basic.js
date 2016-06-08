(function () {

var loves = [
	"data mining",
	"problem solving",
	"quidditch",
	"a cappella",
	"space",
	"science",
	"nature",
	"3D printing",
	"music",
	"sports",
	"soccer",
	"running",
	"photography",
	"film",
	"backpacking",
	"computer vision",
	"startups",
	"Kickstarter",
	"algorithms",
	"nerdy jokes",
	"quadrotors",
	"traveling",
	"Germany",
	"Italy",
	"languages",
	"cooking",
	"food"
];

function setLove() {
	var container = document.getElementById("love");
	container.innerHTML = getRandomLove();
}

function getRandomLove() {
	var i = Math.floor(Math.random()*loves.length);
	return loves[i];
}

window.onload = function () {
	if(document.getElementById("love") !== null) {
  	setLove();
  }
};

}());
