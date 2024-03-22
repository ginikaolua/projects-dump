class Car {
    constructor(name, color, topSpeed){
        this.name = name
        this.color = color
        this.topSpeed = topSpeed
        this.currentspeed = 0
    }
    getcurrentspeed(){
        return currentspeed
    }
    start(){
        console.log('you started my car')
    }
    drive(speed){
        console.log('you drove my car')
        this.currentspeed += speed
        console.log(`driving speed at ${this.currentspeed} mph`)
    }
    brake(){
        console.log('came to a screeching halt')
        this.currentspeed -= 10
    }
    zeroToSixty(){
        setTimeout(()=>{
            console.log('pHEW! that was fast')
            this.currentspeed = 60
            console.log(this.currentspeed = 60)
        })
    }
    stop(){
        console.log('car just stopped')
        this.currentspeed = 0
    }
    
}

const car = new Car('lanbo', 'white', 'turbo')
console.log(car)
car.drive(10)
car.drive(10)
car.drive(10)
car.drive(10)
car.drive(10)
console.log(car.currentspeed)
car.brake()
console.log(car.currentspeed)
car.stop()
console.log(car.currentspeed)
// console.log(car.currentspeed)
// car.drive()
// car.start()
// // car.brake()
// console.log(car.topSpeed)
// console.log(car.currentspeed)
// car.drive()
// console.log(car.currentspeed)
// car.zeroToSixty()
// console.log(car.currentspeed)
// car.brake()
// console.log(car.currentspeed)

const porsche = new Car ('porsche', 'yellow', 'mid')
console.log(porsche)
porsche.drive(40)
console.log(porsche.currentspeed)
porsche.drive(20)
porsche.brake()
porsche.stop()
console.log(porsche.currentspeed)


const fruits = ['🍭','🍫','🍦','🧆','🍵']

Array.prototype.mypush = function(item){
   this[this.length] = item
   return this
}
console.log(fruits.mypush('🍙'))
console.log(fruits.mypush('🍗'))

class Bank {
    constructor(balance){
        this.currentBalance = balance
    }
    withdraw(cash){
        if(this.currentBalance < cash){
            console.log('insufficient funds, you have only', `₦${this.currentBalance}`)
            
            return 
        }
        console.log(`₦${cash} debited`)
        this.currentBalance -= cash
        console.log(`your balance is ₦${this.currentBalance}`)
        

    }
    deposit(cash){
        console.log(`₦${cash} credited`)
        this.currentBalance += cash
        console.log(`your balance is ₦${this.currentBalance}`)
    }
}

const gt = new Bank(4000)
console.log(gt)
gt.deposit(500)
console.log(gt)
gt.withdraw(3500)
console.log(gt)
gt.withdraw(1500)




const amounts = document.getElementById('amount')
// const amount = Number(amounts)
const accountbalance = document.getElementById('accountbalance')
const deposit = document.getElementById('deposit')
const balance = document.getElementById('balance')

class Banking {
    constructor(balance){
        this.balance= balance
        accountbalance.innerText = balance
    }
    withdraw(cash){
        if(this.balance < cash){
            balance.innerHTML = 'insufficient funds'
            return
        }
        console.log(`₦${cash} debited`)
        this.balance -= cash
        console.log(`your balance is ₦${this.balance}`)
        balance.innerHTML = `₦${cash} debited`
    }
    deposit(cash){
        console.log(`₦${cash} credited`)
        this.balance += cash
        console.log(`your balance is ₦${this.balance}`)
        balance.innerHTML = `₦${cash} credited`
    }

}
const fcmb = new Banking(5000)

deposit.addEventListener('click', ()=>{
    fcmb.deposit(Number(amounts.value))
    accountbalance.innerHTML = fcmb.balance
})

//alternative way my g
/*deposit.onclick = ()=> {
    fcmb.deposit(Number(amounts.value))
    accountbalance.innerHTML = fcmb.balance
}*/

withdraw.onclick=()=>{
    fcmb.withdraw(Number(amounts.value))
    accountbalance.innerHTML = fcmb.balance
}