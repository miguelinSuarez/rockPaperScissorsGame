//keep track of wins, losses, and ties
let humans = 0; 
let skynet = 0;
let tie = 0;
let round = 0; //keeps track of how many rounds have been played

function computerPlay() {
    let hand = ['ROCK', 'PAPER', 'SCISSORS'];
    let randomHand = Math.floor(Math.random() * hand.length); //randomizes Skynet's choice
    return hand[randomHand];
  }

  function playRound(playerSelection, computerSelection) {
    const select = playerSelection.toUpperCase(); //makes player's input insensitive
    const regex = /sor/gi; //in case player misspells "scissors"
  if (select === 'ROCK') {
    rock();
  }
  else if (select === 'PAPER') {
    paper();
  }
else if (select === 'SCISSORS' || (select.match(regex))) {
  scissors();
}
else {
  alert `You don't want to play?`; //if there is no input or player answers outside the parameters of the game
}
  };


function rock() {
  computerSelection = computerPlay();
  round++;
  switch (true) {
      case computerSelection === 'ROCK':
        alert(`AI plays ROCK...It's a tie!  You think alike!`);
        console.log(`Round ${round}: It's a tie.`);
        tie++;
        break;
      case computerSelection === 'PAPER':
        alert(`AI plays PAPER...Humans lose this time!  Skynet wraps you!`);
        console.log(`Round ${round}: Humans lose.`);
        skynet++;
        break;
      case computerSelection === 'SCISSORS':
        alert(`AI plays SCISSORS...Humans WIN!  You broke Skynet!`);
        console.log(`Round ${round}: Humans win.`);
        humans++;
        break;
      default:
        alert(`Thanks for playing.`);
    }  
}

function paper() {
  computerSelection = computerPlay();
  round++;
  switch (true) {
      case computerSelection === 'ROCK':
        alert `AI plays ROCK...Humans WIN!  You wrapped Skynet!`;
        console.log(`Round ${round}: Humans win.`);
        humans++;
        break;
      case computerSelection === 'PAPER':
        alert `AI plays PAPER...It's a tie!  Paper vs Paper!`;
        console.log(`Round ${round}: It's a tie.`);
        tie++;
        break;
      case computerSelection === 'SCISSORS':
        alert `AI plays SCISSORS...Humans lose this time!  Skynet shreds your paper!`;
        console.log(`Round ${round}: Humans lose.`);
        skynet++;
        break;
      default:
        alert `Thanks for playing.`;
    }  
}

function scissors() {
  computerSelection = computerPlay();
  round++;
  switch (true) {
      case computerSelection === 'ROCK':
        alert `AI plays ROCK...Humans lose this time!  Skynet breaks your scissors!`;
        console.log(`Round ${round}: Humans lose.`);
        skynet++;
        break;
      case computerSelection === 'PAPER':
        alert `AI plays PAPER...Humans WIN!  Cut that Skynet!`;
        console.log(`Round ${round}: Humans win.`);
        humans++;
        break;
      case computerSelection === 'SCISSORS':
        alert `AI plays SCISSORS...It's a tie!  Duel of Two Scissors!`;
        console.log(`Round ${round}: It's a tie.`);
        tie++;
        break;
      default:
        alert `Thanks for playing.`;
    }  
}

function game () {
let round = 1;
while (round < 6) {
  playRound(prompt('Best of 5 rounds against Skynet.  Choose your weapon:  rock, paper, or scissor.'));
round++;
}
if (humans > skynet) {
  console.log(`Humans win ${humans} to ${skynet}.`);
}
else if (skynet > humans) {
 console.log(`Skynet wins ${skynet} to ${humans}.`);
}
else if (humans === skynet) {
  console.log(`It's a tie.  Humans ${humans} vs Skynet ${skynet}. The battle rages on.`)
};
};



// let play = prompt();
// playRound(play);
game();
