// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
// 2a0325ced81d652d5a23a5e6157038a6

var weatherApi = {
    key: '2a0325ced81d652d5a23a5e6157038a6',
    baseUrl: 'https://api.openweathermap.org/data/2.5/forecast'

}
// Event listener on keypress

var searchInputBox = document.getElementById('inputBox')

searchInputBox.addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {
    console.log(searchInputBox.value)
    getweatherReport(searchInputBox.value)
    document.querySelector('.weatherBody').style.display = 'block';

    }
})


// Get weather reports

function getweatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport)
}




// Show weather report

function showWeatherReport(weather) {
    console.log(weather)

    var city = document.getElementById('city')
    city.innerText = `${weather.city.name}, ${weather.city.country}`
    // console.log(city.innerText)


    var temperature = document.getElementById('temp')
    temperature.innerHTML = `${Math.round(weather.list[0].main.temp)}&deg;C`
    console.log(temperature.innerText)
    

    var windy = document.getElementById('wind')
    windy.innerHTML = `Wind: ${weather.list[0].wind.speed} mph`
    // console.log(windy.innerText)
    

    var humidity = document.getElementById('humidity')
    humidity.innerHTML = `Humidity: ${weather.list[0].main.humidity}%`
    // console.log(humidity.innerText)

    var weatherType = document.getElementById('weather')
    weatherType.innerHTML = `${weather.list[0].weather[0].main}`
    // console.log(weatherType.innerHTML)

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('./assets/images/clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('./assets/images/sky.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('./assets/images/haze.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('./assets/images/rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('./assets/images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('./assets/images/thunder.jpg')";
        
    } 
}



// Date manage function
var date = document.getElementById('date');
let todayDate = new Date();
    date.innerText = dateManage(todayDate);



    function dateManage(dateArg) {

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
        let year = dateArg.getFullYear();
        let month = months[dateArg.getMonth()];
        let date = dateArg.getDate();
        let day = days[dateArg.getDay()];
    
        return `${day}, ${month} ${date} ${year}`;
    }
