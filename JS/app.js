'use strict';

// Global variable
var score = 0;

//Ask for the user name

var userNameRequest = prompt('Hello! What is your name?');

var userName = userNameRequest;

console.log('What is your name?', userName);

alert('Hi ' + userName + '! Thanks for visiting my page!');

//Ask where they are from

var locationRequest = prompt('Where are you from?');

console.log(locationRequest);

var userLocation = locationRequest;

alert('I hope you love where you live in ' + userLocation + '!');

//Alert widows pop up to start game

var playGame = confirm('Do you want to play a game?');


//Function built for yes or no questions

function yNQuestions() {
  var yNQuestionsArray = [q1(), q2(), q3(), q4(), q5()];
  for (var i = 0; yNQuestionsArray.length; i++) {
    yNQuestionsArray[i];
  }
}

//First question asking if I have kids

function q1() {
  var kids = prompt('Do I have kids?');
  var kidsUpper = kids.toUpperCase();
  var strKids = kidsUpper;
  var resKids = strKids.charAt(0);

  console.log(resKids, typeof resKids);

  if (resKids === 'N') {
    alert(userName +', you are correct!');
    score++;
  } else {
    alert('Nope! Although sometimes it feels like I do.');
  }
}

//Second question asking if I like trail running

function q2() {
  var run = prompt('Do I like trail running?');
  var runUpper = run.toUpperCase();
  var strRun = runUpper;
  var resRun = strRun.charAt(0);

  console.log(resRun, typeof resRun);

  if (resRun === 'Y') {
    alert('You are correct! My knees don\'t agree though.');
    score++;
  } else {
    alert('Nice guess but not true.');
  }
}

//Third question asking if I die my hair

function q3() {
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
}
//Fourth question asking if I am a nerd

function q4() {
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
}

//Fifth question asking if I have too many legos

function q5() {
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
}

//Sixth question asking for leg press weight with four quesses allowed

function q6() {
  var legsCount = 0;

  while (legsCount < 4) {
    var legs = parseInt(prompt('Alright ' + userName + ', this is a number question. What is my max rep weigh in pounds on the 45 degree leg press?'));
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
  console.log(legs, typeof legs);
}

//Question 7 asking user to guess family pet names

function q7() {
  var petNames = ['Bella', 'Odin', 'Tate', 'Bailey', 'Caly', 'Kimber', 'Milo'];
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
  console.log(pets, typeof pets);
}

if (playGame) {
  alert('Can you guess the correct answers about me?');
  //Trigger question functions
  yNQuestions();
  q6();
  q7();
}

//Game score
var questionsCorrect = 'Congratulations ' + userName + '. You got ' + score + ' answers correct! Thanks for playing and I hope you had fun!';

alert(questionsCorrect);
