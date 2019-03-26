console.log('canvastest Script Working!');


var myGamePiece;


window.onload = function startGame() {
  console.log('start game called!');
  myGameArea.start();
  myGamePiece = new component(30, 30, "red", 10, 120);
}


var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener('touchmove', function (e) {
      console.log(e, 'this is the (e)Vent');
      myGameArea.x = e.touches[0].screenX;
      myGameArea.y = e.touches[0].screenY;
    })
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}




function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

function updateGameArea() {
  myGameArea.clear();
  if (myGameArea.x && myGameArea.y) {
  myGamePiece.x = myGameArea.x;
  myGamePiece.y = myGameArea.y;
  }
  // myGamePiece.newPos();
  myGamePiece.update();
}

function stopMove() {
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
}


function moveup(){
  myGamePiece.speedY -= 10;
}

function movedown(){
  myGamePiece.speedY += 10;
}

function moveleft() {
  myGamePiece.speedX -= 10;
}

function moveright(){
  myGamePiece.speedX += 10;
}
