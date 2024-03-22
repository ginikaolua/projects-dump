function validate(){
    var email = document.getElementById('mail').value
    var regex = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/

    if(email.trim() == ""){
        alert('Please enter a valid email id')
    }
    else if((regex.test(email))){
        alert('email submitted successfully')
    }
    else{
        alert('Wrong email id')
    }
}

//oluasandra@gmail.com
//4 parts of an email id
//the name = can consists of numbers sef e.g oluasandra22
//the @ symbol
// the domain name (gmail, yahoo, the name of the organization sha)
//the last part is the extension which comes after the(.)