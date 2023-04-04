
let apiKey = "HBz3cXKnlKLqfv6yHGdwaELiENCBBebO"

let userlocation 

let tempratureContainer = document.getElementById("temprature")

let locationContainer = document.getElementById("location")

let condtionsContainer = document.getElementById("conditions")

let forcastContainer = document.getElementById("forcastContainer")

let conditionsText = document.getElementById("conditionsText")

let icon = document.createElement("img")

const iconMap = {
  1: "./icons/new/clear-day.svg",
  2: "./icons/new/clear-day.svg",
  3: "./icons/new/clear-day.svg",
  4: "./icons/new/cloudy-1-day.svg",
  5: "./icons/new/cloudy-1-day.svg",
  6: "./icons/new/cloudy-1-day.svg",
  7: "./icons/new/cloudy.svg",
  8: "./icons/new/cloudy.svg",
  9: "./icons/new/cloudy.svg",
  10: "./icons/new/cloudy.svg",
  11: "./icons/new/cloudy.svg",
  12: "./icons/icons8-rain.gif",
  13: "./icons/icons8-rain.gif",
  14: "./icons/icons8-rain.gif",
  15: "./icons/new/thnderstorms.svg",
  16: "./icons/new/thnderstorms.svg",
  17: "./icons/new/thnderstorms.svg",
  18: "./icons/icons8-rain.gif",
  19: "./icons/new/snowy-2.svg",
  20: "./icons/new/snowy-2.svg",
  21: "./icons/new/snowy-2.svg",
  22: "./icons/new/snowy-2.svg",
  23: "./icons/new/snowy-2.svg",
  24: "./icons/new/snowy-2.svg",
  25: "./icons/new/rain-and-sleet-mix.svg",
  26: "./icons/new/rain-and-sleet-mix.svg",
  27: "./icons/new/rain-and-sleet-mix.svg",
  28: "./icons/new/rain-and-sleet-mix.svg",
  29: "./icons/new/rain-and-sleet-mix.svg",
  30: "./icons/new/clear-day.svg",
  31: "./icons/new/clear-day.svg",
  32: "./icons/new/wind.svg",
  33: "./icons/new/clear-night.svg",
  34: "./icons/new/clear-night.svg",
  35: "./icons/new/cloudy-1-night.svg",
  36: "./icons/new/cloudy-1-night.svg",
  37: "./icons/new/cloudy-1-night.svg",
  38: "./icons/new/cloudy-1-night.svg",
  39: "./icons/new/rainy-2.svg",
  40: "./icons/new/rainy-2.svg",
  41: "./icons/new/thunderstorms.svg",
  42: "./icons/new/thunderstorms.svg",
  43: "./icons/new/wind.svg",
  44: "./icons/new/snowy-1.svg",
}

async function getData(userInput) {
  let url = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${userInput}`
  let response = await fetch(url) 
  let data = await response.json()
  let locationKey = data[0].Key
  getWeather(locationKey)
  getForcast(locationKey)
  getTime()
  // toggle class of forcastContainer.

  forcastContainer.classList.toggle("hide-forcast")
}

async function getWeather(loco) {
  let weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/${loco}?apikey=${apiKey}`
  let weatherResponse = await fetch(weatherUrl)
  let weatherData = await weatherResponse.json()

  let temp = weatherData[0].Temperature.Metric.Value
  let unit = weatherData[0].Temperature.Metric.Unit
  // get weathercode from api

  let desciption = weatherData[0].WeatherText

  let weatherIcon = weatherData[0].WeatherIcon

  icon.src = iconMap[weatherIcon]
  condtionsContainer.appendChild(icon)

  conditionsText.innerHTML = `${desciption}`

  tempratureContainer.innerHTML = `${temp}\u00B0 ${unit}`
  locationContainer.innerHTML = `${userlocation}`
  
}

async function getForcast(locoTwo) {
  let forcastUrl = `https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locoTwo}?apikey=${apiKey}&metric=true`
  let forcastResponse = await fetch(forcastUrl)
  let forcastData = await forcastResponse.json()
  console.log(forcastData)

  let onehourtemp = forcastData[0].Temperature.Value
  let oneHourIcon = forcastData[0].WeatherIcon

  let oneHourIconImg = document.createElement("img")
  oneHourIconImg.src = iconMap[oneHourIcon]
  document.getElementById('hour1-icon').appendChild(oneHourIconImg)
  document.getElementById('hour1-temprature'). innerHTML = `${onehourtemp}°c`


  let twohourtemp = forcastData[1].Temperature.Value
  let twoHourIcon = forcastData[1].WeatherIcon

  let twoHourIconImg = document.createElement("img")
  twoHourIconImg.src = iconMap[twoHourIcon]
  document.getElementById('hour2-icon').appendChild(twoHourIconImg)
  document.getElementById('hour2-temprature'). innerHTML = `${twohourtemp}°c`

  let threehourtemp = forcastData[2].Temperature.Value
  let threeHourIcon = forcastData[2].WeatherIcon

  let threeHourIconImg = document.createElement("img")
  threeHourIconImg.src = iconMap[threeHourIcon]
  document.getElementById('hour3-icon').appendChild(threeHourIconImg)
  document.getElementById('hour3-temprature'). innerHTML = `${threehourtemp}°c`

  let fourhourtemp = forcastData[3].Temperature.Value
  let fourHourIcon = forcastData[3].WeatherIcon

  let fourHourIconImg = document.createElement("img")
  fourHourIconImg.src = iconMap[fourHourIcon]
  document.getElementById('hour4-icon').appendChild(fourHourIconImg)
  document.getElementById('hour4-temprature'). innerHTML = `${fourhourtemp}°c`

  let fivehourtemp = forcastData[4].Temperature.Value
  let fiveHourIcon = forcastData[4].WeatherIcon

  let fiveHourIconImg = document.createElement("img")
  fiveHourIconImg.src = iconMap[fiveHourIcon]
  document.getElementById('hour5-icon').appendChild(fiveHourIconImg)
  document.getElementById('hour5-temprature'). innerHTML = `${fivehourtemp}°c`

  let sixhourtemp = forcastData[5].Temperature.Value
  let sixHourIcon = forcastData[5].WeatherIcon

  let sixHourIconImg = document.createElement("img")
  sixHourIconImg.src = iconMap[sixHourIcon]
  document.getElementById('hour6-icon').appendChild(sixHourIconImg)
  document.getElementById('hour6-temprature'). innerHTML = `${sixhourtemp}°c`

}

function getTime() {
  let time = new Date()
  let hours = time.getHours()
  
  document.getElementById('hour1-time').innerHTML = `Now`
  document.getElementById('hour2-time').innerHTML = `${(hours + 1) % 24}`
  document.getElementById('hour3-time').innerHTML = `${(hours + 2) % 24}`
  document.getElementById('hour4-time').innerHTML = `${(hours + 3) % 24}`
  document.getElementById('hour5-time').innerHTML = `${(hours + 4) % 24}`
  document.getElementById('hour6-time').innerHTML = `${(hours + 5) % 24}`
}


let button = document.getElementById("enter")

button.addEventListener("click", function() {
  userlocation = document.getElementById("locationInput").value
  getData(userlocation)
})



