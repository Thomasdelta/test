var slideIndex = 1;
showDivs(slideIndex);
var w = window.innerWidth; 


function myFunction() {
  alert ("Hello World!");
}

function tom(){
var c = document.getElementById("mycanvas1");
var ctx = c.getContext("2d");
//document.getElementById("")
c.style.width = "100%";
ctx.globalAlpha =0.7;
ctx.fillStyle="blue";
ctx.fillRect(0, 0, 1200, 100);
var img = document.getElementById("enemy");
ctx.drawImage(img,0,0,100,100);	
ctx.fillStyle='white';
ctx.font = "50px Arial";
ctx.fillText(w,120,70);
//ctx.fillText("TOM'S HTML ",120,70);
tom2();
}

function tom2(){
var c = document.getElementById("mycanvas2");
var ctx = c.getContext("2d");
c.style.width = "100%";

ctx.fillStyle="black";
ctx.fillRect(0, 0, 1300, 200);
ctx.fillStyle='white';
ctx.font = "50px Arial";
ctx.fillText("Phone number: 043 990 2918 ",120,70);}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function openNav() {
  document.getElementById("myNav").style.width = "50%";
  
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}