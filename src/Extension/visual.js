var pics = ['img/landscape_1.jpg', 'img/landscape_2.jpg', 'img/landscape_3.jpg', 'img/landscape_4.jpg', 'img/landscape_5.jpg',
            'img/landscape_6.jpg', 'img/landscape_7.jpg', 'img/landscape_8.jpg', 'img/landscape_9.jpg', 'img/landscape_10.jpg',
            'img/landscape_11.jpg', 'img/landscape_12.jpg', 'img/landscape_13.jpg', 'img/landscape_14.jpg', 'img/landscape_15.jpg',
            'img/landscape_16.jpg', 'img/landscape_17.jpg', 'img/landscape_18.jpg', 'img/landscape_19.jpg', 'img/landscape_20.jpg']
var background = document.getElementById("backgroundImage");

var counter = 1; 
document.addEventListener("click", function() {
    if (counter === 20){
        counter = 0;
    }
    background.style.backgroundImage = `url('${pics[counter]}')`;
    counter = counter +1;
    console.log(counter);
});