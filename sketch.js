var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,700);
  //system = new System()
  //security = new Security()
  button1=createButton('check');
  button1.position(100,250);
  button2=createButton('check');
  button2.position(250,550);
  button3=createButton('check');
  button3.position(650,400);
  input1=createInput('word');
  input1.position(100,200);
  input2=createInput('word');
  input2.position(250,500);
  input3=createInput('word');
  input3.position(650,350);
  title1=createElement('h3');
  title1.html('REVBAILA');
  title1.style('color',"Yellow")
  title1.position(100,150);
  title2=createElement('h3');
  title2.html('ATEDASBA');
  title2.style('color',"Yellow")
  title2.position(250,450);
  title3=createElement('h3');
  title3.html('CUTNIFON');
  title3.style('color',"Yellow")
  title3.position(650,300);
}

function draw() {
  background(bg);
  //clues();
  //security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
  
  button1.mousePressed(function(){
    if((input1.value()).toUpperCase()==='VARIABLE'){
      score=score+1;
      button1.hide();
      input1.hide();
      title1.hide();
     }
  })

  button2.mousePressed(function(){
    if((input2.value()).toUpperCase()==='DATABASE'){
      score=score+1;
      button2.hide();
      input2.hide();
      title2.hide();
     }
  })

  button3.mousePressed(function(){
    if((input3.value()).toUpperCase()==='FUNCTION'){
      score=score+1;
      button3.hide();
      input3.hide();
      title3.hide();
     }
  })

  if(score === 3) {
    //clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}