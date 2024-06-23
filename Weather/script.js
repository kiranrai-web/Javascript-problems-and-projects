const apiKey = "d857445ec85b0ecf5e95275d81d5b369";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".searchImg");
const tempImg = document.querySelector(".tempImg");
const date = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = date.getDay();
let dayName = days[day];

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".card").style.display ="none";
    }
    else{
        var data = await response.json();
    document.querySelector(".city p").innerHTML = data.name;
    document.querySelector(".temp p").innerHTML = Math.floor(Math.round(data.main.temp)) + "°C";
    document.querySelector(".useHumidity").innerHTML = data.main.humidity;
    document.querySelector(".useVisibility").innerHTML = data.visibility;
    document.querySelector(".pressure").innerHTML = data.main.pressure + "hpa";
    document.querySelector(".useWind").innerHTML = data.wind.speed + "mph";
    document.querySelector(".date").innerHTML = dayName;

    if(data.weather[0].main == "Clouds"){
        tempImg.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        tempImg.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        tempImg.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        tempImg.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        tempImg.src = "images/mist.png"
    }
    
    document.querySelector(".card").style.display = "block";
    }

}


searchBtn.addEventListener("click",()=>{
    checkWeather(search.value);
})


// checkWeather("kathmandu").then(data => {
//     console.log(data); // Output the weather data for London
// }).catch(error => {
//     console.error('Error fetching weather data:', error);
// });