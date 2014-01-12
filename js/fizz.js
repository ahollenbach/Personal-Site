var MAX_DEPRESS = 10; // In degrees spun

var width  = window.innerWidth;
var height = window.innerHeight;

document.onmousemove=function(evt) {
    evt = (evt || event);
    
    //console.log((evt.clientX/width - .5) + ' ' + (evt.clientY/height - .5));
}

// http://css3.bradshawenterprises.com/flip/
// http://stackoverflow.com/questions/708895/how-to-set-the-style-webkit-transform-dynamically-using-javascript

// http://www.creativebloq.com/css3/20-stunning-examples-css-3d-transforms-11112759
//http://quiyk.tumblr.com/post/64770437026/poison-apple-in-the-big-apple-quidditch-conference#notes