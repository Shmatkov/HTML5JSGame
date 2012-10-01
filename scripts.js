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
        var gg_pic = new Image();
        gg_pic.src = 'assets/gg_right.jpg';
        gg_pic.onload = function(){
        c.drawImage(gg_pic, gg_posX, gg_posY);
        }
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

    window.addEventListener('keydown',doKeyDown,true);
    function doKeyDown(evt){
        switch (evt.keyCode) {
            case 38:
                if (gg_posY > radius){
                    gg_posY -= speed;
                }
                break;
            case 40:
                if (gg_posY < canvasHeight - radius){
                    gg_posY += speed;
                }
                break;
            case 37:
                if (gg_posX > radius){
                    gg_posX -= speed;
                }
                break;
            case 39:
                if (gg_posX < canvasWidth - radius){
                    gg_posX += speed;
                }
                break;
        }
    }
};