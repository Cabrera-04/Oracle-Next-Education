//Variables
let maxNumberPosible=10;
let secretNumber = Math.floor(Math.random()*maxNumberPosible)+1;
var attemps = 1;
let userNumber;
let singular = "attemp";
while (userNumber !== secretNumber) {
  userNumber = parseInt(prompt(`Type a number between 1 and ${maxNumberPosible}:`)); //Función prompt

  console.log(typeof(userNumber));
  /*
    This code performs a comparative 
    */

  if (userNumber == secretNumber) {
    alert(
      `You guessed it!, the number is ${userNumber}. U got it in ${attemps} ${attemps == 1?"attemp":"attemps"}`
    );
  } else {
    if (userNumber > secretNumber) {
      alert("The secret number is lower");
    } else {
      alert("The secret number is higher");
    }
    attemps++;
    //singular = "attempts";
    if (attemps > 3) {
      alert(`U Reach the limit of ${attemps} attemps`);
      break;
    }
  }
}
