var nav = document.querySelector('nav');
var darkToggle = document.querySelector('.darkToggle');
var button = nav.querySelector('button');


darkToggle.addEventListener('click', () => { 
nav.classList.toggle('darkNav');
button.classList.toggle('darkButton');
})

function darkMode() {  
  var element = document.body;
  var navbar = document.navbar;
  var card = document.card;
  console.log(element.classList);
  element.classList.toggle("dark-mode");
  navbar.classList.toggle("navbar-dark");
  card.classList.toggle("data-mdb-theme");
}

function myFunctionDarkMode() {
  var element = document.body;
  var navbar = document.navbar;
  element.classList.toggle("dark-mode");
  navbar.classList.toggle("dark-mode");
}

/*function changeSizeByBtn(size) {
    var elements = document.getElementsByClassName("fontSizeClass");
    for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var origFontSize = Number(element.style.fontSize);
    origFontSize = origFontSize * size;
    console.log(element.style.fontSize);}
  }

  function changeSizeByBtn(size) {
    var allTextContent = document.body.textContent;
    /*var allTextContent = document.getElementsByClassName("fontSizeClass");
    for (var i = 0; i < allTextContent.length; i++) {
    var element = allTextContent[i];
    var origFontSize = Number(element.style.fontSize);
    origFontSize = origFontSize * size;
    console.log(element.style.fontSize);}
  }

  function changeFontSize(multiplier) {
    var div = document.getElementById("wholePage");
    var currentFont = div.style.fontSize.replace("px", "");
    div.style.fontSize = parseInt(currentFont) * parseInt(multiplier) + "px";
}

*/

var cont = document.getElementById("wholePage");
function changeSizeByBtn(multiplier) {
    // Set value of the parameter as fontSize
    cont.style.fontSize = cont.style.fontsize * Number(multiplier);
}

/*
function toggleDisplay(elem) {
  if (getComputedStyle(elem).display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}

function toggleDetail(e) {
  const title = e.currentTarget;
  const detail = title.nextElementSibling;
  toggleDisplay(detail);
  const chevron = title.querySelector('.chevron');
  chevron.classList.toggle('fa-chevron-down');
  chevron.classList.toggle('fa-chevron-up');
}

window.addEventListener('load', function(e) {
  const titles = document.querySelectorAll('.title');
  for (title of titles) {
    title.addEventListener('click', toggleDetail);
  }
  });


 /*let cont = document.getElementById("container");
function changeSizeByBtn(size) {
    // Set value of the parameter as fontSize
    cont.style.fontSize = size;
}*/

function changeSizeByBtn(size) {
  var elements = document.getElementsByClassName("fontSizeClass");
  for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.fontSize = size;
  console.log(element.style.fontSize);}
}