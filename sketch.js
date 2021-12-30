function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(33,94,33);
  mostraDesenho()
  mostraBolinha();
  movimentaBolinha();
  colisaoBorda();
  mostraTrave();
  colisaoTrave();
  mostraJogadorTime1();
  mostraJogadorTime2();
  movimentaMeuJogador();
  movimentaJogadorOponente();
  colidiuJogador1();
  colidiuJogador2();
  incluiPlacar();
}