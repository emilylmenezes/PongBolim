function incluiPlacar(){
  noStroke();
  textAlign(CENTER)
  textSize(18)
  fill(color(255, 140, 0))
  rect(150, 10, 40, 20)
  fill(255)
  text(meusPontos, 170, 26)
  fill(color(255, 140, 0))
  rect(450, 10, 40, 20)
  fill(255)
  text(pontosOponente, 470,26)
}