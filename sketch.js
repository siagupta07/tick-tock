var hr,min,sec
var hrAngle,minAngle,secAngle



function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background("black"); 
   translate(200,200)
   rotate(-90);

   //time functiionalities from P5.js
   hr=hour();
   min=minute();
  sec= second();
  
  //rotate
  secAngle=map(sec,0,60,0,360)
  minAngle=map(min,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)

  //draw the seconds hand
  push()
  rotate(secAngle)
  stroke("lightblue")
  strokeWeight(5)
  line(0,0,100,0)
  pop()
  // min hand
  push()
  rotate(minAngle)
  stroke("red")
  strokeWeight(5)
  line(0,0,75,0)
  pop()
  //hr hand
  push()
  rotate(hrAngle)
  stroke("green")
  strokeWeight(5)
  line(0,0,50,0)
  pop()

  stroke("purple")
  point(0,0)

  //draw the arcs
  strokeWeight(5)
  noFill()
  
  //seconds hand
  stroke("pink")
  arc(0,0,300,300,0,secAngle)
  
  //minutes
  stroke("orange")
  arc(0,0,280,280,0,minAngle)
  
  //hour
  stroke("grey")
  arc(0,0,260,260,0,hrAngle)
  
  drawSprites();
}