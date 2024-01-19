const apiKey = "0149b3f401c5e4b0ba7a35affcad13ca";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

async function getWeather(cityName){
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    let data = await response.json();

    document.querySelector(".location").innerHTML = data.name + `, ${data.sys.country}`;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".weather").innerHTML = data.weather[0].main;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = Math.round(data.wind.speed) + " km/h";
}

function getCityName(){
    const cityName = document.getElementById("city-input").value;
    getWeather(cityName);
}