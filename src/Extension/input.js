function getValue() {
  var link = document.getElementById("link");
  link.addEventListener("click", function () {
    var input = document.getElementById("input").value;
    document.getElementById("bloc").innerHTML = input;
  });
}
getValue();
