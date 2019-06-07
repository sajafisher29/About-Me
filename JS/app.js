'use strict';
// Global variable
var score = 0;


//Alert widows pop up to start game

var playGame = confirm('Do you want to play a game?');

alert('Can you guess the correct answers about me?');

//First question

if (playGame) {
  var kids = prompt('Do I have kids?');
  var kidsUpper = kids.toUpperCase();
  var strKids = kidsUpper;
  var resKids = strKids.charAt(0);

  console.log(resKids, typeof resKids);

  if (resKids === 'N') {
    alert('You are correct!');
    score++;
  } else {
    alert('Nope! Although sometimes it feels like I do.');
  }

  //Second question

  var run = prompt('Do I like trail running?');
  var runUpper = run.toUpperCase();
  var strRun = runUpper;
  var resRun = strRun.charAt(0);

  console.log(resRun, typeof resRun);

  if (resRun === 'Y') {
    alert('You are correct! My knees don\'t agree though.');
    score++;
  } else {
    alert('Nice guess but not true');
  }

  //Third question

  var hair = prompt('Do I die my hair?');
  var hairUpper = hair.toUpperCase();
  var strHair = hairUpper;
  var resHair = strHair.charAt(0);

  console.log(resHair, typeof resHair);

  if (resHair === 'N') {
    alert('You are correct!');
    score++;
  } else {
    alert('Never!');
  }

  //Fourth question

  var nerd = prompt('Am I a nerd?');
  var nerdUpper = nerd.toUpperCase();
  var strNerd = nerdUpper;
  var resNerd = strNerd.charAt(0);

  console.log(resNerd, typeof resNerd);

  if (resNerd === 'Y') {
    alert('A nerd and a geek!');
    score++;
  } else {
    alert('Guess I have some work to do...');
  }

  //Fifth question

  var legos = prompt('Do I have too many legos?');
  var legosUpper = legos.toUpperCase();
  var strLegos = legosUpper;
  var resLegos = strLegos.charAt(0);

  console.log(resLegos, typeof resLegos);

  if (resLegos === 'Y') {
    alert('You can never have too many!');
    score++;
  } else {
    alert('Too true.');
  }

  //Sixth question

  var legsCount = 0;
  console.log(legs, typeof legs);

  while (legsCount < 4) {
    var legs = parseInt(prompt('What is my max rep weigh in pounds on the 45 degree leg press? Please answer with a number.'));
    if (legs === 710){
      alert('That\'s right! Someday I hope to reach 1,000 pounds!');
      score++;
      break;
    }
    else if (isNaN(legs)) {
      legsCount++;
      alert('Please answer with a number');
    }
    else if (legs < 710) {
      legsCount++;
      alert('Too light!');
    }
    else if (legs > 710) {
      legsCount++;
      alert('Too heavy!');
    }
  }

  //Question 7

  var petNames = ['Bella', 'Odin', 'Tater Tot', 'Bailey', 'Caly', 'Kimber', 'Milo'];
  var petCount = 0;

  var pets = prompt('What are the names of the family pets?').toLowerCase();

  while (petCount <4) {
    var petNamesLower = [];
    petCount++;
    for (var i = 0; i < petNames.length; i++) {
      petNamesLower.push(petNames[0].toLowerCase());
    }
    for (var j = 0; j < petNamesLower.length; j++) {
      if (pets === petNamesLower[j]) {
        alert('Yes, that is one of our furbabies!');
        score++;
        petCount = 4;
      } else {
        pets = prompt('Try again!').toLowerCase();
      }
      break;
    }
  }
  var questionsCorrect = 'You got ' + score + ' answers correct! Thanks for playing!';
  alert(questionsCorrect);
}
// functions 
// question1
function (question1) { if (playGame) {
  var kids = prompt('Do I have kids?');
  var kidsUpper = kids.toUpperCase();
  var strKids = kidsUpper;
  var resKids = strKids.charAt(0);

  console.log(resKids, typeof resKids);

  if (resKids === 'N') {
    alert('You are correct!');
    score++;
  } else {
    alert('Nope! Although sometimes it feels like I do.');
  }

}
