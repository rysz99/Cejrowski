var numer = Math.floor(Math.random()*6)+1;
var numer2 = Math.floor(Math.random()*4)+1;
var numer3 = Math.floor(Math.random()*3)+1;
var  numer4 = Math.floor(Math.random()*4)+1;
var numer5 = Math.floor(Math.random()*3)+1;
var numer6 = Math.floor(Math.random()*6)+1;
function zmienslajd() {

numer++; if(numer>6) numer=1;
numer2++; if(numer2>4) numer2=1;
numer3++; if(numer3>3) numer3=1;
numer4++; if(numer4>4) numer4=1;
numer5++; if(numer5>3) numer5=1;
numer6++; if(numer6>6) numer6=1;

var plik = "<img src=\"p"+numer+".jpeg\" />";
var plik2 = "<img src=\"m"+numer2+".jpeg\" />";  
var plik3 = "<img src=\"t"+numer3+".jpeg\" />";
var plik4 = "<img src=\"usa"+numer4+".jpeg\" />";
var plik5 = "<img src=\"k"+numer5+".jpeg\" />";
var plik6 = "<img src=\"e"+numer6+".jpeg\" />";

document.getElementById("slider").innerHTML = plik;
document.getElementById("slider2").innerHTML = plik2;
document.getElementById("slider3").innerHTML = plik3;
document.getElementById("slider4").innerHTML = plik4;
document.getElementById("slider5").innerHTML = plik5;
document.getElementById("slider6").innerHTML = plik6;

setTimeout("zmienslajd()",5000);
}
