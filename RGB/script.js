var aleatorio = 0;
var min = 0;
var max = 255;
var quadrado = document.getElementById('quadrado');
quadrado.style.backgroundColor = 'black';

var Random = document.getElementById('random');
var Verm = document.getElementById('Verm');
var Verd = document.getElementById('Verd');
var Azu = document.getElementById('Azu');

Verm.addEventListener('input', CorRgb);
Verd.addEventListener('input', CorRgb);
Azu.addEventListener('input', CorRgb);
Random.addEventListener('click', CorAleatoria);

var VermText = document.getElementById('VermText');
var VerdText = document.getElementById('VerdText');
var AzuText = document.getElementById('AzuText');

function CorAleatoria() {
  min = Math.ceil(0);
  max = Math.floor(255);
  atualVerm = Math.floor(Math.random() * (255 - 0));
  atualVerd = Math.floor(Math.random() * (255 - 0));
  atualAzu = Math.floor(Math.random() * (255 - 0));

  VerdText.value = atualVerd;
  VermText.value = atualVerm;
  AzuText.value = atualAzu;

  Verm.value = atualVerm;
  Verd.value = atualVerd;
  Azu.value = atualAzu;

  return (quadrado.style.backgroundColor = `rgb(${atualVerm},${atualVerd},${atualAzu})`);
}

function CorRgb() {
  var atualVerm = document.getElementById('Verm').value;
  var atualVerd = document.getElementById('Verd').value;
  var atualAzu = document.getElementById('Azu').value;

  VermText.value = Verm.value;
  VerdText.value = Verd.value;
  AzuText.value = Azu.value;

  quadrado.style.backgroundColor = `rgb(${atualVerm},${atualVerd},${atualAzu})`;
}
