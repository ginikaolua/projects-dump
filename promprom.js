const prom1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        isReady= [true, false][Math.floor(Math.random()*2)]
        isReady?resolve('soup is ready'):reject('no soup today')
    }, 2000)

})
/*console.log(prom1)
prom1.then((value)=> console.log(value))
.catch(value=> console.log(value))*/

// https://dog.ceo/api/breeds/image/random

const getDog = async ()=>{
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    console.log(data)
    console.log(data.message)
}

const getSoup = async ()=>{
    const data = {rating: null, tip: null, pay: null, review: null}
    try{
        const soup = await prom1
        data.rating = 5
        data.tip= 0.2
        data.pay = 1000
        data.review= 5
        console.log(soup)
        return data
    }catch(error){
        console.log(error)
        data.rating = 1
        data.tip= 0
        data.pay = 0
        data.review= 1
        return data

    }
}
console.log(getSoup().then(value=>console.log(value)))

const sum = async (a,b)=> a+b
console.log(sum(1, 7).then(value=> console.log(value)))
