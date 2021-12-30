let colisao = false;

let xJogador3 = 240;
let yJogador3 = 160;
let wJogador3 = 8;
let hJogador3 = 80;

let xJogador4 = 490;
let yJogador4 = 160;
let wJogador4 = 8; 
let hJogador4 = 80;


function mostraJogadorTime2(){
  strokeWeight(1);
  noStroke();
  fill('blue');
  rect(xJogador3, yJogador3, wJogador3, hJogador3);
  rect(xJogador4, yJogador4, wJogador4, hJogador4);
}

function movimentaJogadorOponente(){
  if(keyIsDown("87")){
    yJogador3 -= 10;
    yJogador4 -= 10;
  }
  if(keyIsDown("83")){
    yJogador3 += 10;
    yJogador4 += 10;
  }
}

function colidiuJogador2(){
  colisao = collideRectCircle(xJogador3, yJogador3, wJogador3, hJogador3, xBolinha, yBolinha, raio);

  if(colisao){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
  
colisao = collideRectCircle(xJogador4, yJogador4, wJogador4, hJogador4, xBolinha, yBolinha, raio);

  if(colisao){
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}