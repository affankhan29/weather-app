const APIKey='&appid=3b1c6a77fb70339211c28097d0c70065';
const APIurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const searchbox= document.querySelector('#search-input')
const searchBtn= document.querySelector('#search-btn')
async function checkWeather(city){
    const response = await fetch(APIurl+city+APIKey);
    if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }
    else{
        const data = await response.json();
        console.log(data);
        document.querySelector('.city').innerHTML=data.name;
        document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°C';
        document.querySelector('.wind').innerHTML=data.wind.speed+' Km/h';
        document.querySelector('.humidity').innerHTML=data.main.humidity+' %';
        document.querySelector('.weather-img').src=`images/${(data.weather[0].main).toLowerCase()}.png`;
        document.querySelector('.weather').style.display='block';
        document.querySelector('.error').style.display='none';
        
    }
    }

searchBtn.addEventListener('click',()=>{
    checkWeather(searchbox.value);
})
