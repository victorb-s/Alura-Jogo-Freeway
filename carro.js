// Variáveis dos carros
let yCarros = [40, 96, 150, 210, 262, 316];
let xCarros = [720, 680, 650, 620, 690, 600]
let velocidadeCarros = [7, 6.5, 5, 6.5, 6, 4.5];

let widthCarros = 50;
let heightCarros = 40;

// Criar Carro1
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], widthCarros, heightCarros);
  }
}

// Movimentar Carro1
function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++)
  xCarros[i] -= velocidadeCarros[i];
}

function voltaPosicaoInicialCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if(verificarLimiteTela(xCarros[i])){
      xCarros[i] = 600;
    };
  }
}

function verificarLimiteTela(xCarros){
  return xCarros < -50;
}