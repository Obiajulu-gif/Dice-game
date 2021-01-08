
/*THIS IS THE FIRST PART OF THE DICE WE ARE ADDING FUNCTION TO */
// we are generating a random Number from 1-6 by mutiplying by 6
var randomNumber1 = Math.random() * 6;

 // the plus one is helping in making up the number to 6
var randomNumber1 =   Math.floor(randomNumber1) + 1;


//  the image here helps us in Concatenating dice with numbers generated
// so as to have a randomized number i.e dice + 1-6 + png
var randomDiceImage = "dice" + randomNumber1 + ".png";


// this lline of code helps us to go into the Source folder and
// select the image range from images/dice1.png -- images/dice6.png
var randomImageSource = "images/" + randomDiceImage;

// this line of code helps us in selecting the image element
// using javascript
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


/*THIS IS THE SECOND PART OF THE DICE */
 var randomNumber2 = Math.random() * 6;

 var randomNumber2 = Math.floor(randomNumber2) + 1;

 var randomDiceImage2 = "dice" + randomNumber2 + ".png";

 var randomImageSource2 = "images/" + randomDiceImage2;

 var image2 = document.querySelectorAll("img")[1];

 image2.setAttribute("src", randomImageSource2);



 /*THIS PART IS GOING TO CHANGE
  THE HEADER TO THE CORRESPONDING HIGHEST Number
  WHICH THEREFORE ADDS FUNCTIONALITY TO THE HTML*/
 if (randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML = "Player One wins🌟";
 }else if (randomNumber2 > randomNumber1) {
   document.querySelector("h1").innerHTML = "Player Two wins🌟";
 }else{
   document.querySelector("h1").innerHTML = "Draw ";
 }
