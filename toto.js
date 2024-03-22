let todos = [{
     title: 'wash car',
     dueDate: '2022-07-10'
 },{
     title: 'buy groceries', 
     dueDate:'2022-07-9'
 },{
     title: 'do the dishes',
    dueDate: '2022-07-11'}]

render()

function func(){
    let valu = document.getElementById('adder').value
    let datePicker = document.getElementById('datepick').value
    todos.push({
        title: valu,
        dueDate: datePicker
    })
    render()
}

function deleteTodo(){
    
}

function render(){ 
    //reset our list

    document.getElementById('item').innerHTML = '';

    //add elements to the reset list 
    todos.forEach(function(element){
        let divs = document.createElement('div')
        divs.innerText = element.title + ' '+ element.dueDate;

        let deletebutton = document.createElement('button')
        deletebutton.innerText = 'Delete'
        divs.appendChild(deletebutton)
        deletebutton.style = 'margin-left : 12px;';
        deletebutton.onclick = deleteTodo
        let items = document.getElementById('item')
        items.appendChild(divs )
        
    })}

