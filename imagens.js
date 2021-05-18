function preload() {
  
  imagemEstrada = loadImage("images/estrada.png");
  imagemAtor = loadImage("images/ator-1.png");
  imagemCarro1 = loadImage("images/carro-1.png");
  imagemCarro2 = loadImage("images/carro-2.png");
  imagemCarro3 = loadImage("images/carro-3.png");
  imagemCarro4 = loadImage("images/carro-1.png");
  imagemCarro5 = loadImage("images/carro-2.png");
  imagemCarro6 = loadImage("images/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
  
  somFundo = loadSound("sons/topgear.mp3");
  somBatida = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}

let imagemEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

let somFundo;
let somBatida;
let somPonto;