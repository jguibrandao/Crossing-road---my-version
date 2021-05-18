//variáveis ator
let xAtor = 100;
let yAtor = 366;
let velocidadeAtor = 2;
let bateu = false;
let meusPontos = 0;

function movimentaAtor() {
  
  if(keyIsDown(UP_ARROW)) {
    yAtor -= velocidadeAtor;
  }
  
  if(keyIsDown(DOWN_ARROW)) {
    yAtor += velocidadeAtor;
  }
}

function mostraAtor() {
  
  image(imagemAtor, xAtor, yAtor, 30, 30);
}

function verificaColisao() {
  
  for(var i = 0; i < imagemCarros.length; i++){
    bateu = collideRectCircle(xCarros[i], yCarros[i], carroLargura, carroAltura, xAtor, yAtor, 15);
    
    if(bateu) {
      voltaAtor();
      somBatida.play();
      meusPontos -= 1;      
      if(meusPontos < 0) {
        meusPontos = 0;
      }
    }
  }
}

function voltaAtor() {

  yAtor = 385;
}

function incluiPontos() {
  stroke(0);
  fill(color(123, 104, 238));
  textSize(25);
  text(meusPontos, 150, 28);
  
}

function marcaPonto() {
  
  if(yAtor < 12) {
    meusPontos++;
    voltaAtor();
    somPonto.play();
  }
}

function limiteAtor() {
  
  if(yAtor > 410) {
    yAtor = 366;
  }
}