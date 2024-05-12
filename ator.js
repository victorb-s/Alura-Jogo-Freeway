// Variáveis do Ator
let xAtor = 85;
let yAtor = 366;
var colisao = false;

let meusPontos = 0;

// Mostrar Ator
function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

// Movimentar Ator
function movimentaAtor(){
  if(keyIsDown(87)){
    yAtor -= 4;
  }
  
  if(keyIsDown(83)){
    if(yAtor < 369){
      yAtor += 4;
    }
  }
  
  if(keyIsDown(65)){
    if(xAtor > 2){
      xAtor -= 4;
    }
  }
  
  if(keyIsDown(68)){
    if(xAtor < 470){
      xAtor += 4;
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], widthCarros, heightCarros, xAtor, yAtor, 15);
    if(colisao){
      voltaPosicaoInicialAtor();
      somDaColisao.play();
      if(meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function voltaPosicaoInicialAtor(){
  yAtor = 366;
  xAtor = 85;
}

function incluirPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60))
  text(meusPontos, width/5, 27);
}

function marcarPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltaPosicaoInicialAtor();
    xCarros[5] = 600
  }
}