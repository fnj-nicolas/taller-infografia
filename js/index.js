var transporteB = document.getElementbyId('transporte1');
var empezarT = document.getElementById('transporte2');
var ganaderiaB = document.getElementById('ganaderia1');
var empezarG = document.getElementById('ganaderia2');
var energiasB = document.getElementById('energia1');
var empezarE = document.getElementById('energia2');
var industriaB = document.getElementById('industria1');
var empezarI = document.getElementById('industria2');
var residuosB = document.getElementById('residuos1');
var empezarR = document.getElementById('residuos2');
var botonMenu = document.getElementById('menulateral2');
var botonMenuA = document.getElementById('menulateral');
var ayuda1G = document.getElementById('ayudar');
var cerrarG = document.getElementById('ayudar');
var ayuda1T = document.getElementById('ayudarAct1T');
var cerrarT = document.getElementById('ayudarAct1T');
var ayuda1I = document.getElementById('ayudarAct1I');
var cerrarI = document.getElementById('ayudarAct1I');
var ayuda1R = document.getElementById('ayudarAct1R');
var cerrarR = document.getElementById('ayudarAct1R');
var ayuda1E = document.getElementById('ayudarAct1E');
var cerrarE = document.getElementById('ayudarAct1E');

function ayuda1G(){
  ayudar.style.display = null;
}
function cerrar1G(){
  ayudar.style.display = "none";
}
function ayuda1T(){
  ayudarAct1T.style.display = null;
}
function cerrar1T(){
  ayudarAct1T.style.display = "none";
}
function ayuda1I(){
  ayudarAct1I.style.display = null;
}
function cerrar1I(){
  ayudarAct1I.style.display = "none";
}
function ayuda1R(){
  ayudarAct1R.style.display = null;
}
function cerrar1R(){
  ayudarAct1R.style.display = "none";
}
function ayuda1E(){
  ayudarAct1E.style.display = null;
}
function cerrar1E(){
  ayudarAct1E.style.display = "none";
}



function menucerrado(){
  menulateral2.style.display = null;
}
function menuabierto(){
  menulateral2.style.display = 'none';
}
function botonT() {
  transporte1.style.display = null;
}
function next1T(){
  transporte2.style.display = null;
  transporte1.style.display= 'none';
}
function botonG(){
  ganaderia1.style.display = null;
}
function next1G(){
  ganaderia2.style.display = null;
  ganaderia1.style.display = 'none';
}
function botonR() {
  residuos1.style.display = null;
}
function next1R() {
  residuos2.style.display = null;
  residuos1.style.display ='none';
}
function botonE(){
  energia1.style.display = null;
}
function next1E(){
  energia2.style.display = null;
  energia1.style.display = 'none';
}
function botonI(){
  industria1.style.display = null;
}
function next1I(){
  industria2.style.display = null;
  industria1.style.display = 'none';
}


var count = 1;
var countEl = 0
var cir = document.getElementById("cir");
function plus(){
    cir.setAttribute("cx", count++);
    countEl.value = count;
}
function minus(){
  if (count > 1) {
    cir.setAttribute("cx", count--);
    countEl.value = count;
  }  
}