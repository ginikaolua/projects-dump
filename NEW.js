let sum = document.querySelectorAll('ul li')

/*for(let i =0; i<sum.length; i++){
    let list = sum[i]
    list.innerText = 'hecd'
}*/
sum.forEach(element => {
    let meh ='hey hey'
    element.innerHTML = meh
    console.log(element)

})



let click = document.getElementById('click')
let counter = 0
let zero = document.getElementById('zero')
let sub = document.querySelector('#sub')
let ulo = document.getElementById("ulo")

click.addEventListener('click',()=>{
    counter++
    zero.innerHTML = counter
    let  divi = document.createElement('li')
    divi.setAttribute('data-counter', counter)
    /*let bold = document.createElement('b')

    let textNode = document.createTextNode('heyyy how are you? ' )
    bold.appendChild(textNode)

    let textnode = document.createTextNode(counter)
    divi.appendChild(bold)
    divi.appendChild(textnode)*/

    if(counter%2 === 0){
        divi.setAttribute('class', 'yellow')
        divi.style.padding = '10px'
    }else{
        divi.setAttribute('class', 'red')
        divi.style.padding= '5px'
    }

    divi.innerHTML= '<b>heyyy how are you? </b>' + counter

    ulo.appendChild(divi)
    
})

sub.addEventListener('click', ()=>{
    const li = ulo.querySelector('[data-counter="'+counter+'"]')
    //const num = parseInt(li.getAttribute('data-counter'),10)
    li.remove()
    counter--
    zero.innerHTML = counter
    
    
})

let student = [
    {
        name: 'x',
        age: 17
    },{
        name: 'y',
        age: 21
    },{
        name: 'z',
        age: 50
    }
]

let mappedArr = student.map(()=> 'this is a student')
let filteredArr = student.filter(element=> element.age>18)
let finder = student.find(friend=> friend.name == 'x')
console.log(mappedArr , filteredArr, finder)

let kini = [1,2,3,4,5,6]
let fili = kini.filter(element=> element > 3 || element ==2)
console.log(fili)

let redu = kini.reduce((pre, curr)=> pre + curr)
console.log(redu)

let another = kini.reduce((a,b)=>a*b)
console.log(another)

/*
let greater = (val, fig)=>{
    let emp =[]
    let filt = val.filter(element=> element>fig)
    return emp.push(filt)
}
console.log(greater([1,2,3,4,5,6,7,8,9],3))

*/

let actors = [
    {name: 'johnny', networth: 20000000},
    {name: 'zendaya', networth: 100000},
    {name: 'kim', networth: 4000},
    {name: 'ryan', networth: 350000},
    {name: 'tyle', networth: 200},
    {name: 'doja', networth: 5000}
]
let filtact = actors.filter(actor=> actor.networth > 10000 )
console.log(filtact)

let actorlist = filtact.map(actor=> actor.name).join(',')
console.log(actorlist)
 
let tots= actors.reduce((a,b)=> a + b.networth, 0)
console.log(tots)

const promise = fetch('/NEW.json')
promise.then(value=>{
    console.log(value)
    let promise2 = value.json()
    console.log(promise2)
    promise2.then(data=>{
        console.log(data)
    })
})


let weather = 'sun'
if (weather == 'rain') {
    console.log(`☂`)
}else{
    console.log(`😎`)
}
let groceries = ['🍌','🍍','🥭','🍎','🍇','🍐']
groceries.push('🍕')
console.log(groceries)
console.log(groceries.slice(1,5))
console.log(groceries.slice(2,6))

let person = {
    name: 'ginika',
    shirt: 'green',
    assets: 10000000,
    debt: 20,
    networth: function(){
        return this.assets - this.debt
    }
}
let introducer = (name, shirt, networth)=>{
    let another ={
        name: name,
        shirt: shirt,
        networth: networth
    }
    return `hey ${another.name} your shirt is color ${another.shirt} 
    and your networth is ${another.networth} `
}

console.log(introducer(person.name, person.shirt, person.networth()))


groceries.forEach(element=> console.log(element))

// for (let i = 0; i < groceries.length; i++) {
//     console.log(groceries[i])
    
// }

for (const fruit of groceries) {
    console.log(fruit)
}

let number = [1,2,3,4,5,6]

let empty = []

let double = ()=>{
    number.forEach(element=>{
        let result = element**2
        empty.push(result)
    })
    return empty
}
console.log(double())



let doubleMap = (numbers)=>{
    return numbers.map(number => number* 2)
}

console.log(doubleMap(number))




/*let sentence = prompt('sentence?')

  let adder = 0
function letterCounter(sentence){
    for(const index in sentence){
        adder++
    }
    return adder
    return sentence.length

}

console.log(letterCounter(sentence))*/

let stuff = [1,2,3,4,5,7,6,49]
let result = 0
let sumArray = (numbers)=>{
    numbers.forEach((element)=>{
        result += element
    })
    return {result}
}
console.log(sumArray(stuff))



let rep = [-1,-3,-7,1,3,4,6]


let maxi = (valz)=>{
    let anger = valz[0]
    valz.forEach(e=>{
       if(e > anger){
           anger=e
       }
   })
   return {anger}
}

console.log(maxi(rep))


let letterfrequency = (phrase)=>{
    let freq ={}
    for (const letter of phrase) {
       if(letter in freq){
           freq[letter]++
       }else{
           freq[letter] = 1
       }
       console.log(freq[letter])
    }
    return freq
}

console.log(letterfrequency('hehe'))

let wordFrequency = (word)=>{
    let checker = word.split(' ')
    return letterfrequency(checker)
}
console.log(wordFrequency('hey my name hey'))

let titz = document.getElementById('titz')
let message = 'goodbye my lover'
titz.innerHTML= `<p>${message}</p>`
titz.style.color = 'white'
titz.style.backgroundColor = 'lightblue'

let traffic = document.getElementById('traffic')
let redLight = document.getElementById('redLight')
let yellowLight = document.getElementById('yellowLight')
let greenLight = document.getElementById('greenLight')
let colorbtn = document.querySelectorAll('.color')
let up = {'red': 0, 'yellow': 0, 'green': 0}
colorbtn.forEach(butt =>{
    butt.onclick = ()=> {
        up[butt.value]+=1
        butt.innerHTML = up[butt.value]

        console.log(butt.value)
    }
    //let values = butt.value
   // return values
})
function clearScores (){
    up.green = 0
    up.red = 0
    up.yellow= 0
    colorbtn.forEach(butt => butt.innerText= ' ')
}
let clearbutt = document.createElement('button')
traffic.appendChild(clearbutt)
clearbutt.onclick = ()=> clearScores()


let fruitty = ['🍌','🍍','🥭','🍎','🍇','🍐']
let randomfruit = (fru)=>{
    let rands = Math.floor(Math.random()*fru.length)
   return fru[rands]
}
console.log(randomfruit([1,2,3,45,7,5,5,'rht','hey']))

