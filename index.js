var randomNumber1= Math.floor(Math.random()*6) +1; //random no. between 1 to 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; // random image of dice from dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage;
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource)

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomImageSource2 ="images/dice" + randomNumber2 +".png";
var images2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

//if player 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🎉🎉player 1 wins";

}
else if(randomNumber2> randomNumber1){
  document.querySelector("h1").innerHTML = "🎉🎉player 2 wins";
}
else{
  document.querySelector("h1").innerHTML = "draw!";
}
