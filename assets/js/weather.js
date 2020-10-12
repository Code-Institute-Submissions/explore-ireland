// selects elements in weather container
const locationElement = document.querySelector(".location-wicklow h2");
const temperatureElement = document.querySelector(".temperature-value p");
const climateElement = document.querySelector(".climate p");
const iconElement = document.querySelector(".weather-icon");

//Api Key
const apikey = "63c8b1fa1a39854758cf744905f25dcd";

// weather locations
// co wicklow [2960935]
// co cork [2965139]
// Co Galway [2964179]
// Co Donegal [2964751]
// Co Clare [2965479]
// Co Roscommon [2961731]
// Co Meath [2962661]
// Co Kilkenny [2963397]

const weather = {};
let weatherTemperature = {
  unit: "celcius"
}
let cityId = [2960935,
  2965139,
  2964179,
  2964751,
  2965479,
  2961731,
  2962661,
  2963397,];
  
function getWeather() {
  let api = `https://api.openweathermap.org/data/2.5/group?id=${cityId}&appid=${apikey}&units=metric`;
  console.log(api);
  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      weatherLocation = data.list[1].name;
      weatherTemperature.value = Math.floor(data.list[1].main.temp);
      weatherClimate = data.list[1].weather[0].description;
      weather.iconId = data.list[1].weather[0].icon;
    })
    .then(displayWeather = () => {
      for (let i = 0; i < cityId.length; i++) {
        console.log(cityId[i]);
        if (cityId.length[i] < 0) {
          return weatherLocation = data.list[5].name;
        }
      }

      locationElement.innerHTML = `Co. ${weatherLocation}`;
      temperatureElement.innerHTML = `${weatherTemperature.value}˚<span>C</spann>`;
      climateElement.innerHTML = weatherClimate;
      iconElement.innerHTML = `<img src="/assets/images/weather-icons/${weather.iconId}.svg"/>`;
    });
}

getWeather();

