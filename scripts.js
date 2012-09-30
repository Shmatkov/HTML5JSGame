var step = 0;

var speed = 8;
var radius = 70;
var canvasWidth, canvasHeight;
var dir = 1;

window.onload = function() {
    var canvas = document.getElementById('game');
    var c = canvas.getContext('2d');
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
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

    function player() {
        this.posX = 100;
        this.posY = 100;
    }

    function gg() {
        c.fillStyle = 'Magenta';
        c.beginPath();
        c.arc(player.posX, player.posY, radius, 0, 360, false);
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
};



/* var generateImage = new function() {
 var height = canvas.height;
 var width = canvas.width;

 var pixelData = c.createImageData(width, height);
 var xCenter = width / 2;
 var yCenter = height / 2;
 var pixelPos = 0;

 for (var y = 0; y < pixelData.height; y++) {
 for (var x = 0; x < pixelData.width; x++) {
 var xOffset = x - xCenter;
 var yOffset = x - yCenter;
 var d = Math.abs(xOffset) + Math.abs(yOffset);
 var t = Math.tan(d/10);

 var r = t*255;
 var g = 125 + t*80;
 var b = 235 + t*20;

 pixelData.data[pixelPos++] = Math.max(0, Math.min(255, r));
 pixelData.data[pixelPos++] = Math.max(0, Math.min(255, g));
 pixelData.data[pixelPos++] = Math.max(0, Math.min(255, b));
 pixelData.data[pixelPos++] = Math.random() * 2000;
 }
 }

 c.putImageData(pixelData, 0, 0);
 } */

/*
var FPS = 30;
setInterval(function() {
    update();
    draw();
}, 1000/FPS);

var textX = 50;
var textY = 50;

function update() {
    textX += 1;
    textY += 1;
}

function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    canvas.fillStyle = "#000";
    canvas.fillText("Sup Bro!", textX, textY);
}

var player = {
    color: "#00A",
    x: 220,
    y: 270,
    width: 32,
    height: 32,
    draw: function() {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.x, this.y, this.width, this.height);
    }

};

function draw() {
    canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    player.draw();
} */

/*
 f=Math;e=document.body.children[$=0];
 G="globalCompositeOperation";
 Q=.43;P=.05;with(e){with(style)width=(w=innerWidth-9)+"px",height=(h=innerHeight-25)+"px";
 W=(width=w/=2)/2;
 H=(height=h/=2)/2;
 g=getContext("2d");
 t=w/h}with(g){scale(W/t,H);
 translate(t,1);
 setInterval(function(){
 with(E=e.cloneNode(0))width=height=H,c=getContext("2d");c.fillRect(0,0,h,h);g[G]=c[G]="lighter";
 C=f.cos;
 S=f.sin;
 L=f.atan2;q=C($);
 r=S(q-$*.7)+Q;u=C(r-$*Q)+Q;a=L(q,-u*2);
 b=L(r,u*u+q*q);
 n=C(a);
 o=S(a);
 N=C(b);
 O=S(b);
 $+=P;
 clearRect(-t,-1,2*t,2);
 for(i=14;i>4;--i){
 v=0;
 for(j=25;j;){
 M=f.log(j+.2)*Q;j--;_=$-j*.07-i*4;
 A=C(_+S(_*.8))*2+_*P;
 B=S(_*.7-C(_*Q))*3;
 x=C(A)*C(B)*M-q;y=S(A)*C(B)*M-r;z=S(B)*M-u;k=x*n+z*o;_=z*n-x*o;l=y*N+_*O;z=_*N-y*O;
 lineTo(k/=z,l/=z);
 lineWidth=P/z;
 strokeStyle="hsl("+60*S($-z)+",60%,"+~~(40-j)*(Q+!j+(.1>($-j*P)%1))+"%)";
 if(z>.1)v++&&stroke();else{v=0}beginPath();
 moveTo(k,l)
 }
 }
 A="drawImage";N=H/2;
 c.globalAlpha=Q;
 c[A](e,0,0,H,H);
 X=k*N+N;Y=l*N+N;K=1.1;c.translate(X,Y);
 while(i--)c.scale(K,K),c[A](E,-X,-Y,H,H);
 g[A](E,-t,-1,2*t,2)},33)} */