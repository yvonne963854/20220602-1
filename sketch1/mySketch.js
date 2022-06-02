function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	for(var i=0;i<50;i++){
		let flower_deta=generateRandomFlower()
		flowers.push(flower_deta)
	}
}

var myFlower={
    x:300,
    y:200,
    size:2,
    color1:"#FB8B24",
	  color2:"#D90368"
}

var flowers=[]
var clrs1=["#9b2226","#ae2012","#bb3e03","#ca6702","#ee9b00"]
var clrs2=["#d9ed92","#99d98c","#52b69a","#168aad","#1e6091"]
function generateRandomFlower(x,y){
	return{
		x: x || random(width), //如果有x值就以x為主，沒有x值就採用random(width)
		y:y || random(height),
		size: random(2),
		color1:random(clrs1),
		color2:random(clrs2)
	}
}

function drawFlower(flower){ //clr1為中心圓顏色，clr2花瓣顏色，size花瓣大小    
    push()	
	translate(flower.x,flower.y);   
	rotate(flower.size)
        if(flower.color1) { 
            fill(flower.color1)
        }
	      else{
            fill(255,211,33)
        }
		ellipse(0, 0, 50);
		ellipseMode(CORNER) 
        if(flower.color2) { 
            fill(flower.color2)
        }
	      else{
            fill(255,90,61)
        }
		for(var i=0;i<16;i++){
			ellipse(30, -20, 100*flower.size, 30);
			line(40,-5,120*flower.size,-5)
			rotate(PI/8) //180度產生八片，360度產生16片
		}
    pop()   
}

function mousePressed(){
	let flower_deta=generateRandomFlower(mouseX,mouseY)
	flowers.push(flower_deta)
}

function draw() {
	background(0);
	for(var i=0;i<flowers.length;i++){
		drawFlower(flowers[i])
	if(dist(mouseX,mouseY,flowers[i].x,flowers[i].y)<200){
		flowers[i].size=lerp(flowers[i].size,1,0.1)
	}
	else{
		flowers[i].size=lerp(flowers[i].size,0,0.1)
	  }
	}
}