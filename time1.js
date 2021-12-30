let colidiu = false;

let xJogador1 = 105;
let yJogador1 = 160;
let wJogador1 = 8;
let hJogador1 = 80;

let xJogador2 = 360;
let yJogador2 = 160;
let wJogador2 = 8; 
let hJogador2 = 80;


function mostraJogadorTime1(){
  strokeWeight(1);
  noStroke();
  fill('red');
  rect(xJogador1, yJogador1, wJogador1, hJogador1);
  rect(xJogador2, yJogador2, wJogador2, hJogador2);
}

function movimentaMeuJogador(){
  if(keyIsDown(UP_ARROW)){
    yJogador1 -= 10;
    yJogador2 -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yJogador1 += 10;
    yJogador2 += 10;
  }
}

function colidiuJogador1(){
  colidiu = collideRectCircle(xJogador1, yJogador1, wJogador1, hJogador1, xBolinha, yBolinha, raio);

  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  
colidiu = collideRectCircle(xJogador2, yJogador2, wJogador2, hJogador2, xBolinha, yBolinha, raio);

  if(colidiu){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

