let colidiuMinhaTrave = false;
let colidiuTraveOponente = false;

let meusPontos = 0;
let pontosOponente = 0;


// Minha trave

let xTrave = 0;
let yTrave = 160;
let wTrave = 8;
let hTrave = 80;

let xTraveOponente = 592;

function mostraTrave(){
  rect(xTrave, yTrave, wTrave, hTrave);
  rect(xTraveOponente, yTrave, wTrave, hTrave);
}

function colisaoTrave(){
  colidiuMinhaTrave = collideRectCircle(xTrave, yTrave, wTrave, hTrave, xBolinha, yBolinha, raio);

colidiuTraveOponente = collideRectCircle(xTraveOponente, yTrave, wTrave, hTrave, xBolinha, yBolinha, raio);
 
  if(colidiuMinhaTrave){
    pontosOponente++
    ponto.play();
  }
  
  if(colidiuTraveOponente){
    meusPontos++
    ponto.play();
  }
}


