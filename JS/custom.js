var city=document.querySelector('input')
var search_btn=document.querySelector('.search_icon')
var weather_div=document.querySelector('.weather')
var search_div=document.querySelector('.search_city')
const APIKEY='0f2fb94282ad6a3dbf2387c407b74806';
search_btn.addEventListener('click',(e)=>{
    e.preventDefault()
   fetchWeather(city.value)
})
async function fetchWeather(city) {
    const APIURL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
    var weather_API_Response=await fetch(APIURL)
    var weather_json=await weather_API_Response.json()
    if(weather_json.cod=='404'){
         weather_div.innerHTML=''
        document.querySelector('.background').style.display='none'
        weather_div.style.transform='scale(1)'
        weather_div.innerHTML="<span class='invalid'>Invalid Data</span>"
        search_div.style.height='120px'
        search_div.style.transition="1s"
        search_div.style.transform='scaleY(1.1)'
    }
    else{
        weather_div.innerHTML=''
        
         search_div.style.height='550px'
         search_div.style.transition="1s"
         search_div.style.transform='scaleY(1.1)'      
          document.querySelector('.background').style.display='block'

        document.querySelector('.background').classList.add('fadeIn')
        
        weather_div.classList.add('scaleUp')    
        // document.querySelector('.image').classList.add('fadeIn')
        // console.log(weather_json)
        weather_div.innerHTML=
        `<div class="image">   
            <img src="https://openweathermap.org/img/wn/${weather_json.weather[0].icon}@2x.png">
        </div>
        <div class="temp">
            <div class="temp_val">${Math.round(weather_json.main.temp)}<span class="degree"></span></div>
            <div class="city_name">${weather_json.name}</div>
        </div>
        
        <div class="other"> 
            <div>
                <span class="opaque">Wind Now</span>
                <div class="wind_val other_val">${Math.round(weather_json.wind.speed)}</div>
            </div>
            <div>
                 <span class="opaque">Humidity</span>
                <div class="humidity_val other_val">${Math.round(weather_json.main.humidity)}</div>
            </div>
        </div>
        `
    
        

        
        // console.log(document.querySelector('.temp_val').innerHTML)
        
    }
}