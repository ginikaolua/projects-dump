const searchCity= async ()=>{
    const weatherInput = document.getElementById('weather-input').value
    console.log(weatherInput) 
    const data = await getweather(weatherInput)
    showWeatherdata(data)
}


const getweather = (city)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '40da3c7dddmshecebb8a616deb52p1d7145jsn4f61f699f12d',
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
        }
    };
    return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, options)
	.then(response => response.json())
	// .then(data => console.log(data.weather[0].main))
    .then(data => data)
	.catch(err => console.error(err));

}


const showWeatherdata=(weatherData)=>{
    console.log(weatherData.main.temp)
    
    document.getElementById('weather').innerText = weatherData.weather[0].main
    document.getElementById('city-name').innerText = weatherData.name
    document.getElementById('temp').innerText = weatherData.main.temp
    document.getElementById('min-temp').innerText = weatherData.main.temp_min
    document.getElementById('max-temp').innerText = weatherData.main.temp_max

}