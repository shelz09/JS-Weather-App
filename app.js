const apikey = "e374fc3a4826597701804356d32bbd5c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".navbar input");
const searchbtn = document.querySelector(".search");
const weatherimg = document.querySelector(".wthricon");
const weathervideo = document.querySelector(".backgroundvideo")

async function checkweather (city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "% humidity";
    document.querySelector(".windspeed").innerHTML = data.wind.speed + "Km/h";
    if(data.weather[0].main == "mist"){
        weatherimg.src = "images/mist.png";
        weathervideo.src = "videos/mist.mp4";
    } else if(data.weather[0].main == "Clear"){
        weatherimg.src = "images/clear.png";
        weathervideo.src = "videos/sunny1.mp4";
    } else if(data.weather[0].main == "Snow")  {
        weatherimg.src = "images/snow.png";
        weathervideo.src = "videos/snow.mp4";
    } else if(data.weather[0].main == "clouds" || "smoke"){
        weatherimg.src = "images/clouds.png";
        weathervideo.src = "videos/cloudy.mp4";
    } else if(data.weather[0].main == "rain"){
        weatherimg.src = "images/rain.png";
        weathervideo.src = "videos/rain.mp4";
    } else if(data.weather[0].main == "drizzle"){
        weatherimg.src = "images/rain.png";
        weathervideo.src = "videos/drizzle.mp4";
    }
    
    document.querySelector(".row").style.visibility = "visible"
}
searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})
