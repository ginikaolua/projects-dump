document.getElementById('p1').innerHTML = 'hello'
document.getElementById('p2').innerHTML = "I'm Ginika"


function addup(){
    let username = document.getElementById('uname').value
    document.getElementById('mytext').innerHTML = 'hello ' + username
}

function hyp(){
    let A = document.getElementById('sideA').value
    let B = document.getElementById('sideB').value
    let c = Math.sqrt((Math.pow(A, 2) + Math.pow(B, 2)))
    document.getElementById('labelc').innerHTML = 'Side C: '+ c
}
let total = 0

function up(){
    total+=1
    let count = document.getElementById('counter')
    count.innerHTML = total 
}
function down(){
    total-=1
    let count = document.getElementById('counter')
    count.innerHTML = total
}

function reset(){
    total = 0
    let count = document.getElementById('counter')
    count.innerHTML = total
}

function sub(){
    if(document.getElementById('checkbox').checked){
        let subb = document.getElementById('subber')
        subb.innerHTML = 'SUBSCRIBED :)'
    } else{
        let subb = document.getElementById('subber')
        subb.innerHTML = 'sub for me now :('
    }
}
let grade = 95

switch (true) {
    case grade>= 90:
        console.log('great job')
        break;

    case grade>= 70:
        console.log('could be better')
        break;
    default:
        console.log('whyre you here')
        break;
}

/*let sym = prompt('symbol?')
let rows = prompt('rows?')
let column = prompt('columns?')
for (let i=1; i<= rows; i++) {
    for (let j = 1; j <= column; j++) {
        document.getElementById('rect').innerHTML += sym
    }
    document.getElementById('rect').innerHTML += '<br>'
}*/

function birth(){
    let username = 'ginika'
    happy(username)
}
function happy(username){
        console.log(`happy birthday ${username}`)
    
}
/*let width = prompt('width?')
let height = prompt('height?')
let area = getArea(width, height)
console.log(area)
function getArea(width, height){
    return width*height
}

let name = 'ginika'

name=='ginika'?console.log('hi'):console.log('bye')
let age = prompt('age?')

age>=18? console.log('adult much'):console.log('baby much')

how()==18?console.log('hi'):console.log('bye')

function how(){
    return prompt('age?')
}*/


let myNum = 1234905.867
myNum = myNum.toLocaleString('en-NG',{style:'currency', currency: 'NGN'})
console.log(myNum)

let yourNum = 567890
yourNum = yourNum.toLocaleString(undefined,{style:'unit', unit: 'celsius'})
console.log(yourNum)

let answer = Math.floor(Math.random()*10)
let guesses = 0
function guess(){
    let guess= document.getElementById('numbergame').value
    guesses+=1
    if(guess == answer){
        alert(`${answer} is correct. Took you ${guesses} guesses`)
    }else if(guess < answer){
        alert(`Too small`)
    }else{
        alert(`Too large  (thats what she said ;)...)`)
    }

}


function convert(){
    let valz = document.getElementById('numbergame').value
    let celsius = document.getElementById('celsius')
    let fahrenheit = document.getElementById('fahrenheit')
    let anss =  document.getElementById('anss')

    if(celsius.checked){
        valz = Number(valz)
        let result = (valz-32)*(5/9)
        anss.innerHTML = 'answer is: ' + result

    } else if (fahrenheit.checked){
        valz = Number(valz)
        let answer = (valz*(9/5))+32
        anss.innerHTML = 'answer is: ' + answer
    } else{
        anss.innerHTML = 'select a unit'
    }
}

let her = [2,4,6,5,8,9]
for(let i= her.length - 1; i>=0; i--){
    console.log(her[i])
}

for (let hers of her) {
    console.log(hers)
}

let fruits = ['banana', 'apple', 'orange', 'mango']
fruits = fruits.sort().reverse()

for (let fruit of fruits) {
    console.log(fruit)
}

/*let food =  ['banana', 'apple', 'orange', 'mango']
let veggies = ['carrots', 'potatoes', 'onions']
let  meat = ['fish', 'beef', 'chicken']
let groceryList = [food, veggies, meat]
groceryList [0][1] = 'pineapple'
for(item of groceryList){
     for (stuff of item){
         console.log(stuff)
        }
    }

console.log(groceryList[1][2])*/

let numz = [1,2,13,95,10,7,89,12,0,4,3,4,5,6,7,8,9]
let maximum = Math.max(...numz)
console.log(maximum)

let class1 = ['spngy', 'patty', 'squidy']
let class2 = ['krabby', 'sandy', 'planny']
class1.push(...class2)
console.log(class1) 

class1.forEach(element => {
    //console.log(element[0].toUpperCase()+ element.substring(1))
    console.log(...element[0].toLocaleUpperCase() + element.substring(1))
});

function square (element){
    return Math.pow(element, 2)
}

let squared = numz.map(square)
squared.forEach(element => {
    console.log(element)
});

let jezz = numz.filter(checker)
function checker(meh){
    return meh >= 5
}
console.log(jezz)
jezz.forEach(function(element){
    console.log(element)
})

let all = jezz.reduce(checkout)
console.log(all)
function checkout (all, one){
    return all + one
}

function desdes (x,y){
    return y - x
}
function asas(x,y){
    return x - y
}
let popo = jezz.sort(asas)
console.log(popo)
let soso = jezz.sort(desdes)
console.log(soso)
soso.forEach(function(i){
    console.log(i)
})

const store = new Map([
    ['jeans', 40],
    ['socks', 10]
])      
store.set('hat', 70)
store.delete('socks')
console.log(store.has('frog'))
console.log(store.size)
console.log(store)
store.forEach(function(value, key){
    console.log(key, value)
})
let shoppingcart = 0
shoppingcart  += store.get('jeans')
shoppingcart+= store.get('hat')
console.log(shoppingcart)


class Player{
    score = 0;
    pause(){
        console.log('you paused the game')
    }
    exit(){
        console.log('you existed')
    }
}
const player1 = new Player()
player1.score ++
player1.pause()
console.log(player1.score)

class Student {
    constructor(name, age, gpa){
        this.name = name
        this.age = age
        this.gpa = gpa
    }
    study(){
        console.log(`${this.name} is studying`)
    }
}

let student1 = new Student ('ginika', 22, 3.5)
console.log(student1)
student1.study()

class Student2 extends Student{
     constructor(name, age, gpa, language, role){
         super(name, age, gpa)
         this.language = language
         this.role = role
    }
}

let stud2 = new Student2('ch', 6, 6, 'javascript', 'student' )
console.log(stud2)
stud2.study()

class Car{
    constructor(power){
        this._gas = 100
        this._power = power
    }
    get gas(){
        return `${this._gas} (${this._gas /50 *100})`
    }
    get power(){
        return this._power
    }
    set gas(value){
        if(value > 50){
            value = 50
        }else if(value < 0){
            value = 0
        }
        this._gas = value
    }
}
let car = new Car(400)
console.log(car.gas)

/*setTimeout(buy, 5000)
setTimeout(sell, 6000)
function buy (){
    alert(`please purchase this `)
}
function sell (){
    alert(`and sell this to me`)
}*/
/*{
    let count = 0
    let max = prompt('count up to what number?')
    max = Number(max)

    let hehe = setInterval(countup, 1000)

    function countup(){
        count +=1
        console.log(count)
        if(count >= max){
            clearInterval(hehe)
        }
    }
}*/
let date = new Date()
console.log(date.toLocaleString())

let lab = document.getElementById('lab')
update()
setInterval(update, 1000)
function update(){
    let date = new Date()
    lab.innerHTML = format(date)
    function format(date){
        let hours = date.getHours()
        let minute = date.getMinutes()
        let secs = date.getSeconds()
        let amOrPm = hours>= 12? 'Pm': 'Am'
        hours = (hours%12) || 12
        hours = formatzero(hours)
        minute = formatzero(minute)
        secs = formatzero(secs)

        return `${hours}: ${minute}: ${secs} ${amOrPm}`
    }
    function formatzero(time){
        time = time.toString()
        return time.length < 2? '0'+ time : time 
    }
}


let prom = new Promise((resolve,  reject)=>{
    let fileLoaded = false
    if(fileLoaded){
        resolve('file loaded')
    }
    else{
        reject('file not loaded')
    }
})

prom.then(result =>  console.log(result))
.catch(reject => console.log(reject))



    
const promise = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000)
})
promise.then((resolve)=>{
    console.log('thanks')
})

async function loader(){
    let filer = false
    if(filer){
        return 'good'
    }
    else{
        throw 'bad'
    }
}
loader().then(function(value){
    console.log(value)
}).catch(function(error){
    console.log(error)
})


let satisfy = new Promise((resolve, reject)=>{
    let server = 18
    if(server >= 18){
        resolve('you are old enough')
    }else{
        reject('you are too young')
    }
})
satisfy.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})


async function ageref(){
    const promiser = new Promise((resolve, reject)=>{
        let age = 40
        if(age>=50){
            resolve('too old')
        }else{
            reject ('smallie')
        }
    })
    try {
        document.getElementById('heh').innerHTML = await promiser
    } catch (error) {
        document.getElementById('heh').innerHTML = error
    }
}
ageref()

async function display(){
    try {
        document.getElementById('myh1').innerHTML = await loader()
    } catch (error) {
        document.getElementById('myh1').innerHTML = error
    }

}
display()

import { PI, getcircum, getArea } from "./bromo.js"

console.log (PI)

console.log(getcircum(3))
let ew = document.getElementById('hey')
ew.style.backgroundColor = 'pink'
ew.style.color = 'white'
let fruit = document.getElementsByName('fruits')
fruit.forEach(item=>{
    if(item.checked){
        console.log(item.value)
    }
})

let havi = document.body
let child = havi.firstElementChild
child.style.backgroundColor = "lightgreen"

let hmm = document.querySelector('#vegetables')
hmm.parentElement.style.backgroundColor = 'lightblue'
hmm.nextElementSibling.style.color = 'gray'
hmm.previousElementSibling.style.backgroundColor = 'gray'
hmm.firstElementChild.style.color  = 'white'
let lisi = document.createElement('li')
lisi.textContent = 'ugwu'
hmm.insertBefore(lisi, hmm.getElementsByTagName('li')[1])


let sibling = document.querySelector('#fruiting')
let pikin = Array.from(sibling.children)
pikin.forEach(ident =>{
    ident.style.color = 'white'
})

let innerdiv = document.getElementById('innerdiv')
let outerdiv = document.getElementById('outerdiv')
innerdiv.addEventListener('mouseover', changered)
innerdiv.addEventListener('mouseout', changegreen)

innerdiv.addEventListener('click', changeblue)
outerdiv.addEventListener('click', changeblue)

function changered(){
    innerdiv.style.backgroundColor = 'red'
}

function changegreen(){
    innerdiv.style.backgroundColor = 'lightgreen'
}

function changeblue(){
    this.style.backgroundColor = 'lightblue'
}

let mybutton = document.querySelector('#toggle')
let myimage = document.querySelector('#myimage')

mybutton.addEventListener('click', ()=>{
    if(myimage.style.display == 'none'){
        myimage.style.display = 'block'
    }else{
        myimage.style.display = 'none'
    }
})


const mydiv = document.getElementById('anotherdiv')
window.addEventListener('keydown', move)
let x = 0
let y = 0
function move(event){
    switch (event.key) {
        case 'ArrowDown':
            y+=20
            mydiv.style.top = y + 'px'
            break;
        case 'ArrowUp':
            y-=20
            mydiv.style.top = y + 'px'
            break;
        case 'ArrowRight':
            y+=20
            mydiv.style.left = y + 'px'
            break;
        case 'ArrowLeft':
            y-=20
            mydiv.style.left = y + 'px'
            break;
        default:
            break;
    }
}

const beginbut = document.getElementById('beginbut')
const myanimation = document.getElementById('begindiv')

beginbut.addEventListener('click', animate)
function animate(){
    let timerid = null
    let degrees = 0
    let x=0
    let y = 0
    /*let scaleX = 1
    let scaleY = 1 */
    timerid=setInterval(frame, 5)
    function frame(){
        if(x>=300 || y>=300 ){
            clearInterval(timerid)
        }else{
            degrees+=3
            y+=1
            x+=1
            myanimation.style.top = y +'px'
            myanimation.style.left = x +'px'
            myanimation.style.transform = 'rotateZ('+degrees+'deg)'
        }


       /* if(scaleX >= 2 || scaleY >=2){
            clearInterval(timerid)
        }else{
            scaleX+=0.01
            scaleY+=0.01
            myanimation.style.transform = 'scale('+scaleX+','+scaleY+')'
        }*/


        /*if(scaleX<=0.1 || scaleY<= 0.1){
            clearInterval(timerid)
        }else{
            scaleX-=0.1
            scaleY-=0.1
            myanimation.style.transform = 'scale('+scaleX+','+scaleY+')'
        }*/
    }
}

let canvas = document.getElementById('mycanvas')
let context = canvas.getContext("2d")

//Drawing Lines
context.beginPath()
context.lineWidth = 10
context.strokeStyle = 'darkblue'
/*context.moveTo(0, 0)
context.lineTo(250,250)
context.lineTo(250,500)
context.moveTo(500, 0)
context.lineTo(250, 250)
context.stroke()*/



//Triangle
/*
context.fillStyle = 'yellow'
context.beginPath()
context.moveTo(250, 0)
context.lineTo(0, 250)
context.lineTo(250, 250)
context.lineTo(500, 250)
context.lineTo(250, 0)
context.stroke()
context.fill()*/



//RECTANGLE
/*context.fillStyle = 'pink'
context.strokeRect(0, 0, 250, 250)
context.fillRect(0, 0, 250, 250)

context.fillStyle = 'gray'
context.strokeRect(0, 250, 250, 250)
context.fillRect(0, 250, 250, 250)

context.fillStyle = 'black'
context.strokeRect(250, 0, 250, 250)
context.fillRect(250, 0, 250, 250)

context.fillStyle = 'purple'
context.strokeRect(250, 250, 250, 250)
context.fillRect(250, 250, 250, 250)*/



//CIRCLE
//x,y,r startingAngle, endingAngle, counterclockwise
 /*context.fillStyle = 'lightblue'
context.beginPath()
context.arc(250, 250, 200, 0, 2* Math.PI)

context.stroke()
context.fill()*/


//DRAW TEXT
context.font = '50px MV Boli'
context.fillStyle = 'pink'
context.textAlign = 'center'
context.fillText('YOU WIN!', canvas.width/2 , canvas.height/2)

console.dir(window)
console.log(window.innerHeight)
console.log(window.innerWidth)
console.log(window.scrollX)
console.log(window.scrollY)
//swindow.location.href= 'https://google.com'
console.log(window.location.hostname)
console.log(window.location.pathname)

const butt = document.getElementById('butt')
butt.addEventListener('click', ()=> window.open('http://127.0.0.1:5500/memorygame.html'))
//butt.addEventListener('click', ()=> window.print())


/*let age = prompt('enter age: ')
if(age <= 18){
    alert('you have to be 18+')
    window.close()
}else{
    alert('welcome')
    window.open('https://google.com')
}*/
console.log(navigator.cookieEnabled)

document.cookie = 'firstName = Ginikachi; expires= Sun, 1 January 2000 12:00:00; path=/'
document.cookie = 'lastName = Olua; expires= Sun, 1 January 2000 12:00:00; path=/'
console.log(document.cookie)


const firstText = document.querySelector('#firstText')
const lastText = document.querySelector('#lastText')
const submitbtn = document.querySelector('#submitbtn')
const cookiebtn = document.querySelector('#cookiebtn')

submitbtn.addEventListener('click', ()=>{
    setcookie('firstname', firstText.value, 20)
    setcookie('lastname', lastText.value, 20)
})
cookiebtn.addEventListener('click', ()=>{
    firstText.value = getcookie('firstname')
    lastText.value = getcookie('lastname')
})
function setcookie(name, value, daysToLive){
    const date = new Date()
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
    let expires = 'expires=' + date.toUTCString
    document.cookie = `${name}=${value};${expires}; path=/ ` 
}
    setcookie('email', 'giniks@gmail.com', 365)
    


    
console.log(getcookie('email'))
    
function deletecooks (name){
    setcookie(name, null, null)
}
console.log(document.cookie)

function getcookie(){
    const cdecode = decodeURIComponent(document.cookie)
    let carray = cdecode.split(';')
    let result = null
    console.log(carray)
    carray.forEach((element)=>{
        if(element.indexOf(name) == 0){
            
            result = element.substring(name.let + 1)
        }
    })
    return result
}


