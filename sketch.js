var bg, bgImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder, ball, ground;
var stand1, stand2;
var ball;
var slingShot;
var polygon_img;

function preload() {
    polygon_img = loadImage("ball.png");
    bgImg = loadImage("background1.jpg");
}

function setup() {
    engine = Engine.create();
    world = engine.world;

    createCanvas(900, 400);
    ground = new Ground();
    stand1 = new Stand(380, 300, 270, 10);
    stand2 = new Stand(700, 200, 200, 10);

    //level one
    block1 = new Block(280, 275);
    block2 = new Block(310, 275);
    block3 = new Block(340, 275);
    block4 = new Block(370, 275);
    block5 = new Block(400, 275);
    block6 = new Block(430, 275);
    block7 = new Block(460, 275);
    block8 = new Block(490, 275);
    //level two
    block9 = new Block(310, 235);
    block10 = new Block(340, 235);
    block11 = new Block(370, 235);
    block12 = new Block(400, 235);
    block13 = new Block(430, 235);
    block14 = new Block(460, 235);
    //level three
    block15 = new Block(340, 195);
    block16 = new Block(370, 195);
    block17 = new Block(400, 195);
    block18 = new Block(430, 195);
    //level four
    block19 = new Block(370, 155);
    block20 = new Block(400, 155);
    //level five
    block21 = new Block(385, 115);

    //set two 
    //level one
    blocks1 = new Block(640, 175);
    blocks2 = new Block(670, 175);
    blocks3 = new Block(700, 175);
    blocks4 = new Block(730, 175);
    blocks5 = new Block(760, 175);
    //level two
    blocks6 = new Block(670, 135);
    blocks7 = new Block(700, 135);
    blocks8 = new Block(730, 135);
    //level three
    blocks9 = new Block(700, 95);

    //ball  with slings
    var option = {
        'restitution': 0.8,
        'friction': 1.0,
        'density': 2.5
    };

    ball = Bodies.circle(50, 150, 25, option);
    World.add(world, ball);

    slingShot = new SlingShot(this.ball, { x: 150, y: 200 });

}

function draw() {
    background(bgImg);
    Engine.update(engine);


    // ground.display();
    strokeWeight(2);
    stroke(15);

    stand1.display();
    stand2.display();

    stroke(15);
    fill("black");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    stroke(15);
    fill("orange");
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    stroke(15);
    fill("violet");
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    stroke(15);
    fill("green");
    block19.display();
    block20.display();
    stroke(15);
    fill("blue");
    block21.display();

    stroke(15);
    fill("red");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    stroke(15);
    fill("yellow");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    stroke(15);
    fill("pink");
    blocks9.display();
    fill("black");
    textSize(30);
    text("Drag the Line and Release to Hit the Boxes", 150, 50);
    textSize(25);
    text("Press Space to Get a chance Again to Hit", 300, 350);
    imageMode(CENTER);
    image(polygon_img, ball.position.x, ball.position.y, 80, 60);

    slingShot.display();

}

function mouseDragged() {
    Matter.Body.setPosition(this.ball, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingShot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingShot.attach(this.ball);
    }
}