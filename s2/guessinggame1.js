var number = Math.round( Math.random() * 100 + 1);
var guess = "";
while (guess != number) {
  guess = prompt("Guess a number between 1 and 100: ");
  if ( guess > number )
      alert("Too high.");
  else if ( guess < number )
      alert("Too low.");
  else
      alert("Correct! You win!");
}
var name = prompt("What is your name?");
for (var n = 1; n <= 500; n++){
  document.write(name + " wins! ");
}
