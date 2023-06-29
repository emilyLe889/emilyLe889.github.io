var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
  document.getElementById("demo").innerHTML += "Hovered <br>";
}

function mySecondFunction() {
  document.getElementById("demo").innerHTML += "Clicked <br>";
}

function myThirdFunction() {
  document.getElementById("demo").innerHTML += "Hovered Away<br>";
}

//

function buttonClick(){
  var input= document.getElementById("input");
  var input2= document.getElementById("input2");
  var input3= document.getElementById("input3");
  var input4= document.getElementById("input4");
  var input5= document.getElementById("input5");
 
  alert(input.value + " ran for president and appointed that all ducks become prime minister. The " + input2.value + " vice president questioned their plan and weird " +  input3.value + " habit. The vice presdient then looked over and was shocked to see a  " + input4.value + " 'OH MY! That's supposed to be in a " + input5.value +" ! ");
};
var input= document.getElementById("inputbtn");
var input= document.getElementById("inputbtn");
var input= document.getElementById("inputbtn");
var input= document.getElementById("inputbtn");
var input= document.getElementById("inputbtn");

inputbtn.addEventListener("click", buttonClick);