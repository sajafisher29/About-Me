'use strict';

var playGame = confirm('Do you want to play a game?');
alert('Can you guess the correct answers about me?');

if (playGame) {
  var kids = prompt('Do I have kids?');
  var kidsUpper = kids.toUpperCase();
  console.log(kidsUpper, typeof kidsUpper);

  if (kidsUpper === 'N') {
    alert('You are correct!');
  } else {
    alert('Nope!');
  }

  var run = prompt('Do I like trail running?');
  var runUpper = run.toUpperCase();
  console.log(runUpper, typeof runUpper);

  if (runUpper === 'YES') {
    alert('You are correct! My knees don\'t agree though.');
  } else {
    alert('Nice guess but not true');
  }

  var hair = prompt('Do I die my hair?');
  var hairUpper = hair.toUpperCase();
  console.log(hairUpper, typeof hairUpper);

  if (hairUpper === 'NO') {
    alert('You are correct!');
  } else {
    alert('Never!');
  }
 
  var nerd = prompt('Am I a nerd?');
  var nerdUpper = nerd.toUpperCase();
  console.log(nerdUpper, typeof nerdUpper);

  if (nerdUpper === 'YES') {
    alert('A nerd and a geek!');
  } else {
    alert('Guess I have some work to do...');
  }

  var legos = prompt('Do I have too many legos?');
  var legosUpper = legos.toUpperCase();
  console.log(legosUpper, typeof legosUpper);

  if (legosUpper === 'YES') {
    alert('Can never have too many!');
  } else {
    alert('Too true.');
  }
}

console.log(playGame);
