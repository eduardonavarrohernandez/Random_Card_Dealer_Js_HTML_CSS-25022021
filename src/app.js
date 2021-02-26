/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function signosAleatorios() {
  let signos = ["♦", "♥", "♠", "♣"];
  let ram = getRndInteger(0, 3);
  return signos[ram];
}
function numeroAleatorio() {
  let numeroAleatorio = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let num = getRndInteger(0, 12);
  return numeroAleatorio[num];
}

window.onload = function() {
  let signo = signosAleatorios();
  let num = numeroAleatorio();
  let number = document.getElementById("number");
  number.innerHTML = num;
  //write your code here
  let signoArriba = document.getElementById("signoArriba");
  let signoAbajo = document.getElementById("signoAbajo");
  signoArriba.innerHTML = signo;
  signoAbajo.innerHTML = signo;
  document.getElementById("signoAbajo").innerHTML = signo;
  if (signo === "♥" || signo === "♦") {
    signoArriba.style.color = "red";
    signoAbajo.style.color = "red";
  }
  console.log("Hello Rigo from the console!");
};
