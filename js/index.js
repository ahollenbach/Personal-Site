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
	"Germany"
];
var selectedIndex;

function setLove() {
	var container = document.getElementById("love-container");
	var cur = document.getElementById("cur-love");
	var next = document.createElement('span');
	next.setAttribute('id','new-love');
	next.setAttribute('class','love-elem');
	container.insertBefore(next,cur);

    var nextText = getRandomLove(cur.innerHTML);
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

function getRandomLove(oldText) {
	var newText = oldText;
	while(newText == oldText) {
		newText = loves[Math.floor(Math.random()*loves.length)];
	}
	return newText;
}

function sleep(millis, callback) {
    setTimeout(function()
            { callback(); }
    , millis);
}


window.onload = function () {
	if(window.innerWidth < 705) {
		compactMenu();
	}

	if(document.getElementById("love-container") !== null) {
    	setInterval(setLove,3000);
    }
};

/////////////////////////////////////////////////////////////////////
// Responsive Menu
/////////////////////////////////////////////////////////////////////

window.onresize = function(event) {
    if(window.innerWidth < 705) {
    	compactMenu();
	} else {
		uncompactMenu();
	}
};

function compactMenu(e) {
	if(document.querySelectorAll('.compact').length > 0) return; // already compact

	var menuItems = document.querySelectorAll('nav a');
	for(var i=0;i<menuItems.length;i++) {
		menuItems[i].className = menuItems[i].className + " compact";
		if(menuItems[i].className.indexOf('menu-bold') !== -1) {
			selectedIndex = i;
		}
	}
	//setMenuPosition(menuItems,false);

	var mainItem = document.querySelector('nav a.menu-bold');
	mainItem.addEventListener('click',expandCompactedMenu);
}
function uncompactMenu(e) {
	var menuItems = document.querySelectorAll('nav a');
	for(var i=0;i<menuItems.length;i++) {
		menuItems[i].className = menuItems[i].className.replace(' compact','');
	}

	var mainItem = document.querySelector('nav a.menu-bold');
	mainItem.removeEventListener('click',expandCompactedMenu);
}

function expandCompactedMenu(e) {
	// TODO: Make .menu-bold the top element
	e.preventDefault();
	var menuItems = document.querySelectorAll('nav a');
	for(var i=0;i<menuItems.length;i++) {
		menuItems[i].className = menuItems[i].className + " expanded";
	}

	//setMenuPosition(menuItems,true);

	var mainItem = document.querySelector('nav a.menu-bold');
	mainItem.removeEventListener('click',  expandCompactedMenu);
	mainItem.addEventListener   ('click',unexpandCompactedMenu);
}

function unexpandCompactedMenu(e) {
	e.preventDefault();
	var menuItems = document.querySelectorAll('nav a');
	for(var i=0;i<menuItems.length;i++) {
		menuItems[i].className = menuItems[i].className.replace(' expanded','');
	}

	//setMenuPosition(menuItems,false);

	var mainItem = document.querySelector('nav a.menu-bold');
	mainItem.removeEventListener('click',unexpandCompactedMenu);
	mainItem.addEventListener   ('click',  expandCompactedMenu);
}

function setMenuPosition(menuItems,isExpanded) {
	var height = 3.8 + 0.00; 						// menu height, in em
	for(var i=0;i<menuItems.length;i++) {
		if(!isExpanded) {
			if(i < selectedIndex) {
				menuItems[i].style.top = '-' + height*(menuItems.length-1) + 'em';
			} else if (i > selectedIndex) {
				menuItems[i].style.top = '-' + height*menuItems.length + 'em';
			} else if (i == selectedIndex) {
				menuItems[i].style.top = '-' + height*i + 'em';
			}
		} else {
			if(i < selectedIndex) {
				menuItems[i].style.top = height + 'em';
			} else if(i > selectedIndex) {
				menuItems[i].style.top = 0 + 'em';
			}
		}
	}
}