const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint
var MConstraint;

var pen1,pen2,pen3,pen4,pen5;
var str1,str2,str3,str4,str5;

function setup(){
var canvas = createCanvas(windowWidth/1.5,windowHeight/1.5)
engine = Engine.create()
world = engine.world;

let canvasmouse = Mouse.create(canvas.elt)
canvasmouse.pixelRatio = pixelDensity();
let options = {

mouse: canvasmouse

}
mConstraint = MouseConstraint.create(engine,options);
World.add(world,mConstraint);

pen1 = new Pendulum(190,400,"red");
pen2 = new Pendulum(270,400,"blue");
pen3 = new Pendulum(350,400,"green");
pen4 = new Pendulum(430,400,"yellow");
pen5 = new Pendulum(510,400,"orange");

str1 = new Sling(pen1.body,{x:190,y:100})
str2 = new Sling(pen2.body,{x:270,y:100})
str3 = new Sling(pen3.body,{x:350,y:100})
str4 = new Sling(pen4.body,{x:430,y:100})
str5 = new Sling(pen5.body,{x:510,y:100})

}
function draw(){
Engine.update(engine)
background(0)


pen1.display();
pen2.display();
pen3.display();
pen4.display();
pen5.display();

str1.display();
str2.display();
str3.display();
str4.display();
str5.display();

}
function mouseDragged(){


Matter.Body.setPosition(pen1.body,{x: mouseX,y:mouseY});


}

