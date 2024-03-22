function exam(){
    var sname = document.getElementById('sname').value
    var pass = document.getElementById('pass').value
    var snum = document.getElementById('snum').value

    if(sname == 'ginika' && pass == 1234 && snum >= 100){
        alert('sign up successful')
        return true
    }
    else if(snum<100){
        alert('Invalid Student number')
        return false
    }
    else{
        alert('Re-enter credentials')
        return false
    }
}

