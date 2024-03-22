/*console.log('heyy')
let a = 5, b = 6, c = 7
console.log(a + c)
{
    let name = prompt('name?')
    name =='ginika'?console.log('hey girl'):console.log('access denied')
}
var g = 6
var h = 12
var k = 45
if (g < h || k < g) {
    console.log(1)
}else{
    console.log(0)
}
 for (let i = 0; i < 5; i++) {
    console.log(i)
     
 }
function calc(a, b, c) {
     if (c == "-") {
       return(a - b)
    }else if (c == '+') {
       return(a + b)
    }else if (c == "*") {
       return(a * b)
    } else if(c == '/'){
       return(a / b)
    }else{
        return('invalid operator')
    }
  
}
console.log(calc(15, 3, 7))
let buttons = document.getElementsByTagName('button')
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
        alert(`button ${i} pressed` )        
    })
}

function random() {
    let dice = Math.round((Math.random() * 5) + 1)
    return dice
}
console.log(random())

function challenge(str, char) {    
    var str1 = str.substring(0, char)
    var str2 = str.substring(char+1, str.length)
    return(str1 + str2)
}
console.log(challenge('my bacnk is hurting', 6))

function omo(str) {
    if (str.length <= 3) {
       return str.toLowerCase()
    }
    let frontPart = (str.substring(0,3).toLowerCase())
    let backPart = (str.substring(3, str.length).toUpperCase())
    return frontPart + backPart
}
console.log(omo('HOWDY'))

let arr =['pass', 'the', 'kuchi', 'make', 'we jump', 'and pass']
arr.push('give me', 'the money','make me', 'jump')
arr.splice(2, 3)
arr.forEach(element => {
    console.log(element)
});

function removeVal(arr, val) {
    let index = arr.indexOf(val)
    if (index > -1){
        arr.splice(index, 1)
    }
    return arr
}
console.log(removeVal(arr, 'pass'))
console.log(arr.indexOf('jump'))

let list = [23, 56, 78, 'happy?', true, 'lol']
function removeStuff(array, item) {
    let indexx = array.indexOf(item)

    if (indexx > -1){
        array.splice(indexx, 1)
    }
    return array
}
console.log(removeStuff(list, "happy?")) 

list.forEach(element => {
    console.log(element)
});

arr.forEach(function(value){
    console.log(value)
})*/


/*
{let a = 5
let b = 4
document.write(a+b)
}
document.write('\n hello\n')



let age = prompt('How old are you?')
age >= 18 ? document.write('\n you are old enough\n'):document.write('\n underage')

let num = prompt('pick number?')
if(num % 2 == 0 && num > 0){
    document.write('\nyour number is a positive even num\n')
}else if(num % 2 != 0 && num < 0){
    document.write('\nyour number is a negative odd number\n')
}else if(num % 2 == 0 && num < 0){
    document.write('\n your number is negative and even\n')
}else if (num % 2 != 0 && num > 0){
    document.write('\npositve and odd\n')
}else{
    document.write('zero')
}

let month = 2

switch (month) {
    case 1:
        document.write('january')
        break;
    case 2:
        document.write('feburary')
        break;
    case 3: 
        document.write('march')

    default:
        document.write('i don tire lol')
        break;
}*/
//document.write("howdy partner <br> What's shaking?" )

/*function cars(carModel, carSize, carPrice) {
    this.carModel = carModel
    this.carSize = carSize
    this.carPrice = carPrice
    this.allwheeldrive = function(){
        console.log('this car dey drive')
    }
    return cars
}
var c1 = new cars('toyota', 'big', 50000)

console.log(c1.carPrice)

var str1 = new String()
document.write('<h1>'+ typeof(str1) + '</h1>')

var rect2 = new Object()
rect2.length = 5
rect2.width = 10
rect2.getArea = function(){
    return this.length * this.width
}
rect2.getPerimeter = function(){
    return (2*this.length) + (2*this.width)
}
document.write('<h1>' + rect2.getArea() +'</h1>')

function rectangle( len, wid) {
    this.length = len
    this.width = wid
    this.getArea = function(){
        return len * wid
    }
    this.getPerimeter = function(){
        return (2*len) + (2*wid)
    }
}
var rect = new rectangle(5, 10)
document.write(rect.getArea())

let abc = {
    name : 'ginikaa',
    age : 22,
    job : 'inshallah'
}
abc.grades = 'A'
console.log(abc)

function about(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
}
about.prototype.getName = function(){
    return this.name
}
about.prototype.getAge = function(){
    return this.age
}
about.prototype.grades = 'A'
var aboutMe = new about('ginikaa', 22, 'inshallah')
var aboutYou = new about ('meh', 10, "lol")
console.log(aboutMe)
console.log(aboutMe.getName())
console.log(aboutMe.getAge())
console.log(aboutYou)


const Employee = {
    post : function(){
        return 'software dev'
    },
    changeName: function(name){
        this.name = name
    }
}

var E1 = Object.create(Employee)
E1.name = 'omo'
E1.role = 'wahala'
E1.changeName('confused')
console.log(E1)
console.log(E1.post())

var E2 = Object.create(Employee, {
    name: {value: 'sandra', writable: true },
    role: {value:'confusion'}
})
E2.changeName('i hate this')
console.log(E2)

function Student(names, roles, salary){
    this.names = names
    this.roles = roles
    this.salary = salary
}
Student.prototype.post = function(){
    return (`${this.names} is a student`)
}
var stud = new Student('ginika', 'student', 40000)
console.log(stud)

function Programmer(name, roles, salary, language){
    Student.call(this,name,roles,salary)
    this.language = language
}
Programmer.prototype = Object.create(Employee.prototype)

var P1 = new Programmer('ginika', "programmer", 300000,"javascript")
console.log(P1)


class Student {
    constructor(name, age, role){
        this.name = name
        this.age = age
        this.role = role
    }

    Org(){
        return(`I'm ${this.name} from Unilag`)
    }

    dob(){
        return (`${this.name} was born in the year ${2022-this.age}?`)
    }
    static add(a, b){
        return a + b
    }
}

var stud = new Student('Ginika', 21, 'programmer')
console.log(stud)
console.log(stud.dob())
console.log(stud.Org())
console.log(Student.add(10,20))

class Student1 extends Student{
    constructor(name, age, role, language, section){
        super(name, age, role)
        this.language = language
        this.section = section
    }
}
var stud1 = new Student1('sandra', 22, 'programmer', 'javascript', 'A')
console.log(stud1)
console.log(stud1.Org())
console.log(stud1.dob())
console.log(Student1.add(24,10))*/

/*function Fun2() {
    var x = document.getElementsByTagName('div')
    x[0].style.fontFamily = 'Courier New'
    x[1].style.color = 'pink'
    x[2].style.fontStyle = 'italic'
    x[3].style.backgroundColor = 'red'
}

function fun(){
    fun()
}
document.write(fun)

function func1() {
    setTimeout(function(){
        console.log('function 1'); func2()}, 1000)
    
}
function func2() {
    console.log('function 2')
}
func1()


function person1(name, person2) {
    setTimeout(function(){
    console.log(`hi my name is ${name}`)    
    person2()}, 1500)
}
function person2() { 
    console.log(`hi my name is sandra`)    
}
person1('ginika', person2)


var prom = new Promise(function(resolve, reject){
     var drive = true
     if (drive){
         resolve('yes')
     }else{
         reject('no')
     }
})
prom.then(function(resolve){
    console.log(`${resolve} you know how to drive`)
}).catch(function(reject) {
    console.log(`${reject} you can't drive shit`)
})


var prome = new Promise(function (resolvee, rejecte) {
    var teach = false
    if(teach){
        resolvee('Hi')
    }else{
        rejecte('omo')
    }
})
prome.then(function(resolvee){
    console.log(`${resolvee} fake teacher`)
}).catch(function(rejecte){
    console.log(`${rejecte} good`)
})

var functions = function(){
    return new Promise(function(resolve, reject){
        resolve('learnt functions')
    })
}
var callback = function(message){
    return new Promise(function(resolve, reject){
        resolve(`${message} learnt callback`)
    })
}
var promises = function (message) {
    return new Promise(function(resolve, reject){
        resolve(`${message} learnt promises`)
    })
}
functions().then(function(result){
    return callback(result)
}).then(function(result){
    return promises(result)
}).then(function(result){
    console.log(`good to go: ${result}`)
})

var arrow1 = (a,b) => a + b
console.log(arrow1(12,8))

var arrow2 =  message => {
    console.log(`hey there ${message}`)
}

var arrow3 = ()=> {
    console.log('hey hey hey')
}

arrow2('simchi')
arrow3( )


function makeOrder(coffee){
    return new Promise((resolve, reject)=>{
        console.log(`making request for  ${coffee}`)
        if(coffee == 'black coffee'){
            resolve(`hey! here's your coffee`)
        }else{
            reject(`yo! we racist!! black coffee only`)
        }
    })
}

function processOrder (order){
    return new Promise((resolve, reject)=> {
        console.log(`your order is processing`)
        resolve(` ${order}`)
    })
}

/*makeOrder('black coffee').then(order =>{
    console.log(`order has been recieved`)
    return processOrder(order)
}).then(processOrder=>{
    console.log(processOrder)
}).catch(error=>{
    console.log(error)
})

async function func1(){
    try {
        var order = await makeOrder('black coffee')
        console.log('order has been received')
        var processedOrder = await processOrder(order)
        console.log(processedOrder)
    } catch (error) {
        console.log(error)
    }
}

func1()



function makeorder (drink){
    return new Promise((resolve, reject)=>{
        console.log(`request for ${drink}?`)
        if(drink == 'strawberry shake' || drink =='smoothie'){
            resolve(`hey here's your ${drink}`)
        }else{
            reject('sorry, we do not serve that')
        }
    })
}

function processing (order){ 
    return new Promise((resolve, reject)=>{
        console.log('your order is being processed')
        resolve(order)
    })
}
async function func5(){
    try {
        var drink = await makeorder('smoothie')
        console.log('order recieved')
        var processs = await processing(drink)
        console.log(processs)

    } catch (error) {
        console.log(error)
    }
}
func5()



function f1 (){
    console.log('hello there')
}
try {
    f1()
    f4()
} catch (error) {
    console.log(error.name)
    console.log('you are bombading the system')
}finally{
    consoler.log('will execute anyway')
}

var x = 7
if (x<10) {
    throw new Error ('customizable error')    
}else{
    console.log('doing great')
}*/

//Regular Expressions

var regex = /Hello/g    //g is a global modifier(check note sha)
var str1 = 'Hello kids, my name is alum. its so nice blah, Hello'
var output = regex.exec(str1)
console.log(output)

var result = regex.test(str1) //test function
console.log(result)

var inspect = str1.match(regex) //match function
console.log(inspect)

var lastly = str1.replace(regex, 'Hi')
console.log(lastly)
//metacharacters in regular expressions(check your note sha)



