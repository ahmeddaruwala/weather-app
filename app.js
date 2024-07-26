const city = "Karachi";
const country = "Pakistan";
const unit = "metric";
const appId = "66bb2a7bb9e2b2a23f63e597fbf234cc";

const temperature = document.getElementById("temp");
const cityEle = document.getElementById("city");
const weatherEle = document.getElementById("weather");
const feelsLike = document.getElementById("feels-like")
const max = document.getElementById("max");
const min = document.getElementById("min");
const windSpeed = document.getElementById("wind-speed");
const image = document.getElementById("background-image");

fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=${unit}&APPID=${appId}`
)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        const {name, weather, main, wind} = data;
        cityEle.innerHTML = name;
        temperature.innerHTML = main.temp + ' °C';
        weatherEle.innerHTML = weather[0].description;
        feelsLike.innerHTML = main.feels_like + ' °C';
        max.innerHTML = main.temp_max + ' °C';
        min.innerHTML = main.temp_min + ' °C';
        windSpeed.innerHTML = wind.speed;
    });