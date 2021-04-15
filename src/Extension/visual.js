var pics = ['img/landscape_1.jpg', 'img/landscape_2.jpg', 'img/landscape_3.jpg', 'img/landscape_4.jpg', 'img/landscape_5.jpg'];
var background = document.getElementById("backgroundImage");

var counter = 1; 
document.addEventListener("click", function() {
    if (counter === 5){
        counter = 0;
    }
    background.style.backgroundImage = `url('${pics[counter]}')`;
    counter = counter +1;
    console.log(counter);
});