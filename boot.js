var menu01 = "#menu1";
var menu02 = "#menu2";
var menu03 = "#menu3";
var menu04 = "#menu4";
var menu05 = "#menu5";
var menu06 = "#menu6";
var menu07 = "#menu7";
var menu08 = "#menu8";
var menu09 = "#menu9";
var menu10 = "#menu10";
var menu11 = "#menu11";

var grid = "#grid";
var grid = "#form";


document.getElementById("menu01").addEventListener("mouseover", mouseOver);
document.getElementById("menu01").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("grid").innerHTML = "GRID";
}

function mouseOut() {
  document.getElementById("grid").innerHTML = " Aula 01";
}



