var step = 0;
var speed = 20;
var radius = 30;
var canvasWidth, canvasHeight;
var gg_hp = 100;
var score = 0;
var weapon = 'Дедова быстрозарядка';
var level = '1: Адское пастбище';
var count = 5;
var enemies = [];
var enspd = 1.5;

window.onload = function() {

    var canvas = document.getElementById('game');
    var c = canvas.getContext('2d');
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    var gg_posX = canvasWidth / 2;
    var gg_posY = canvasHeight / 2;
    var text = "> Testing";
    enCreate();

    var FPS = 30;
    setInterval(function() {
        update();
        draw();
    }, 1000/FPS);

    function update() {
        step++;
        move();
        for(var i = 0; i<enemies.length; i++)
        {
            if ( enemies[i].en_posX===gg_posX&&enemies[i].en_posY===gg_posY)
            { gg_hp--;}
        }
        if (gg_hp < 0) gg_hp = 0;
    }

    function draw() {
        c.clearRect(0, 0, canvasWidth, canvasHeight);
        c.font = "20pt Arial";
        c.fillStyle = 'Black';
        c.strokeText(text, 30, 570);
        c.fillText(text, 30, 570);
        loading();  gg(); drawEnemy(); GUI();
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
        c.fillRect(335, 10, 110, 30);
        c.fillStyle = 'White';
        c.fillRect(340, 15, gg_hp, 20);
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

    function Enemy(en_posXp, en_posYp, isSpawnp, enHPp) {
        this.en_posX = en_posXp;
        this.en_posY = en_posYp;
        this.isSpawn = isSpawnp;
        this.enHP = enHPp;
    }


    function enCreate() {
        for (var i=0; i<count; i++) {
            var r1 = Math.random()*100+1;
            var r2 = Math.random()*100+1;
            if (r1 > 50 && r2 > 50) {
                t_posX = getRandomInt(-100,0);
                t_posY = getRandomInt(-100,700);
            }
            if (r1 < 50 && r2 > 50) {
                t_posX = getRandomInt(800,900);
                t_posY = getRandomInt(-100,700);
            }
            if (r1 < 50 && r2 < 50) {
                t_posX = getRandomInt(-100,900);
                t_posY = getRandomInt(-100,0);
            }
            if (r1 > 50 && r2 < 50) {
                t_posX = getRandomInt(-100,900);
                t_posY = getRandomInt(600,700);
            }
            enemies.push(new Enemy(t_posX, t_posY, 1, 100));
        }
    }

    function drawEnemy() {
        var enemy_pic = new Image();
        enemy_pic.src = 'assets/enemy.png';
        enemy_pic.onload = function(){
            for (var i=0; i<enemies.length; i++)
            {
                c.drawImage(enemy_pic, enemies[i].en_posX, enemies[i].en_posY);
            }
        }
    }


    function move()
    {
        for(var i = 0; i<enemies.length;i++)
        {
            if ( enemies[i].en_posX<gg_posX)
            {enemies[i].en_posX+=enspd;}
            if (enemies[i].en_posX>gg_posX)
            {enemies[i].en_posX-=enspd;}
            if (enemies[i].en_posY<gg_posY)
            {enemies[i].en_posY+=enspd;}
            if (enemies[i].en_posY>gg_posY)
            {enemies[i].en_posY -=enspd;}
        }
    }

};

function getRandomInt(min, max)
{
    return Math.floor(Math.random()*(max-min+1))+min;
}