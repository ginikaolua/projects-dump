var mySet = new Set()
mySet.add(1)
mySet.add(2)
mySet.add(3)
console.log(mySet)


var array = [1, 2, 3, 4, 3, 5, 4, 5,7]
var myset = new Set(array)
console.log(myset)
let myArr = Array.from(myset)
console.log(myArr)
for (let iterator of myArr) {//traversing through the array
    console.log(iterator)
}
for (let item of myset) {
    console.log(item)
}

myset.delete(7)
console.log(myset)

myset.clear()
console.log(myset)