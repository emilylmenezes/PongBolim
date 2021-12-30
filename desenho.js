function mostraDesenho(){

let c = color(255, 255, 255);
  fill(c);
  noStroke();

  //Retângulo de fora na vertical
  rect(0, 75, 110, 4)
 
  //Retângulo de fora na horizontal
  rect(108, 75, 4, 252);
 
  //Retângulo de fora na vertical esquerdo
  rect(0, 325, 112, 5);

  //Retângulo de dentro na vertical
  rect(0, 138, 40, 5);
 
  //Retângulo de dentro na vertical
  rect(0, 262, 40, 5);
  
  //Retângulo de dentro na horizontal
  rect(35, 139, 5, 128);
  
  //Circulo da área
  circle(75, 202, 5);
  
   //Bola do meio
  circle(302, 204, 15);
  
  //Linha do meio
  rect(301, 0, 3, 500)
  
 
  
  //Retangulo oponente
  rect(490, 75, 110, 4)

  
  //Retângulo de fora na horizontal Oponente
  rect(490, 75, 4, 252);
 
  //Retângulo de fora na vertical esquerdo
  rect(490, 325, 112, 5);

  //Retângulo de dentro na vertical
  rect(558, 138, 40, 5);
 
  //Retângulo de dentro na vertical
  rect(558, 262, 50, 5);
  
  //Retângulo de dentro na horizontal
  rect(554, 138, 5, 129);
  
  //Circulo da área Oponente
  circle(515, 202, 5);
  
  //Meu arco 
  strokeWeight(4);
  stroke(255);
  noFill()
  arc(110, 200, 52, 72, 4.8, HALF_PI);

  
  
  // Arco do Oponente
  strokeWeight(4);
  stroke(255);
  noFill();
  arc(526, 200, 110, 100, 2.30, PI + QUARTER_PI);
  
  //Arco do campo 
  
  arc(0, 0, 30, 30, 0, HALF_PI);
  arc(600, 2, 30, 30, HALF_PI, PI);
  arc(600, 400, 30, 30, 8, HALF_PI);
  arc(0, 400, 30, 30, 8, HALF_PI);
  
  //Arco do meio
  
  
  circle(302,205,60)
  
}