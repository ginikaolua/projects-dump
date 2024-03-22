const cardArray = [
    {
        name: 'fries',
        img: 'images/fries1.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger1.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog1.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake1.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza1.png'
    },
    {
        name: 'fries',
        img: 'images/fries1.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger1.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog1.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake1.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza1.png'
    }

]
cardArray.sort(()=>0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []
function createBoard (){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank1.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        
    }
}
createBoard()
function checkMatch(){
    const cards = document.querySelectorAll('img')
    let optionOneId = cardsChosenIds[0]
    let optionTwoId = cardsChosenIds[1]
if(optionOneId == optionTwoId){
    cards[optionOneId].setAttribute('src', 'images/blank1.png')
    cards[optionTwoId].setAttribute('src', 'images/blank1.png')
    alert('You clicked the same card')
}
    if(cardsChosen[0] === cardsChosen[1]){
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white1.png')
        cards[optionTwoId].setAttribute('src', 'images/white1.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank1.png')
        cards[optionTwoId].setAttribute('src', 'images/blank1.png')
        alert('try again')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent ='Congratulations! You found them all :)'
    }

}
function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen, cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }

}