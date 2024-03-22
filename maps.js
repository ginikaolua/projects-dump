var myCar = new Object()
{
myCar.manufacturer = 'Ford'
myCar.name = 'Raptor'
myCar.color = 'Black'
}
myCar.make = 2012
console.log(myCar)

var MyCar = new Map()
{
 MyCar.set(1, 'Honda')
 MyCar.set('My car nme is', 'BMW')
 MyCar.set({}, "Audi")
 MyCar.set(function(){}, 'Mercedes')
}
console.log(MyCar.get(3))
console.log(MyCar.size)
console.log(MyCar)

//easier wayyyy(using arrays)

let myArr = [[1, "Honda"], [2, 'Audi'], [3, 'Mercedes']]
var mycar = new Map(myArr)

console.log(mycar)
console.log(mycar.get(3))

for (let [key, value] of mycar) {
    console.log(key + ' '+ value)
}

for (let value of mycar.values()) {
    console.log(value)
}