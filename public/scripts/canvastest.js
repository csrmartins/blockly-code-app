console.log('canvastest Script Working!');


var myGamePiece;
var myBackground;



window.onload = function startGame() {
  console.log('start game called!');
  myGameArea.start();
  myGamePiece = new component(81, 81, "images/builder-assets/pato_azul_A25_Rectangle_28_pattern.png", 10, 120, "image");
  myBackground = new component(596, 720, "images/builder-assets/Background_01_A25_Rectangle_34_pattern.png", 0, 0, "image");
}


var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 596;
    this.canvas.height = 720;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    //---This is for Touch
    window.addEventListener('touchmove', function (e) {
      console.log(e, 'this is the (e)Vent');
      myGameArea.x = e.touches[0].screenX;
      myGameArea.y = e.touches[0].screenY;
    })
    //---This is for Touch
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

function component(width, height, color, x, y, type) {
  this.type = type;
  if (type == "image") {
  this.image = new Image();
  this.image.src = color;
  }
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    if (type == "image") {
      ctx.drawImage(this.image,
        this.x,
        this.y,
        this.width, this.height);
    } else {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}


function updateGameArea() {
  myGameArea.clear();

  myBackground.newPos();
  myBackground.update();
  //---This is for Touch
  if (myGameArea.x && myGameArea.y) {
  myGamePiece.x = myGameArea.x;
  myGamePiece.y = myGameArea.y;
  }
  //---This is for Touch

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
