var width = 800, 
	height = 500,
	gLoop,
	c = document.getElementById('c'), 
	ctx = c.getContext('2d');
			
	c.width = width;
	c.height = height;


var clear = function(){
    
	ctx.fillStyle = '#0aa10a';
	ctx.clearRect(0, 0, width, height);
	ctx.beginPath();
	ctx.rect(0, 0, width, height);
	ctx.closePath();
	ctx.fill();
}
var player = new (function(){
	var that = this;
	that.image = new Image();

	that.image.src = "p.svg"
	that.width = 30;
	that.height = 35;
	that.frames = 0;
	that.actualFrame = 0;
	that.X = 0;
	that.Y = 0;	
	
	/*
$('#scene').mousedown(function(e) { // привязываем событие нажатия мыши(для перетаскивания)
var mouseX = e.layerX || 0;
var mouseY = e.layerY || 0;
if(e.originalEvent.layerX) {
mouseX = e.originalEvent.layerX;
mouseY = e.originalEvent.layerY;
}

bMouseDown = true;

if ((mouseX > cat.x+cat.w && mouseX < ctx.canvas.width) || (mouseX<cat.x && mouseX < ctx.canvas.width) )
{
//cat.bCat = true;
iLastMouseX = mouseX;
}
if ((mouseY > cat.y+cat.h && mouseY < ctx.canvas.height) || (mouseY<cat.y && mouseY < ctx.canvas.height))
{
//cat.bCat = true;
iLastMouseY = mouseY;
}
});

$('#scene').mouseup(function(e) { // привязываем событие отжатия мыши
cat.bCat = false;
bMouseDown = false;
});*/

	
	
	that.moveLeft = function(){
		if (that.X > 0) {
			that.setPosition(that.X - 5, that.Y);
		}
	}
	
	that.moveRight = function(){
		if (that.X + that.width < width) {
			that.setPosition(that.X + 5, that.Y);
		}
	}
	
	
	that.moveUp = function(){
		if (that.Y > 0) {
			that.setPosition(that.Y - 5, that.X);
		}
	}
	
	that.moveDown = function(){
		if (that.Y + that.height < height) {
			that.setPosition(that.Y + 5, that.X);
		}
	}
	
	
	
	that.setPosition = function(x, y){
		that.X = x;
		that.Y = y;
	}
	
	that.interval = 0;
	that.draw = function(){
		try {
		     if (mouseX>that.X+that.width)
			 {
			   that.X+=15;
			 }
			 if (mouseX<that.X)
			 {
			 that.X-=15;
			 }
			  if (mouseY>that.Y+that.height)
			 {
			 that.Y+=15;
			 }
			  if (mouseY<that.Y)
			 {
			 that.Y-=15;
			 }
			ctx.drawImage(that.image, 0, that.height * that.actualFrame, that.width, that.height, that.X, that.Y, that.width, that.height);
		} 
		catch (e) {
		};
		
		if (that.interval == 4 ) {
			if (that.actualFrame == that.frames) {
				that.actualFrame = 0;
			}
			else {
				that.actualFrame++;
			}
			that.interval = 0;
		}
		that.interval++;		
	}
})();


player.setPosition(~~((width-player.width)/2), ~~((height - player.height)/2));

var mouseMove = false;
var mouseX, mouseY;
document.onmousemove = function(e){
	if (e.pageX-c.offsetLeft<player.X + c.offsetLeft) 
	{
		mouseX = e.pageX-c.offsetLeft;
		} 
		
		else if (player.X + c.offsetLeft+player.width < e.pageX-c.offsetLeft) {
		mouseX = e.pageX-c.offsetLeft;
	}
	
	if (player.Y + c.offsetTop + player.height < e.pageY-c.offsetTop) {
		mouseY = e.pageY-c.offsetTop;
	} else if (player.Y + c.offsetTop > e.pageY-c.offsetTop) {
		mouseY = e.pageY-c.offsetTop;
	}
	
}
	
var GameLoop = function(){
	clear();
	
	/*
	 * part 3
	 */
	
		if (player.isFalling) 
			player.checkFall();
    /*
     * end of part 3
     */
	player.draw();
	gLoop = setTimeout(GameLoop, 1000 / 50);
}

GameLoop();
