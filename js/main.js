function weapon() {
  let number = Math.random();
  let botWeapon;
  if (number < .2) {
    botWeapon = 'scissors';
  } else if (number < .4) {
    botWeapon = 'paper';
  } else if (number < .6) {
    botWeapon = 'lizard';
  } else if (number < .8) {
    botWeapon = 'spock';
  } else if (number < .1) {
    botWeapon = 'rock'
  }
  return botWeapon
  console.log(botWeapon)
}


function checkWinner(botWeapon, playerWeapon) {
  if (botWeapon == playerWeapon) {
    document.getElementById('result').innerHTML = 'There was tie'
  } else if (
    (botWeapon == "scissors" && playerWeapon == "paper") ||
    (botWeapon == "paper" && playerWeapon == "rock") ||
    (botWeapon == "rock" && playerWeapon == "lizard") ||
    (botWeapon == "lizard" && playerWeapon == "spock") ||
    (botWeapon == "spock" && playerWeapon == "scissors") ||
    (botWeapon == "scissors" && playerWeapon == "lizard") ||
    (botWeapon == "lizard" && playerWeapon == "paper") ||
    (botWeapon == "paper" && playerWeapon == "spock") ||
    (botWeapon == "spock" && playerWeapon == "rock") ||
    (botWeapon == "rock" && playerWeapon == "scissors")
  ){
    document.getElementById('result').innerHTML = 'Sorry, you Lost.'
  }
  else{
    document.getElementById('result').innerHTML = 'Yay!You Won!'
  }
}


document.getElementById('rock').onclick = playerWeaponRock

function playerWeaponRock() {
  checkWinner(weapon(), 'rock')
  console.log(checkWinner())
}
document.getElementById('paper').onclick = playerWeaponPaper

function playerWeaponPaper() {
  checkWinner(weapon(), 'paper')
  console.log(checkWinner())
}
document.getElementById('scissors').onclick = playerWeaponScissors

function playerWeaponScissors() {
  checkWinner(weapon(), 'scissors')
  console.log(checkWinner())
}
document.getElementById('lizard').onclick = playerWeaponLizard

function playerWeaponLizard() {
  checkWinner(weapon(), 'lizard')
  console.log(checkWinner())
}
document.getElementById('spock').onclick = playerWeaponSpock

function playerWeaponSpock() {
  checkWinner(weapon(), 'spock')
  console.log(checkWinner())
}
