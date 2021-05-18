let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [45, 101, 155, 215, 275, 323];

//variáveis carro 
let carroLargura = 50;
let carroAltura = 30;
function mostraCarros() {
  
  for(var i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], carroLargura, carroAltura);
  }
}
  

function movimentaCarro() {
  
  xCarros[0] -= velocidadeCarro1;
  xCarros[1] -= velocidadeCarro2;
  xCarros[2] -= velocidadeCarro3;
  xCarros[3] -= velocidadeCarro4;
  xCarros[4] -= velocidadeCarro5;
  xCarros[5] -= velocidadeCarro6;
}

function voltaCarros() {
  
  if(xCarros[0] < - 50) {
    xCarros[0] = 600;
    velocidadeCarro1 = sorteiaVelocidade();
  }
  
  if(xCarros[1] < - 50) {
    xCarros[1] = 600;
    velocidadeCarro2 = sorteiaVelocidade();
  }
  
  if(xCarros[2] < - 50) {
    xCarros[2] = 600;
    velocidadeCarro3 = sorteiaVelocidade();
  }
  
   if(xCarros[3] < - 50) {
    xCarros[3] = 600;
    velocidadeCarro4 = sorteiaVelocidade();
  }
  
   if(xCarros[4] < - 50) {
    xCarros[4] = 600;
    velocidadeCarro5 = sorteiaVelocidade();
  }
  
   if(xCarros[5] < - 50) {
    xCarros[5] = 600;
    velocidadeCarro6 = sorteiaVelocidade();
  }
}
