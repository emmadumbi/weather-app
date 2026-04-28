import "./style.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Currentcity from "./components/CurrentCity";
import Dailyforecast from "./components/DailyForecast";
import Hourforecast from "./components/HourForecast";
import { searchWeatherData, getWeatherData } from "./components/Search";

document.querySelector("#app").innerHTML = `
 <div>
    ${Header()}
    ${Main()}
 </div>
`;

function UpdateUI(data) {
  document.querySelector("#current-city").innerHTML = Currentcity(data);
  document.querySelector("#daily-forecast").innerHTML = Dailyforecast(data);
  document.querySelector("#hour-forecast").innerHTML = Hourforecast(data);
}

searchWeatherData(UpdateUI);

getWeatherData().then(UpdateUI).catch(console.error);
