const rpsbutton = document.querySelectorAll('.rpsbtn')
let playerscore = document.getElementById('playerscore')
let hands = document.getElementById('hands')
const resetbtn = document.getElementById('resetbtn')
const resultDiv = document.getElementById('result')

const totalScore = {playerScore: 0, computerScore: 0}

const userChoice = ()=>{
    rpsbutton.forEach(button=>{
        button.onclick=()=> onClickRPS(button.value)
    })
    resetbtn.onclick=()=> endgame(totalScore)
}


const onClickRPS =(playerChoice)=>{
    const com = compchoice()
    const score = getResult(playerChoice, com)
    totalScore.playerScore+= score
    showResult(score, playerChoice,com)
}


const compchoice = ()=>{
    const choices = ['Rock', 'Paper', 'Scissors']
    const rand = Math.floor(Math.random()*choices.length)
    computerChoice = choices[rand]
    return computerChoice
}


const getResult =(playerChoice, computerChoice)=>{
    let score;
    if(playerChoice == computerChoice){
        score = 0
    }else if(playerChoice == 'Rock' && computerChoice =='Scissors'){
        score = 1
    }else if(playerChoice == 'Scissors' && computerChoice =='Paper'){
        score = 1
    }else if(playerChoice == 'Paper' && computerChoice =='Rock'){
        score = 1
    }else{
        score = -1
    }
    return score
}

const showResult =(score, playerChoice, computerChoice)=>{

    if(score == -1){
        resultDiv.innerText = 'You lose!😓'
    }else if(score == 0){
        resultDiv.innerText = "It's a tie!😐"
    }else{
        resultDiv.innerText =  'You Win!😄'
    }
    hands.innerText = `🧑🏼${playerChoice} vs 🤖${computerChoice}`
    playerscore.innerText = ` Your Score: ${totalScore.playerScore}`
}
 

const endgame = (totalScore)=>{
    totalScore['playerScore'] = 0
    totalScore['computerScore'] = 0
    resultDiv.innerText = ''
    playerscore.innerText = ''
    hands.innerText = ''
    
}

userChoice()