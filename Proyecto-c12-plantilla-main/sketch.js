var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png")
 
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200,0,400,400)
 path.addImage("path", pathImg)
 path.velocityY = 4
path.scale=1.2;

boy = createSprite(200,350,150,150)
boy.addAnimation("running", boyImg)
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  function mouseMoved() {
    // Mueve el sprite a lo largo del eje X
    boy.position.x = mouseX;
  }

  mouseMoved()
  

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  
  
  //código para reiniciar el fondo
  if(path.y > 400 ){ 
    path.y = height/2;
  }
  if(boy.collide(leftBoundary) || boy.collide(rightBoundary)){
    boy.velocityX= 0
  }


  drawSprites();
}
