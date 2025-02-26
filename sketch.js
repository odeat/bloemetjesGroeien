class Bloem{
  constructor(x, y, steelHoogte, circleRadius, bloemKleur){
    this.x = x;
    this.y = y;
    this.steelHoogte = steelHoogte;
    this.circleRadius = circleRadius;
    this.bloemKleur = bloemKleur;
  }
}

class Druppel{
  constructor(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
  }
}

// lijst met 2 bloemetjes, bestaat uit : x, y, steelHoogte, circleRadius, bloemKleur
let bloemetjes = [
  // new Bloem(50, window.innerHeight, 50, 50, "yellow"), 
  // new Bloem(200, window.innerHeight, 100, 100, "red")
];
// lijst met druppeltjes, bestaat uit: x en y
let druppels = [
];


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for(let x = 0; x <= window.innerWidth - 10; x += random(10, 30)){
    bloemetjes.push(new Bloem(x, window.innerHeight, map(Math.sin(x / 30),-1, 1, 30, 100), random(30, 100), random(["purple", "deeppink", "yellow", "red", "springgreen", "chartreuse", "orange"])))
  }
}


function draw() {
  // -------------------UPDATE-------------------
  for(var druppel of druppels){
    druppel.y += 6 // druppel speed
  }

  if(mouseIsPressed == true){ // checks if the mouse is pressed so druppels can fall down
    
    let druppel2 = new Druppel(mouseX - 50, mouseY, random(["lightblue", "aqua", "cadetblue", "darkcyan"]))
    druppels.push(druppel2)
  }

  var temp = []
  for(var druppel of druppels){
    if (druppel.y < window.innerHeight - 0){
      temp.push(druppel)
    }
  }
  druppels = temp

  for(druppel of druppels){
    for(bloem of bloemetjes){
      var x = bloem.x - druppel.x
      var y = bloem.y - druppel.y
      var length = Math.sqrt(x*x + y*y)
        
      if(length < 20){
          bloem.steelHoogte += 1;
      }
    }
  }

  // -------------------RENDER-------------------
  background(199, 220, 239);  
  // forloop maken dat de bloemetjes in het scherm komen te staan
  for(var i = 0; i < bloemetjes.length; i++){
    let bloem = bloemetjes[i];
      bloem.x;
      bloem.y;
      bloem.steelHoogte;
      bloem.circleRadius;
      fill("green")
      rect(bloem.x, bloem.y, 10, - bloem.steelHoogte);
      fill(bloem.bloemKleur);
      circle(bloem.x + 5, bloem.y - bloem.steelHoogte , bloem.circleRadius)
  }

  // druppel
  for(var druppel of druppels){
    fill(druppel.color)
    circle(druppel.x, druppel.y, random(20))
  }

  // gietertje
  fill(0, 0, 255)
  rect(mouseX, mouseY, 100, 100);
  rect(mouseX, mouseY, - 50, 20);
}
