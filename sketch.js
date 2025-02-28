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

class Bloembol{
  constructor(x, y, circleRadius, bloemKleur, vx, vy){
    this.x = x;
    this.y = y; 
    this.circleRadius = circleRadius;
    this.bloemKleur = bloemKleur;
    this.vx = vx;
    this.vy = vy;
  }
}

class Zaadje{
  constructor(x, y, vx, vy){
    this.x = x;
    this.y = y; 
    this.vx = vx;
    this.vy = vy;
    this.deleted = false;
  }
}

let bloemetjes = [];
let druppels = [];
let bloembollen = [];
let zaadjes = [];
var bloemKleuren = ["purple", "deeppink", "yellow", "red", "springgreen", "chartreuse", "orange"]

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for(let x = 0; x <= window.innerWidth - 10; x += random(10, 30)){
    bloemetjes.push(new Bloem(x, window.innerHeight, map(Math.sin(x / 30),-1, 1, 30, 100), random(30, 100), random(bloemKleuren)))
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
      if (bloem.deleted){
        continue;
      }
      var x = bloem.x - druppel.x
      var y = bloem.y - druppel.y
      var length = Math.sqrt(x*x + y*y)
        
      if(length < 20){
          bloem.steelHoogte += 2; 
      }
      
      if(bloem.steelHoogte > window.innerHeight / 2){
        let bloembol = new Bloembol(bloem.x, bloem.y - bloem.steelHoogte, 
          bloem.circleRadius, bloem.bloemKleur, random(-5, 5), random(-5, -10))
        bloembollen.push(bloembol)
        bloem.deleted = true
        for(let i = 0; i < 11; i++){
          var zaadje = new Zaadje(bloem.x, bloem.y - bloem.steelHoogte, random(-5, 5), random(-5, -10))
          zaadjes.push(zaadje)
        }
      }
    }
  }

  for(let zaadje of zaadjes){
      zaadje.vy += 0.2
      zaadje.x += zaadje.vx
      zaadje.y += zaadje.vy

      if(zaadje.y > window.innerHeight){
        var nieuweBloem = new Bloem(zaadje.x, zaadje.y, random(50, 200), random(30, 100), random(bloemKleuren))
        bloemetjes.push(nieuweBloem)
        zaadje.deleted = true
      }
  }
  zaadjes = zaadjes.filter((z)=> z.deleted == false)

  for(let bloembol of bloembollen){
    bloembol.vy += 0.2
    bloembol.x += bloembol.vx
    bloembol.y += bloembol.vy
  }
  bloembollen = bloembollen.filter((b)=>b.y < window.innerHeight)

  bloemetjes = bloemetjes.filter((b)=>{
    return b.steelHoogte < window.innerHeight / 2
  })

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

  for(let zaadje of zaadjes){
    fill("brown")
    circle(zaadje.x, zaadje.y, 8)
  }

  for(let bloembol of bloembollen){
    fill(bloembol.bloemKleur)
    circle(bloembol.x, bloembol.y, bloembol.circleRadius)
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
