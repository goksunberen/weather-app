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

    const weatherIcon = document.querySelector(".weather-icon");

    switch(data.weather[0].main){
        case "Clouds":
            weatherIcon.src = "./images/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "./images/clear.png";
            break;
        case "Drizzle":
            weatherIcon.src = "./images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "./images/mist.png";
            break;
        case "Snow":
            weatherIcon.src = "./images/snow.png";
            break;
        case "Rain":
            weatherIcon.src = "./images/rain.png";
            break;
    }
}

function getCityName(){
    const cityName = document.getElementById("city-input").value;
    getWeather(cityName);
}