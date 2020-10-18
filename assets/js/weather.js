// selects classes in weather container
const weatherIconMayo = document.querySelector(".weather-icon-mayo");
const locationMayo = document.querySelector(".location-mayo h2");
const temperatureMayo = document.querySelector(".temperature-value-mayo p")
const weatherDescriptionMayo = document.querySelector(".weather-description-mayo h2");

//  cork weather data variables
const locationCork = document.querySelector(".location-cork h2");
const temperatureCork = document.querySelector(".temperature-value-cork p");
const weatherIconCork = document.querySelector(".weather-icon-cork")
const weatherDescriptionCork = document.querySelector(".weather-description-cork h2")

// // wexford weather data variables
const locationWexford = document.querySelector(".location-wexford h2");
const temperatureWexford = document.querySelector(".temperature-value-wexford p");
const weatherIconWexford = document.querySelector(".weather-icon-wexford")
const weatherDescriptionWexford = document.querySelector(".weather-description-wexford h2")

// galway weather data variables
const locationGalway = document.querySelector(".location-galway h2");
const temperatureGalway = document.querySelector(".temperature-value-galway p");
const weatherIconGalway = document.querySelector(".weather-icon-galway")
const weatherDescriptionGalway = document.querySelector(".weather-description-galway h2")

// donegal weather data variables
const locationDonegal = document.querySelector(".location-donegal h2");
const temperatureDonegal = document.querySelector(".temperature-value-donegal p");
const weatherIconDonegal = document.querySelector(".weather-icon-donegal")
const weatherDescriptionDonegal = document.querySelector(".weather-description-donegal h2")

// clare weather data variables
const locationClare = document.querySelector(".location-clare h2");
const temperatureClare = document.querySelector(".temperature-value-clare p");
const weatherIconClare = document.querySelector(".weather-icon-clare")
const weatherDescriptionClare = document.querySelector(".weather-description-clare h2")

// clare weather data variables
const locationRoscommon = document.querySelector(".location-roscommon h2");
const temperatureRoscommon = document.querySelector(".temperature-value-roscommon p");
const weatherIconRoscommon = document.querySelector(".weather-icon-roscommon")
const weatherDescriptionRoscommon = document.querySelector(".weather-description-roscommon h2")

// meath weather data variables
const locationMeath = document.querySelector(".location-meath h2");
const temperatureMeath = document.querySelector(".temperature-value-meath p");
const weatherIconMeath = document.querySelector(".weather-icon-meath")
const weatherDescriptionMeath = document.querySelector(".weather-description-meath h2")

// kilkenny weather data variables
const locationKilkenny = document.querySelector(".location-kilkenny h2");
const temperaturekilkenny = document.querySelector(".temperature-value-kilkenny p");
const weatherIconkilkenny = document.querySelector(".weather-icon-kilkenny")
const weatherDescriptionKilkenny = document.querySelector(".weather-description-kilkenny h2")

// waterford weather data variables
const locationWaterford = document.querySelector(".location-waterford h2");
const temperatureWaterford = document.querySelector(".temperature-value-waterford p");
const weatherIconWaterford = document.querySelector(".weather-icon-waterford")
const weatherDescriptionWaterford = document.querySelector(".weather-description-waterford h2")

//Api Key
const apikey = "63c8b1fa1a39854758cf744905f25dcd";

// city location id
let cityId = [
  2962666, // county mayo
  2965139, // county cork
  2960963, // county wexforf
  2964179, // county galway
  2964751, // county donegal
  2965479, // county clare
  2961731, // county roscommon
  2962661, // county meath
  2963397, // county kilkenny
  2960991 //  county waterford
];

getWeather = () => {
  let api = `https://api.openweathermap.org/data/2.5/group?id=${cityId}&appid=${apikey}&units=metric`;
  console.log(api);

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(data => {
      let weatherListData = data.list;
      const locationValue = weatherListData.filter((location) => {
        if (location.name === "County Mayo") {
          locationMayo.innerHTML = weatherListData[0].name;
          weatherIconMayo.innerHTML = `<img id="weather-icon" src="../assets/images/weather-icons/${weatherListData[0].weather[0].icon}.svg" alt="">`
          weatherDescriptionMayo.innerHTML = weatherListData[0].weather[0].description;
          temperatureMayo.innerHTML = Math.round(weatherListData[0].main.temp);
          temperatureMayo.innerHTML += '˚<span>C</span>';

        } else if (location.name === "County Cork") {
          locationCork.innerHTML = weatherListData[1].name;
          weatherIconCork.innerHTML = `<img  src="../assets/images/weather-icons/${weatherListData[1].weather[0].icon}.svg" alt="">`
          weatherDescriptionCork.innerHTML = weatherListData[1].weather[0].description;
          temperatureCork.innerHTML = Math.round(weatherListData[1].main.temp);
          temperatureCork.innerHTML += '˚<span>C</span>';

        } else if (location.name === "County Wexford") {
          locationWexford.innerHTML = weatherListData[2].name;
          weatherIconWexford.innerHTML = `<img  src="../assets/images/weather-icons/${weatherListData[2].weather[0].icon}.svg" alt="">`
          weatherDescriptionWexford.innerHTML = weatherListData[2].weather[0].description;
          temperatureWexford.innerHTML = Math.round(weatherListData[2].main.temp);
          temperatureWexford.innerHTML += '˚<span>C</span>';

        } else if (location.name === "County Galway") {
          locationGalway.innerHTML = weatherListData[3].name;
          weatherIconGalway.innerHTML = `<img  src="../assets/images/weather-icons/${weatherListData[3].weather[0].icon}.svg" alt="">`
          weatherDescriptionGalway.innerHTML = weatherListData[3].weather[0].description;
          temperatureGalway.innerHTML = Math.round(weatherListData[3].main.temp);
          temperatureGalway.innerHTML += '˚<span>C</span>';

        } else if (location.name === "County Donegal") {
          locationDonegal.innerHTML = weatherListData[4].name;
          weatherIconDonegal.innerHTML = `<img  src="../assets/images/weather-icons/${weatherListData[4].weather[0].icon}.svg" alt="">`
          weatherDescriptionDonegal.innerHTML = weatherListData[4].weather[0].description;
          temperatureDonegal.innerHTML = Math.round(weatherListData[4].main.temp);
          temperatureDonegal.innerHTML += '˚<span>C</span>';

        } else if (location.name === "County Clare") {
          locationClare.innerHTML = weatherListData[5].name;
          weatherIconClare.innerHTML = `<img  src="../assets/images/weather-icons/${weatherListData[5].weather[0].icon}.svg" alt="">`
          weatherDescriptionClare.innerHTML = weatherListData[5].weather[0].description;
          temperatureClare.innerHTML = Math.round(weatherListData[5].main.temp);
          temperatureClare.innerHTML += '˚<span>C</span>';

        } else if (location.name === "County Roscommon") {
          locationRoscommon.innerHTML = weatherListData[6].name;
          weatherIconRoscommon.innerHTML = `<img  src="../assets/images/weather-icons/${weatherListData[6].weather[0].icon}.svg" alt="">`
          weatherDescriptionRoscommon.innerHTML = weatherListData[6].weather[0].description;
          temperatureRoscommon.innerHTML = Math.round(weatherListData[6].main.temp);
          temperatureRoscommon.innerHTML += '˚<span>C</span>';

        } else if (location.name === "County Meath") {
          locationMeath.innerHTML = weatherListData[7].name;
          weatherIconMeath.innerHTML = `<img  src="../assets/images/weather-icons/${weatherListData[7].weather[0].icon}.svg" alt="">`
          weatherDescriptionMeath.innerHTML = weatherListData[7].weather[0].description;
          temperatureMeath.innerHTML = Math.round(weatherListData[7].main.temp);
          temperatureMeath.innerHTML += '˚<span>C</span>';

        } else if (location.name === "County Kilkenny") {
          locationKilkenny.innerHTML = weatherListData[8].name;
          weatherIconkilkenny.innerHTML = `<img  src="../assets/images/weather-icons/${weatherListData[8].weather[0].icon}.svg" alt="">`
          weatherDescriptionKilkenny.innerHTML = weatherListData[8].weather[0].description;
          temperaturekilkenny.innerHTML = Math.round(weatherListData[8].main.temp);
          temperaturekilkenny.innerHTML += '˚<span>C</span>';

        } else if (location.name === "County Waterford") {
          locationWaterford.innerHTML = weatherListData[9].name;
          weatherIconWaterford.innerHTML = `<img  src="../assets/images/weather-icons/${weatherListData[9].weather[0].icon}.svg" alt="">`
          weatherDescriptionWaterford.innerHTML = weatherListData[9].weather[0].description;
          temperatureWaterford.innerHTML = Math.round(weatherListData[9].main.temp);
          temperatureWaterford.innerHTML += '˚<span>C</span>';
        }
      });
    });
}
// cal get weather function
getWeather();
