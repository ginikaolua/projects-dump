const dogImage = document.getElementById('dogImage')
const dogbtn = document.getElementById('dogbtn')

const getNewDog=()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        // console.log (json)
        // console.log(json.message)
        dogImage.innerHTML = `<img src='${json.message}' height= 300 width=300/>`
      
    })
}

// 21a7e33c4cdd473c845f5512f6922d4

 dogbtn.onclick =()=>{
    getNewDog()
}

// 1081101982519060 10223569763528853

// https://superheroapi.com/api/1081101982519060

// https://superheroapi.com/api/access-token

// const getSuperhero =()=>{
//     fetch('/api.json')
//     .then(response=> response.json())
//     .then(json=> {
        
        
//        console.log(`${json}`)})
// }
// getSuperhero()


// const img = "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
// document.querySelector('body').innerHTML += `<img src="${img}" height=200 width= 200 />`

// let searchero = document.getElementById('searchero')
/*let searcher = document.getElementById('searcher').value

const promo = fetch('/api.son')
promo.then(respnse=>{

})
let hero = document.getElementById('hero')*/



const promise = fetch('/api.json')
    promise.then(value=>{
        console.log(value)
        let promise2 = value.json()
        console.log(promise2)
        promise2.then(data=>{
            console.log(data)
            console.log(data.results)
            let ran = Math.floor(Math.random()*3)
            console.log(data.results[ran])
            console.log(data.results[ran].image)
            console.log(data.results[ran].image.url)
            document.querySelector('body').innerHTML += `<img src="${data.results[ran].image.url}" height=100 width= 100 />`
    })
})

