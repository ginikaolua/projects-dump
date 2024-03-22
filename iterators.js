var arr = ['bmw', 'mercedes', 'audi', 'honda']
console.log(arr)
console.log(arr.length)

for (const iterator of arr) {
    console.log(iterator)
}

arr.forEach(element => {
    console.log(element)
}); 

function cars (values) {
    let index = 0
    return{
        next: function(){
            if(index < values.length)
            return{
                value: values[index++],
                done:false
            }
            else{
                return{
                    done: true
                }
            }
        }
    }
}

var newCars = cars(arr)
console.log(newCars.next().value)
console.log(newCars.next().value)
console.log(newCars.next())

function* generate(){
    let i = 0
    yield 'bmw'
    yield 'mercedes'
    yield 'audi'
    yield 'honda'

}
let gen = generate()
console.log(gen.next())
console.log(gen.next())
//using loop with generator

function* generator(){
    let i = 0
    var ar = ['bmw', 'mercedes', 'audi', 'honda']
    while (i < ar.length) {
        yield ar[i]
        i++
    }
}

let geen = generator()
console.log(geen.next())