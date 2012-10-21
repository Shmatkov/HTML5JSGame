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
		if (that.Y + that.width < width) {
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


document.onmousemove = function(e){
	if (player.X + c.offsetLeft > e.pageX) {
		player.moveLeft();
	} else if (player.X + c.offsetLeft < e.pageX) {
		player.moveRight();
	}
	
	if (player.Y + c.offsetUp > e.pageY) {
		player.moveUp();
	} else if (player.Y + c.offsetUp < e.pageY) {
		player.moveDown();
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
