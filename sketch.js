const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground1, ground2, ground3, box1
var box2, box3, box4, box5, box6
var box7, box8, box9, box10, box11
var box12, box13, box15, box16
var box17, box18, box19, box20, box21, box22
var box23, box24, box25, box26,box27;
var hexagon, slingshot1;
var backgroundImg
var a = false;
var score1 = 0;
var backgroundImage;

function preload() {
    polygonImg = loadImage("polygon.png");
    changeBackground();
}

function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    hexagon = new polygonal_shape(200, 300, 25);
    slingshot1 = new SlingShot(hexagon.body, {x: 200, y: 300});


    ground1 = new Ground(width/2, height-20, width, 28);
    ground2 = new Ground(width/3 + 115, height-170, width/4, 10)
    ground3 = new Ground(width/2 + 410, height - 290, width/4, 10)

    box1 = new Box(500, height - 195, 60, 60);
    box2 = new Box(560, height - 195, 60, 60);
    box3 = new Box(620, height - 195, 60, 60);
    box4 = new Box(680, height - 195, 60, 60);
    box5 = new Box(740, height - 195, 60, 60);
    box6 = new Box(800, height - 195, 60, 60);

    box7 = new Box(560, height - 260, 60, 60);
    box8 = new Box(620, height - 260, 60, 60);
    box9 = new Box(680, height - 260, 60, 60);
    box10 = new Box(740, height - 260, 60, 60);
    
    box11 = new Box(620, height - 320, 60, 60);
    box12 = new Box(680, height - 320, 60, 60);

    box13 = new Box(650, height - 380, 60, 60);


    box15 = new Box(1050+10, height - 325, 60, 60);
    box16 = new Box(1110+10, height - 325, 60, 60);
    box17 = new Box(1170+10, height - 325, 60, 60);
    box18 = new Box(1230+10, height - 325, 60, 60);
    box19 = new Box(1290 + 10, height - 325, 60, 60);
    box20 = new Box(1350 + 10, height - 325, 60, 60);

    box21 = new Box(1120, height - 375, 60, 60);
    box22 = new Box(1180, height - 375, 60, 60);
    box23 = new Box(1240, height - 375, 60, 60);
    box24 = new Box(1300, height - 375, 60, 60);

    box25 = new Box(1180, height - 435, 60, 60);
    box26 = new Box(1240, height - 435, 60, 60);

    box27 = new Box(1210, height - 495, 60, 60);
}

function draw()
{
    if (backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();

    box1.score()
    box2.score()
    box3.score()
    box4.score()
    box5.score()
    box6.score()
    box7.score()
    box8.score()
    box9.score()
    box10.score()
    box11.score()
    box12.score()
    box13.score()
    box15.score()
    box16.score()
    box17.score()
    box18.score()
    box19.score()
    box20.score()
    box21.score()
    box22.score()
    box23.score()
    box24.score()
    box25.score()
    box26.score()
    box27.score()

    hexagon.display();
    slingshot1.display();
    push();
    textSize(30);
    fill("black");
    text("DRAG AND RELEASE THE HEXAGONAL STONE TO LAUNCH IT TOWARDS THE BOXES!!", 100, 40);
    pop();
}

function keyPressed()
{
    if (keyCode == 32)
    {
        slingshot1.attach(hexagon.body);
    }
}

function mouseDragged()
{
    Matter.Body.setPosition(hexagon.body, {x: mouseX, y: mouseY})
}

function mouseReleased()
{
    slingshot1.fly()
}

async function changeBackground()
{
    url = "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
    var result = await fetch(url)
    var resultType = await result.json();
    var datetime = resultType.datetime
    var hour = datetime.slice(11, 13);
    if (hour >= 06 && hour < 18)
    {
        backgroundImg = 255-25
    }
    else
    {
        backgroundImg = 25;
    }
}


