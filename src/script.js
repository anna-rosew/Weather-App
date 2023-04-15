let currentTime = new Date();

function formatDay(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}
//date adjustment
function formatDate(date) {
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[monthIndex];
  return `${day} ${month} ${year}`;
}

function citySearch(event) {
  event.preventDefault();
  //let cityHeading = document.querySelector("span#current-location");
  //let cityInput = document.querySelector("#city-input");
  //cityHeading.innerHTML = cityInput.value;
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let cityInput = document.querySelector(`#city-input`);
  let city = cityInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
  let cityHeading = document.querySelector("span#current-location");
  cityHeading.innerHTML = `${city}`;
}

function showWeather(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let tempElement = document.querySelector("span#current-temp-number");
  tempElement.innerHTML = `${temperature}`;
}

let dayTimeElement = document.querySelector("h3#day");
dayTimeElement.innerHTML = formatDay(currentTime);

let dateElement = document.querySelector("h3#date");
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", citySearch);
