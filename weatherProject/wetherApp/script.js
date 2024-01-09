const apiKey='0e6622d1d25eae1486cf81005ff7f6e5';
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl +city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) +"°c";
    document.querySelector('.humidity').innerHTML=data.main.humidity+"%";
    document.querySelector('.wind').innerHTML=data.wind.speed+" km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src ="D:/weatherProject/weather-app-img/images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src ="D:/weatherProject/weather-app-img/images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src ="D:/weatherProject/weather-app-img/images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src ="D:/weatherProject/weather-app-img/images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src ="D:/weatherProject/weather-app-img/images/mist.png";
    }

    document.querySelector(".weather").style.display="block";
}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})




