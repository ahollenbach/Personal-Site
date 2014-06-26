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