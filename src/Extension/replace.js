var picsMorning = [
  "img/landscape_1.jpg",
  "img/landscape_3.jpg",
  "img/landscape_4.jpg",
  "img/landscape_5.jpg",
  "img/landscape_9.jpg",
  "img/landscape_11.jpg",
  "img/landscape_12.jpg",
  "img/landscape_15.jpg",
  "img/landscape_18.jpg",
  "img/landscape_20.jpg",
];

var picsEvening = [
  "img/landscape_2.jpg",
  "img/landscape_6.jpg",
  "img/landscape_7.jpg",
  "img/landscape_8.jpg",
  "img/landscape_10.jpg",
  "img/landscape_13.jpg",
  "img/landscape_14.jpg",
  "img/landscape_16.jpg",
  "img/landscape_17.jpg",
  "img/landscape_19.jpg",
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
];

function updateQuote(hidden) {
  if (hidden === true) {
    quoteToChange.style.opacity = 0;
    console.log("hiddentrue");
  } else {
    quoteToChange.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1500 });
    console.log("hiddenfalse");
  }
}

var background = document.getElementById("backgroundImage");
var quoteToChange = document.getElementById("quoteToChange");
//var questionGrateful = document.getElementsByClassName("grateful");

let counterMorning = 0;
let counterEvening = 0;

function contentMorning() {
  if (counterMorning === picsMorning.length) {
    counterMorning = 0;
  }
  background.style.backgroundImage = `url('${picsMorning[counterMorning]}')`;
  quoteToChange.innerHTML = quotes[counterMorning].split("~").join("<br>");
  console.log("blablaMorning", counterMorning);
  counterMorning += 1;
}

function contentEvening() {
  if (counterEvening === picsEvening.length) {
    counterEvening = 0;
  }
  background.style.backgroundImage = `url('${picsEvening[counterEvening]}')`;
  //  grateful.innerHTML = questionGrateful;
  console.log("blablaEvening", counterEvening);
  counterEvening += 1;
}

function replaceContent() {
  var now = new Date();
  hours = now.getHours();
  minutes = now.getMinutes();
  seconds = now.getSeconds();

  if (seconds <= 30) {
    console.log("if");
    quoteToChange.style.display = "block";
    document.getElementById("grateful").style.display = "none";
    contentMorning();
    updateQuote(false);
  }
  if (seconds > 30) {
    console.log("else");
    contentEvening();

    updateQuote(true);
  }
}
setInterval(replaceContent, 10000);

replaceContent();
