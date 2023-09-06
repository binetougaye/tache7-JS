let a = prompt("Veuillez entrer un nombre");
let b = prompt("Veuillez entrer un nombre");
let button = document
  .querySelector("#btn")
  .addEventListener("click", function () {
    alert(a * b);
  });
