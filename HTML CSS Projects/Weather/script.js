const apikey = "2efb70396af8f37d369e3eaa0739fc56";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather img");


async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".percent").innerHTML = data.main.humidity + "%";
    document.querySelector(".km").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img/clear.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "img/snow.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img/rain.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "img/Mist.png";
    }



}
searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value);
})






