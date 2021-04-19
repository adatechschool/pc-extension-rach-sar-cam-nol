var pics = [
  "img/landscape_2.jpg",
  "img/landscape_3.jpg",
  "img/landscape_4.jpg",
  "img/landscape_5.jpg",
  "img/landscape_6.jpg",
  "img/landscape_7.jpg",
  "img/landscape_8.jpg",
];

var quotes = [
  "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.",
  "Raise your words, not voice. It is rain that grows flowers, not thunder.",
  "It’s a good day to have a good day.",
  "Feed your mind with positive thoughts, and attract great things in your life.",
  "Be such a good soul that people crave your vibes.",
  "You can’t stop the waves, but you can learn to surf.",
  "Just enjoy where you are now.",
];

var background = document.getElementById("backgroundImage");
var quoteToChange = document.getElementById("quoteToChange");

var counter = 0;

function updateContent(){
  if (counter === pics.length) {
      counter = 0;
  }
  background.style.backgroundImage = `url('${pics[counter]}')`;
  quoteToChange.innerHTML = quotes[counter];
  counter += 1;
  replaceContent();
  quoteAppear();
}

function replaceContent() {
  setInterval(updateContent, 5000);
}

function quoteAppear() {
  var quote = document.getElementById("quoteToChange");
  quoteToChange.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1500 });
}

updateContent(); 
