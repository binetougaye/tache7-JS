// Exercice 1
let a = prompt("Veuillez entrer un nombre");
let b = prompt("Veuillez entrer un nombre");
let button = document
  .querySelector("#btn")
  .addEventListener("click", function () {
    alert(a * b);
  });
// Exercice 2
let n = prompt("Saisir un nombre");
let mod = n / 4;

function moduLo() {
  alert("le modulo de ce nombre est : " + mod);
}
moduLo();
