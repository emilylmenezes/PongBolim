let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;

function mostraBolinha(){
  fill(255)
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoBorda(){
  if(xBolinha > 600 - raio){
    velocidadeXBolinha *= -1; 
  }
  if(xBolinha < 0 + raio){
    velocidadeXBolinha *= -1;
  }
  if(yBolinha > 400 - raio){
    velocidadeYBolinha *= -1;
  }
  if(yBolinha < 0 + raio){
    velocidadeYBolinha *= -1;
  }
}

