console.log('canvastest Script Working!');


var myGamePiece;
var myBackground;
var redDuck;

var elements = [
  {
    name: 'redDuck',
    width: 81,
    height: 81,
    color: 'images/builder-assets/pato_azul_A25_Rectangle_40_pattern.png',
    x: 10,
    y: 10,
    type: 'image'
  },
  {
    name: 'blueDuck',
    width: 81,
    height: 81,
    color: 'images/builder-assets/pato_azul_A25_Rectangle_28_pattern.png',
    x: 50,
    y: 50,
    type: 'image'
  },
  {
    name: 'Background',
    width: 596,
    height: 720,
    color: 'images/builder-assets/background/Alien-Planet-01-002.png',
    x: 0,
    y: 0,
    type: 'image'
  }
]

console.log(elements);
// width, height, color, x, y, type








window.onload = function startGame() {
  console.log('start game called!');
  myGameArea.start();
  myGamePiece = new component(elements[0].width, elements[0].height, elements[0].color, elements[0].x, elements[0].y, elements[0].type);
  myBackground = new component(elements[2].width, elements[2].height, elements[2].color, elements[2].x, elements[2].y, elements[2].type);
  myGamePiece2 = new component(elements[1].width, elements[1].height, elements[1].color, elements[1].x, elements[1].y, elements[1].type);
}


var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 596;
    this.canvas.height = 720;
    this.context = this.canvas.getContext("2d");
    // document.body.insertBefore(this.canvas, document.body.childNodes[0]);

    document.getElementById('canvasContainer').insertBefore(this.canvas, document.getElementById('canvasContainer').childNodes[0]);

    this.interval = setInterval(updateGameArea, 20);

    //This is for TouchStart
    document.getElementsByTagName('canvas')[0].addEventListener('touchstart', function (e) {
      console.log(e, 'touch Start Event');
      var touchedX = Math.round(e.touches[0].clientX);
      var touchedY = Math.round(e.touches[0].clientY);
      console.log(touchedX, 'Touched X');
      console.log(touchedY, 'Touched Y');
      for (var i = 0; i < elements.length; i++) {
        if(getComponentArea(elements[i], myGameArea, touchedX, touchedY)){
          console.log(elements[i],'found One');
        }else{
          console.log(elements[i],'Found Anyone');
        }
      }
      // getComponentArea(myGamePiece, myGameArea, touchedX, touchedY);

    })


    //---This is for TouchDrag
    document.getElementsByTagName('canvas')[0].addEventListener('touchmove', function (e) {
      console.log(e, 'touchmove event');
      myGameArea.x = e.touches[0].screenX;
      myGameArea.y = e.touches[0].screenY;
      console.log(myGameArea.x, 'myGameArea X');
      console.log(myGameArea.y, 'myGameArea Y');
    })
    //---This is for TouchDrag
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

function getComponentArea(component, gameArea, touchedX, touchedY){
    // console.log(component, 'component');
    // console.log(gameArea, 'gameArea');
    //
    // console.log(component.width, 'component width');
    // console.log(component.height, 'component height');
    // console.log(component.x, 'component X');
    // console.log(component.y, 'component Y');
    // console.log(gameArea.canvas.width, 'gameArea width');
    // console.log(gameArea.canvas.height, 'gameArea height');




    var currentX = [];
    for (var i = component.x; i < (component.x + component.width); i++) {
      currentX.push(i)
    }

    var currentY = [];
    for (var i = component.y; i < (component.y + component.width); i++) {
      currentY.push(i)
    }

    if(currentX.includes(touchedX) && currentX.includes(touchedY)){
      return true;
    }else {
      return false
    }

    console.log(currentX, 'currentX');
    console.log(currentY, 'currentY');

}




function updateGameArea() {
  myGameArea.clear();

  myBackground.newPos();
  myBackground.update();

  myGamePiece2.newPos();
  myGamePiece2.update();

  //---This is for Touch
  // if (getComponentArea(myGamePiece2)) {
  //   console.log('myGamePiece Touched');
  // // myGamePiece.x = myGameArea.x;
  // // myGamePiece.y = myGameArea.y;
  // }
  //---This is for Touch

  // myGamePiece.newPos();
  myGamePiece.update();
}

// function stopMove() {
//   myGamePiece.speedX = 0;
//   myGamePiece.speedY = 0;
// }

//
// function moveup(){
//   myGamePiece.speedY -= 10;
// }
//
// function movedown(){
//   myGamePiece.speedY += 10;
// }
//
// function moveleft() {
//   myGamePiece.speedX -= 10;
// }
//
// function moveright(){
//   myGamePiece.speedX += 10;
// }
