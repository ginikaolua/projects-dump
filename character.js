//basic validation

function employee(){
    var empid = document.getElementById('eid').value
    var check =/[DE]235[10-99]/i
    if ((check.test(empid))) {
        alert('Valid Employee ID')
    } else {
        alert('Invalid Employee ID')
    }
}