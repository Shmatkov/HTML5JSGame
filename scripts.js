var step = 0;
var speed = 10;
var radius = 30;
var canvasWidth, canvasHeight;
var gg_hp = 5;
var gg_hp_posX = 335;
var score = 0;
var weapon = 'Дедова быстрозарядка';
var level = '1: Адское пастбище'

window.onload = function() {
    var canvas = document.getElementById('game');
    var c = canvas.getContext('2d');
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    var gg_posX = canvasWidth / 2;
    var gg_posY = canvasHeight / 2;

    var text = "> Testing";


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
        c.font = "20pt Arial";
        c.fillStyle = 'Black';
        c.strokeText(text, 30, 570);
        c.fillText(text, 30, 570);
        loading();
        gg();
        GUI();
    }

    function gg() {
        var gg_pic = new Image();
        gg_pic.src = 'assets/gg_right.jpg';
        gg_pic.onload = function(){
        c.drawImage(gg_pic, gg_posX, gg_posY);
        }
    }

    function GUI() {
        // Score
        c.font = "20pt Arial";
        c.fillStyle = 'Black';
        c.fillText('Ваш счёт: ' + score, 35, 35);
        // HP
        c.fillText('HP: ', 280, 35);
        c.fillRect(gg_hp_posX, 10, 130, 30);
        c.fillStyle = 'White';
        if (gg_hp == 1) { c.fillRect(gg_hp_posX + 5, 15, 20, 20); }
        if (gg_hp == 2) { c.fillRect(gg_hp_posX + 5, 15, 20, 20); c.fillRect(gg_hp_posX + 30, 15, 20, 20); }
        if (gg_hp == 3) { c.fillRect(gg_hp_posX + 5, 15, 20, 20); c.fillRect(gg_hp_posX + 30, 15, 20, 20) ; c.fillRect(gg_hp_posX + 55, 15, 20, 20); }
        if (gg_hp == 4) { c.fillRect(gg_hp_posX + 5, 15, 20, 20); c.fillRect(gg_hp_posX + 30, 15, 20, 20) ; c.fillRect(gg_hp_posX + 55, 15, 20, 20); c.fillRect(gg_hp_posX + 80, 15, 20, 20); }
        if (gg_hp == 5) { c.fillRect(gg_hp_posX + 5, 15, 20, 20); c.fillRect(gg_hp_posX + 30, 15, 20, 20) ; c.fillRect(gg_hp_posX + 55, 15, 20, 20); c.fillRect(gg_hp_posX + 80, 15, 20, 20); c.fillRect(gg_hp_posX + 105, 15, 20, 20);}
        // Weapon
        c.fillStyle = 'Black';
        c.font = "15pt Arial";
        c.fillText('Оружие: ' + weapon, 480, 30);
        c.fillText('Уровень ' + level, 490, 570);
        }

    function loading() {
        if (step==5) { step = 0; }
        switch (step) {
            case 0:
                c.fillText("[:....]", 160, 570);
                break;
            case 1:
                c.fillText("[::...]", 160, 570);
                break;
            case 2:
                c.fillText("[:::..]", 160, 570);
                break;
            case 3:
                c.fillText("[::::.]", 160, 570);
                break;
            case 4:
                c.fillText("[:::::]", 160, 570);
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