const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const  noOfppl  = document.getElementById('numofppl')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numofppl = Number(noOfppl.innerText) 

let counter = 0
function calculateBill(){
    const bill = Number(billTotalInput.value)
    const tip = Number(tipInput.value)/100
    const tipAmount = bill*tip
    const total = tipAmount + bill
    const perPersonTotal = total/numofppl
    perPersonTotalDiv.innerText = `₦${perPersonTotal.toFixed(2)}`
    
}

function decreasePeople(){
    if(numofppl<=1){
        return
    }
    numofppl-=1
    noOfppl.innerText = numofppl
    calculateBill()

}

function increasePeople(){
    numofppl += 1
    noOfppl.innerText = numofppl
    calculateBill()


}