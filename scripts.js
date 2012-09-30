var step = 0;
var speed = 10;
var radius = 30;
var canvasWidth, canvasHeight;

window.onload = function() {
    var canvas = document.getElementById('game');
    var c = canvas.getContext('2d');
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    var gg_posX = canvasWidth / 2;
    var gg_posY = canvasHeight / 2;
    var text = "> Testing";
    c.font = "20pt Arial";

    var FPS = 30;
    setInterval(function() {
        update();
        draw();
    }, 1000/FPS);

    function update() {
        //Полоса загрузки
        step++;
    }

    function draw() {
        c.clearRect(0, 0, canvasWidth, canvasHeight);
        c.fillStyle = 'Black';
        c.strokeText(text, 30, 30);
        c.fillText(text, 30, 30);
        loading();
        gg();
    }

    function gg() {
        c.fillStyle = 'Magenta';
        c.beginPath();
        c.arc(gg_posX, gg_posY, radius, 0, 360, false);
        c.closePath();
        c.fill();
    }

    function loading() {
        if (step==5) { step = 0; }
        switch (step) {
            case 0:
                c.fillText("[:....]", 160, 30);
                break;
            case 1:
                c.fillText("[::...]", 160, 30);
                break;
            case 2:
                c.fillText("[:::..]", 160, 30);
                break;
            case 3:
                c.fillText("[::::.]", 160, 30);
                break;
            case 4:
                c.fillText("[:::::]", 160, 30);
                break;
        }
    }

    document.onkeydown = checkKeycode;
    function checkKeycode(e) {
        var keycode;
        if (window.event) keycode = window.event.keyCode;
        // else if (e) keycode = e.which;
        // alert("keycode: " + keycode);
        if (keycode == 40) gg_posY += speed;
        if (keycode == 38) gg_posY -= speed;
        if (keycode == 37) gg_posX -= speed;
        if (keycode == 39) gg_posX += speed;
    }
};