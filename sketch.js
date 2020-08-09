
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var particles = [];
var plinko = [];
var divisions = [];

var divisionHeight=300;

var score = 0;
var count = 0;

var particle;

var gameState = "start";
//var gameState = "end";
function setup() {
createCanvas(900, 800);

engine = Engine.create();
world = engine.world;
ground = new Ground(width/2,height,width,20);


 for (var k = 0; k <=width; k = k + 80) {
   divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
 }


  for (var j = 10; j <=900; j=j+40) 
  {
  
     plinko.push(new Plinko(j,55,35));
  }

  for (var j = 30; j <=855; j=j+40) 
  {
  
     plinko.push(new Plinko(j,105,25));
  }

   for (var j = 10; j <=900; j=j+40) 
  {
  
     plinko.push(new Plinko(j,155,5));
  }

   for (var j = 30; j <=885; j=j+40) 
  {
  
     plinko.push(new Plinko(j,205,35));
  }
  for (var j = 30; j <=885; j=j+40){
    plinko.push(new Plinko(j,305,25));
  }
  

  
}



function draw() {
background("black");
textSize(20)
text("Score : "+score,20,30);
textSize(15)
text("500               500            500              500              100            100            100              200                200              200",20,550);

Engine.update(engine);
if(gameState==="end"){
  textSize(100);
  text("GameOver",150,250);
}
 
 for (var i = 0; i < plinko.length; i++) {
    plinko[i].display();
   
 }

 for(var k = 0; k < divisions.length; k++){
   divisions[k].display();
 }

if(particle != null)
{
console.log("hi inside"+ particle);

particle.display();
if(particle.body.position.y > 760)
{

    if(particle.body.position.x < 300)
    {
          score=score+500;
          particle=null;
          if( count >=5)gameState = "end";
}


else if (particle.body.position.x < 600 && particle.body.position.x > 301)
{
  score = score + 100;
  particle=null;
  if ( count>= 5)gameState = "end";
  }

else if (particle.body.position.x < 900 && particle.body.position.x > 601)
{
score = score + 200;
particle=null;
if ( count>= 5)gameState = "end";
}

}

}

ground.display();
}
 function leftmousePressed()
 {
if(gameState !=="end"){
  count++;
  particle = new Particle(mouseX, 10, 10, 10); 
}
 }

