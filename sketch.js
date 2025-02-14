class Bloem{
  constructor(x, y, rectHeight, circleRadius, bloemKleur){
    this.x = x;
    this.y = y;
    this.rectHeight = rectHeight;
    this.circleRadius = circleRadius;
    this.bloemKleur = bloemKleur;
  }
}

class Druppel{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
}

// lijst met 2 bloemetjes, bestaat uit : x, y, rectHeight, circleRadius, bloemKleur
const bloemetjes = [
  new Bloem(50, window.innerHeight - 50, 50, 50, "yellow"), 
  new Bloem(200, window.innerHeight - 100, 100, 100, "red")
];
// lijst met druppeltjes, bestaat uit: x en y
const druppels = [
new Druppel(100, 100),
];


function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}


function draw() {
  // -------------------UPDATE-------------------
  for(var druppel of druppels){
    druppel.y += 8
  }








  // -------------------RENDER-------------------
  background(199, 220, 239);  
  // forloop maken dat de bloemetjes in het scherm komen te staan
  for(var i = 0; i < bloemetjes.length; i++){
    let bloem = bloemetjes[i];
      bloem.x;
      bloem.y;
      bloem.rectHeight;
      bloem.circleRadius;
      fill("green")
      rect(bloem.x, bloem.y, 10, bloem.rectHeight);
      fill(bloem.bloemKleur);
      circle(bloem.x + 5, bloem.y - 15, bloem.circleRadius)
  }

  // druppel
  fill("lightblue")
  for(var druppel of druppels){
    circle(druppel.x, druppel.y, 10)
  } 

  // gietertje
  fill(0, 0, 255)
  rect(mouseX, mouseY, 100, 100);
  rect(mouseX, mouseY, - 50, 20);
}
