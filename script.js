const apikey = "763bb7d843e8fa04ccf038836cae1726";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchbox= document.querySelector('.search input');
const searchbtn= document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather img');

async function checkWeather(city){
    const response = await fetch(`${baseURL}&q=${city}&appid=${apikey}`);
    const data = await response.json();
    
    document.querySelector('.city').innerText = data.name;
    document.querySelector('.temp').innerText = data.main.temp + '°C';
    document.querySelector('.humidity').innerText = data.main.humidity + '%';
    document.querySelector('.wind').innerText = data.wind.speed + 'km/h';

    const weatherCondition = data.weather[0].main.toLowerCase();
        if (weatherCondition.includes("cloud")) {
            weatherIcon.src = "clouds.png";
        } else if (weatherCondition.includes("rain")) {
            weatherIcon.src = "rain.png";
        } else if (weatherCondition.includes("clear")) {
            weatherIcon.src = "clear.png";
        } else if (weatherCondition.includes("snow")) {
            weatherIcon.src = "snow.png";
        } else if (weatherCondition.includes("dizzle")) {
            weatherIcon.src = "dizzle.png";
        }else {
            weatherIcon.src = "clear.png"; 
        }

}
searchbtn.addEventListener('click', () => {
    checkWeather(searchbox.value);
});
