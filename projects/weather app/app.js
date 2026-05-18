let search = document.querySelector(".search_box");
let cityName= document.querySelector(".weather_city");
let dateTime= document.querySelector(".weather_time");
let forecast= document.querySelector(".weather_forecast");
let wIcon = document.querySelector(".weather_icon");
let temperature= document.querySelector(".weather_temp");
let wMin= document.querySelector(".weather_min");
let wMax= document.querySelector(".weather_max");
let newDate = document.querySelector(".weather_time");
let feel = document.querySelector(".Feels");
let whumidity = document.querySelector(".hum");
let windf = document.querySelector(".wind");
let  wpressure = document.querySelector(".pressure");
let body = document.querySelector("body")

let city = "lahore";

const getData = async(params)=> {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=16bb5f97e25fdcafbd2a73dbcd6ab46b`;
  
  try{
   const res = await fetch (url);
   const pdata = await res.json();
   console.log(pdata);
   const {main, name, sys, weather,wind, dt }=pdata;
    

   // Date convert karne ka sahi tarika
   const date = new Date(dt * 1000); 
   dateTime.innerHTML = date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
   });

   cityName.innerHTML = `${name},${sys.country}`; 
   temperature.innerHTML= `${Math.floor(main.temp)}&#176 `;
   wMin.innerHTML= `Min:${main.temp_min.toFixed()}&#176`;
      wMax.innerHTML= `Max:${main.temp_max.toFixed()}&#176`;
      feel.innerHTML = `Feels Like: ${main.feels_like.toFixed()}&#176C`;
      forecast.innerHTML= weather[0].main;
  windf.innerHTML = `Speed: ${wind.speed.toFixed()} km/h`;
  whumidity.innerHTML = `Humidity:${main.humidity}%`;

  wpressure.innerHTML =`Pr: ${main.pressure.toFixed()} hPa`;
   wIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weather[0].icon}@4x.png" />`;
    cityName.innerHTML = `${name}, ${new Intl.DisplayNames(['en'], { type: 'region' }).of(sys.country)}`;

  }
  
  catch(err){
    console.log("error")
  }
 
}
search.addEventListener('submit',(e)=>{
  e.preventDefault();
  let input = document.querySelector("input");
  city = input.value;
console.log(city);
getData();
input.value="";
city="";

})




body.addEventListener("load",getData());














let date = dt;

date  = date.toLocaleString('en-US', {
  weekday: 'long', // "Monday"
  year: 'numeric', // "2026"
  month: 'long',   // "March"
  day: 'numeric',  // "24"
  hour: 'numeric', // "12"
  minute: '2-digit', // "00"
  hour12: true     // AM/PM format
});;

// console.log(date);

