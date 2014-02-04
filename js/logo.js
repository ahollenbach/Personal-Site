$(document).ready(function() {
    var canvas = document.getElementById('logo');
    canvas.width = 150;
    canvas.height = 100;
    var ctx = canvas.getContext('2d');
    var fontColor = "rgb(238,238,238)";

    // Begin "A"
    ctx.beginPath();
    ctx.moveTo(5, 75);
    ctx.lineTo(32,6);
    ctx.lineTo(44,6);
    ctx.lineTo(75,80);
    ctx.lineTo(144,80);
    ctx.lineTo(144,90);
    ctx.lineTo(65,90);
    ctx.lineTo(52,59);
    ctx.lineTo(25,59);
    ctx.lineTo(19,75);

    // Complete "A"
    ctx.closePath();
    ctx.fillStyle = fontColor;
    ctx.fill();

    // Remove center of "A" (XOR it out)
    var textCompOp = ctx.globalCompositeOperation;
    ctx.globalCompositeOperation = "xor";

    ctx.beginPath();
    ctx.moveTo(28, 48);
    ctx.lineTo(38, 22);
    ctx.lineTo(48, 48);
    ctx.closePath();
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();

    // Begin "H"
    ctx.globalCompositeOperation = textCompOp;

    ctx.beginPath();
    ctx.moveTo(81, 75);
    ctx.lineTo(81,6);
    ctx.lineTo(95,6);
    ctx.lineTo(95,33);
    ctx.lineTo(121,33);
    ctx.lineTo(121,6);
    ctx.lineTo(135,6);
    ctx.lineTo(135,75);
    ctx.lineTo(121,75);
    ctx.lineTo(121,47);
    ctx.lineTo(95,47);
    ctx.lineTo(95,75);
    ctx.closePath();
    ctx.fillStyle = fontColor;
    ctx.fill();
});