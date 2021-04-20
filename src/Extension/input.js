function getValue() {
  // Sélectionner l'élément input et récupérer sa valeur
  var input = document.getElementById("in").value;
  // Afficher la valeur
  alert(input);
}

document.addEventListener("DOMContentLoaded", function () {
  var link = document.getElementById("link");
  // onClick's logic below:
  link.addEventListener("click", function () {
    getValue();
  });
});
