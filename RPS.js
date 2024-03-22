const computerChoiceDisplay = document.getElementById('comp-choice')
const userChoiceDisplay = document.getElementById('your-choice')
const resultDissplay = document.getElementById('result')
const  possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice= e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    let randomnum = Math.floor(Math.random()*3 + 1)
    if(randomnum == 1){
        computerChoice = 'rock'
    } else if(randomnum == 2){
        computerChoice = 'scissors'
    }
    else{
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getResult (){
    if (computerChoice === userChoice){
        result = 'Its a Draw'
    } if (computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You Win!'
    } if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You Lose!'
    }if (computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You Lose!'
    }if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You Win!'
    }if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You Win!'
    }if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You Lose!'
    }
    resultDissplay.innerHTML = result
}