function Fun2(){
    let x = document.getElementsByTagName('div')
    for (let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor ='pink'
        x[0].style.fontStyle= 'italic'
        //using for loop is how you can access all the elements of the array at once
        
    }
}

