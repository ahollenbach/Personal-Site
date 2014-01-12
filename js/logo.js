$(document).ready(function() {
    var canvas = document.getElementById('logo');
    canvas.width = 150;
    canvas.height = 100;
    var context = canvas.getContext('2d');

    // begin custom shape
    context.beginPath();
    context.moveTo(5, 75);
    context.lineTo(32,6);
    context.lineTo(44,6);
    context.lineTo(75,80);
    context.lineTo(144,80);
    context.lineTo(144,90);
    context.lineTo(65,90);
    context.lineTo(52,59);
    context.lineTo(25,59);
    context.lineTo(19,75);

    // complete custom shape
    context.closePath();
    context.fillStyle = "rgb(238,238,238)";
    context.fill();

    var oldCompOp = context.globalCompositeOperation;
    context.globalCompositeOperation = "xor";

    context.beginPath();
    context.moveTo(28, 48);
    context.lineTo(38, 22);
    context.lineTo(48, 48);
    context.closePath();
    context.fillStyle = "rgba(0,0,0,1)";
    context.fill();

    context.globalCompositeOperation = oldCompOp;

    context.beginPath();
    context.moveTo(81, 75);
    context.lineTo(81,6);
    context.lineTo(95,6);
    context.lineTo(95,33);
    context.lineTo(121,33);
    context.lineTo(121,6);
    context.lineTo(135,6);
    context.lineTo(135,75);
    context.lineTo(121,75);
    context.lineTo(121,47);
    context.lineTo(95,47);
    context.lineTo(95,75);
    context.closePath();
    context.fillStyle = "rgb(238,238,238)";
    context.fill();
});