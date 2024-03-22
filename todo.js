let todos =['Get groceries', 'Clean the house', 'Do laundry', 'Make dinner']
todos.push('Water the plants')

todos.forEach(function(todoTitle){
    let element = document.createElement('div');
    element.innerText = todoTitle;
    document.body.appendChild(element)
});


function func(){
    let textbox = document.getElementById('adder').value;
    todos.push(textbox)
}
function  done(){
    let butt = document.getElementById('button1')
    butt.innerText = 'Done'
    
}

/* function upper (value){
     let answer = []
     value.forEach(function(str){
         answer.push(str.toUpperCase())
     })
     console.log(answer)
 }
 upper(['omo'])


let bubu = document.createElement('button');
bubu.innerText = 'Click me';
document.body.appendChild(bubu);
document.title = 'testing testing'

function greeting(firstName) {
    document.write(`hello ${firstName}`);
}
greeting('ginika')

function toUp(str) {
    document.write(str.toUpperCase());
}
//console.log(toUp('ginikachi'));
toUp('ginikachi')

function converter(a) {
    let result = a * 2.54;
    return(`${a}inches is equivalent to ${result}cm`)
}
console.log(converter(4));





let concept = document.createElement('button');
concept.innerText = 'pick me';
document.body.appendChild(concept)

function greet (first){
    console.log(`hello ${first}`)

}
greet('gini')

function capital (strr){
    console.log(strr.toUpperCase())
}
capital('gini gini')




function toupper(help){
    let empty = [];
    help.forEach(function(element){
       empty.push(element.toUpperCase())
    })
    console.log(empty)
}
toupper(['so', 'help', 'me'])

function arrayDouble (str){
    let another = [];
    str.forEach(function(element){
        another.push(element);
        another.push(element)
    })
    console.log(another)
}
arrayDouble(['hello', 'world']);

function arraysum (num){
    let total = 0
    num.forEach(function(element){
        total += element
    })
    console.log(total)
}

arraysum([1,2,3,4,5])*/

let toDos = ['wash', 'cook', 'clean', 'eat']
toDos.push('greet')
let todo1 = 'get groceries'
let todo2 = 'wash car'

toDos.forEach(function(some){
   let omo = document.createElement('div')
   omo.innerText = some;
   document.body.appendChild(omo)
});




let element = document.createElement('div');
element.innerText = todo1;
document.body.appendChild(element)

let element1 = document.createElement('div');
element1.innerText = todo2;
document.body.appendChild(element1);

let element2 = document.createElement('div');
element2.innerText = 'howdy';
document.body.appendChild(element2)

element = document.createElement('div');
element.innerText = 'omo';
document.body.appendChild(element)






let bubu = document.createElement('button');
bubu.innerText = 'ClickME'
document.body.appendChild(bubu)

document.title = 'hello'

function addTodo(con){
    let valu = document.createElement('div');
    valu.innerText = con;
    document.body.appendChild(valu)
}
console.log(addTodo('wash car'))
console.log(addTodo('help me God'))

function greeter (name){
    console.log(`hello ${name}`)
}
greeter('ginika')

function capitalize(words){
    let result = words.toUpperCase()
    console.log(result)
}
capitalize('ginika')

function length (numm){
    console.log(numm * 2.56)
}
length(34)


function toUpper(arr) {
    let arr1 = []
    arr.forEach(function(valu){
     arr1.push(valu.toUpperCase())
    })
    console.log(arr1)
}
toUpper(['kimfru', 'oginwa'])

function arrDoub(arrr){
    let newarr = []
    arrr.forEach(function(vals){
        newarr.push(vals.toUpperCase())
        newarr.push(vals.toUpperCase())
    })
    console.log(newarr)
}
arrDoub(['kind', 'sir'])

function arrNum (addem){
    let total = 0
    addem.forEach(function(vale){
        total += vale
    })
    console.log(total)
}
arrNum([2,3,4,1,5])

function done(){
    let set = document.getElementById('todo-button')
    set.innerText = "Done"
    
}
let total = 0
function add(){
    total+=1
    let val = document.getElementById('counter')
    val.innerText = total
}

function sub(){
 total-=1
 let down = document.getElementById('counter')
 down.innerText = total
}

function adder(){
    let div = document.createElement('div')
    let input = document.getElementById('text').value
    div.innerText = input
    document.body.appendChild(div)
}


const cart = document.getElementById('cart')

function fruit(list){
    let neww = document.createElement('div')
    neww.innerText = list
    cart.appendChild(neww)
}

function clear(){
    cart.innerHTML = '';
}


let values = document.getElementById('numvalue')
function centi(){
    let result = values.value
    let ans = document.createElement('div')
    ans.innerText = result * 2.56
    document.body.appendChild(ans)
}

function inches(){
    let result = values.value
    let sult = document.createElement('div')
    let converted = +result/2.56
    sult.innerText = converted
    document.body.appendChild(sult)
}


let ourList = [{
    title: 'items...',
    dueDate: 'due in...'
}]

    function enter(){
    let todotitle = document.getElementById('todolist').value
    let datePicker = document.getElementById('datepicker').value
    ourList.push({
        title: todotitle,
        dueDate: datePicker
    })
    rent()
}
rent()
function rent(){
    document.getElementById('puthere').innerHTML = ' '
    ourList.forEach(function(todo){
        let contain = document.getElementById('puthere')
        let stuff = document.createElement('div')
        stuff.innerText = todo.title +' ' + todo.dueDate
        contain.appendChild(stuff)
    })
}