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

// Add event listener to toggle the units dropdown
document.querySelector("#menu-Open").addEventListener("click", () => {
  const dropdown = document.querySelector("#units-dropdown");
  const toggleArrow = document.querySelector("#toggle-arrow");
  dropdown.classList.toggle("show-units-menu");
  toggleArrow.classList.toggle("arrow");
});

// Add event listeners to toggle selected class on option buttons
const options = document.querySelectorAll(".option");
options.forEach((option) => {
  option.addEventListener("click", () => {
    const group = option.dataset.group;
    // Remove selected from all in the same group
    document
      .querySelectorAll(`[data-group="${group}"]`)
      .forEach((btn) => btn.classList.remove("selected"));
    // Add selected to the clicked option
    option.classList.add("selected");
  });
});

// Add event listener to switch all units to imperial
document.getElementById("switch-imperial").addEventListener("click", () => {
  document.querySelectorAll('[data-value="imperial"]').forEach((btn) => {
    const group = btn.dataset.group;
    document
      .querySelectorAll(`[data-group="${group}"]`)
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

function UpdateUI(data) {
  document.querySelector("#current-city").innerHTML = Currentcity(data);
  document.querySelector("#daily-forecast").innerHTML = Dailyforecast(data);
  document.querySelector("#hour-forecast").innerHTML = Hourforecast(data);
}

searchWeatherData(UpdateUI);

getWeatherData().then(UpdateUI).catch(console.error);
