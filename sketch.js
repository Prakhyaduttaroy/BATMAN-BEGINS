const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var umbrella,drops = [];
var maxDrops = 500;
function preload(){
    
}

function setup(){
  createCanvas(800,800);
  engine = Engine.create();
	world = engine.world;
  umbrella =   new Umbrella(350,550);
  
  
}

function draw(){
  for (var i = 0; i<maxDrops; i++){
    drops.push(new Drop(random(0,800), random(0,800)));
  }
  background("grey");
  umbrella.display();
  for (var i = 0; i<maxDrops; i++){
drops[i].display();
drops[i].Update();
  }
}   

