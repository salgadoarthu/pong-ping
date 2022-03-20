//sons do jogo
let raquetada;
let ponto;
let trilha;

//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;

//variáveis da raquete inimiga
let xRaqueteInimigo = 585;
let yRaqueteInimigo = 150;
let velocidadeYInimigo; 

//placar do jogo
let meusPontos = 0;
let pontosDoInimigo = 0;

let colidiu = false;

function setup() {
    createCanvas(600, 400);
    trilha.loop ();
}

function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoborda();
    mostraRaquete (xRaquete, yRaquete);
    movimentaMinhaRaquete();
    movimentaRaqueteInimigo();
    //verificaColisaoRaquete ();
    verificaColisaoRaquete (xRaquete, yRaquete);
    mostraRaquete (xRaqueteInimigo, yRaqueteInimigo);
    verificaColisaoRaquete(xRaqueteInimigo, yRaqueteInimigo);
    incluirPlacar (meusPontos, pontosDoInimigo);
    marcaPonto ();
}

function mostraRaquete (x,y) {
  rect (x, y, raqueteComprimento, raqueteAltura)
}

function movimentaRaqueteInimigo () {
  if  (keyIsDown (UP_ARROW))
    yRaqueteInimigo -= 10;
  if (keyIsDown (DOWN_ARROW)){
    yRaqueteInimigo += 10;
 }  
  }
function movimentaMinhaRaquete () {
  if  (keyIsDown (87))
    yRaquete -= 10;
  if (keyIsDown (83)){
    yRaquete += 10;
  }
}
 function verificaColisaoRaquete () {
  if (xBolinha - raio < xRaquete + raqueteComprimento
    && yBolinha - raio < yRaquete + raqueteAltura 
    && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRaquete (){
  if (xBolinha - raio < xRaqueteInimigo + raqueteComprimento
    && yBolinha - raio < yRaqueteInimigo + raqueteAltura
    && yBolinha + raio> yRaqueteInimigo){
    velocidadeXBolinha *= -1;
  }
}


function mostraBolinha (){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha (){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
}

function verificaColisaoborda(){
    if (xBolinha + raio> width ||
      xBolinha - raio <0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height || 
      yBolinha - raio <0){
    velocidadeYBolinha *= -1;
  }
}

function verificaColisaoRaquete (){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
    raquetada.play ();
  }
}

function verificaColisaoRaquete (x,y) {
  colidiu = collideRectCircle (x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play ();
  }
}

function incluirPlacar () {
  stroke (255);
  textAlign (CENTER);
  textSize (16);
  fill (color (255, 140, 0));
  rect (150, 10, 40, 20);
  fill (255);
  text (meusPontos, 170, 26);
  fill (color (255, 140, 0));
  rect (450, 10, 40, 20);
  fill (255);
  text (pontosDoInimigo, 470, 26);
}

function marcaPonto () {
  if (xBolinha > 590) {
    meusPontos += 1;
    ponto.play ();
  }
  if (xBolinha < 10) {
    pontosDoInimigo += 1;
    ponto.play ();
  }
}

function preload () {
  trilha = loadSound ("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound ("raquetada.mp3")
}

console.log("### SALGADOARTHU ###")
