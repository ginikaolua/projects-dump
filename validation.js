/*var regex =/\d+567\d+/
var str1 = `User's phone number is 123456789`

var output = regex.exec(str1)
console.log(output)
//check out more shortchuts in the note sha*/
//.trim is used to avoid ridiculous amount of white spaces


function validate(){
    var uname = document.getElementById('uname').value
    var pass = document.getElementById('pword').value
    var age = document.getElementById('age').value

    if (uname.trim == '' || pass.trim == "" || age.trim == ""){
        alert('Missing Credentials')
        return false
    }
    else if(uname == 'ginika' && pass == 1234 && age>= 18){
        alert('Sign-up successful')
        return true
    }
    else if(age < 18){
        alert('Underage')
        return false
    }
    else{
        alert('Wrong credentials')
        return false
    }
}