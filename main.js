// Get the buttons from the HTML
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let ten = document.getElementById("ten");
let eleven = document.getElementById("eleven");
let twelve = document.getElementById("twelve");
let thirteen = document.getElementById("thirteen");
let fourteen = document.getElementById("fourteen");

function enableButtons() {
  zero.disabled = false;
  one.disabled = false;
  two.disabled = false;
  three.disabled = false;
  four.disabled = false;
  five.disabled = false;
  six.disabled = false;
  seven.disabled = false;
  eight.disabled = false;
  nine.disabled = false;
  ten.disabled = false;
  eleven.disabled = false;
  twelve.disabled = false;
  thirteen.disabled = false;
  fourteen.disabled = false;
}

enableButtons();

// --ACCIONES DE CLICK EN LA BOTONERA DEL JUEGO
function clickCards(boton) {
  position = parseInt(boton.getAttribute("pos"));

  if (position == 0) {
    zero.src = "img/black/blackAgus.jpg";
  } else if (position == 1) {
    one.src = "img/black/blackAldi.jpg";
  } else if (position == 2) {
    two.src = "/QUIEN-ES-QUIEN/img/black/blackBri.jpg";
  } else if (position == 3) {
    three.src = "img/black/blackCele.jpg";
  } else if (position == 4) {
    four.src = "img/black/blackCoppi.jpg";
  } else if (position == 5) {
    five.src = "img/black/blackCroque.jpg";
  } else if (position == 6) {
    six.src = "img/black/blackEmi.jpg";
  } else if (position == 7) {
    seven.src = "img/black/blackGuada.jpg";
  } else if (position == 8) {
    eight.src = "img/black/blackLuchi.jpg";
  } else if (position == 9) {
    nine.src = "img/black/blackLuna.jpg";
  } else if (position == 10) {
    ten.src = "img/black/blackMale.jpg";
  } else if (position == 11) {
    eleven.src = "img/black/blackMica.jpg";
  } else if (position == 12) {
    twelve.src = "img/black/blackMonti.jpg";
  } else if (position == 13) {
    thirteen.src = "img/black/blackNati.jpg";
  } else if (position == 14) {
    fourteen.src = "img/black/blackRosa.jpg";
  }
}
