
function setup() {
  createCanvas(500, 400);
  somFundo.loop();
}

function draw() {
  background(imagemEstrada);
  
  mostraAtor();
  mostraCarros();
  movimentaCarro();
  movimentaAtor();
  voltaCarros();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  limiteAtor();
}


  
  
  
