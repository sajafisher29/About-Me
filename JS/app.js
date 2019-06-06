'use strict';

var playGame = confirm('Do you want to play a game?');
alert('Can you guess the correct answers about me?');

if (playGame) {
  var kids = prompt('Do I have kids?');
  var kidsUpper = kids.toUpperCase();
  var strKids = kidsUpper;
  var resKids = strKids.charAt(0);

  console.log(resKids, typeof resKids);

  if (resKids === 'N') {
    alert('You are correct!');
  } else {
    alert('Nope! Although sometimes it feels like I do.');
  }

  var run = prompt('Do I like trail running?');
  var runUpper = run.toUpperCase();
  var strRun = runUpper;
  var resRun = strRun.charAt(0);
  console.log(resRun, typeof resRun);

  if (resRun === 'Y') {
    alert('You are correct! My knees don\'t agree though.');
  } else {
    alert('Nice guess but not true');
  }

  var hair = prompt('Do I die my hair?');
  var hairUpper = hair.toUpperCase();
  var strHair = hairUpper;
  var resHair = strHair.charAt(0);
  console.log(resHair, typeof resHair);

  if (resHair === 'N') {
    alert('You are correct!');
  } else {
    alert('Never!');
  }

  var nerd = prompt('Am I a nerd?');
  var nerdUpper = nerd.toUpperCase();
  var strNerd = nerdUpper;
  var resNerd = strNerd.charAt(0);
  console.log(resNerd, typeof resNerd);

  if (resNerd === 'Y') {
    alert('A nerd and a geek!');
  } else {
    alert('Guess I have some work to do...');
  }

  var legos = prompt('Do I have too many legos?');
  var legosUpper = legos.toUpperCase();
  var strLegos = legosUpper;
  var resLegos = strLegos.charAt(0);
  console.log(resLegos, typeof resLegos);

  if (resLegos === 'Y') {
    alert('You can never have too many!');
  } else {
    alert('Too true.');
  }

  alert('What is my max rep weigh in pounds on the 45 degree leg press? Please answer with a number.');
  console.log(legs, typeof legs);

  function legs(x) {
    if (isNaN(legs)) {
      alert('Please try with a number!');
    } else if (legs < 710) {
    alert('Too light!');
    } else if (legs > 710) {
      alert('Too heavy!');
    } else (legs === 710) {
      alert('That\'s right! Someday I hope to reach 1,000 pounds!');
  }

  var pets = prompt('What are the names of the family pets?');
  var petsUpper = pets.toUpperCase();
  var strPets = petsUpper;
  var resPets = strPets.charAt(0);
  console.log(resPets, typeof resPets);

  if (resPets === 'Y') {
    alert('You can never have too many!');
  } else {
    alert('Too true.');
  }
}
//check array.prototype.includes() to get a true value if the string is in the array
console.log(playGame);