var pics = [
  "img/landscape_1.jpg",
  "img/landscape_2.jpg",
  "img/landscape_3.jpg",
  "img/landscape_4.jpg",
  "img/landscape_5.jpg",
  "img/landscape_6.jpg",
  "img/landscape_7.jpg",
  "img/landscape_8.jpg",
  "img/landscape_9.jpg",
  "img/landscape_10.jpg",
  "img/landscape_11.jpg",
  "img/landscape_12.jpg",
  "img/landscape_13.jpg",
  "img/landscape_14.jpg",
  "img/landscape_15.jpg",
  "img/landscape_16.jpg",
  "img/landscape_17.jpg",
  "img/landscape_18.jpg",
  "img/landscape_19.jpg",
  "img/landscape_20.jpg",
];

var quotes = [
  "Take a deep breath.~Inhale peace, exhale happiness.",
  "Yesterday I was clever,~so I wanted to change the world.~Today I am wise, so I am changing myself.",
  "Raise your words, not voice.~It is rain that grows flowers, not thunder.",
  "It’s a good day to have a good day.",
  "Feed your mind with positive thoughts,~and attract great things in your life.",
  "Be such a good soul that people crave your vibes.",
  "You can’t stop the waves,~but you can learn to surf.",
  "Just enjoy where you are now.",
  "Look good, feel good, do good.",
  "Every day is a day you've never seen before.",
  "Train your mind to see the good in every situation.",
  "Make someone smile everyday,~but never forget you're someone too.",
  "Focus on the good.",
  "Give yourself time.",
  "I have the power to create change.",
  "There are so many beautiful reasons to be happy.",
  "Be the energy you want to attract.",
  "Good things take time.",
  "Self-love isn't selfish it's important.",
  "Take a moment to appreciate how far you've come.",
];

var background = document.getElementById("backgroundImage");
var quoteToChange = document.getElementById("quoteToChange");

var counter = 0;

function updateContent() {
  quoteAppear();
  replaceContent();
  if (counter === pics.length) {
    counter = 0;
  }
  background.style.backgroundImage = `url('${pics[counter]}')`;
  quoteToChange.innerHTML = quotes[counter].split("~").join("<br>");
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

replaceContent();
