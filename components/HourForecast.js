import SnowIcon from "../src/assets/images/icon-snow.webp";
import weatherdata from "../src/api/WeatherData";

const data = await weatherdata();

const { time, temperature_2m } = data.hourly;

const currentDay = data.current;

const today = new Date(currentDay.time).toLocaleDateString("en-US", {
  weekday: "long",
});

const daysOfWeek = {};

//loops through time object for each day & create an object for each day with its corresponding hours and temp
function setDays() {
  time.forEach((t, i) => {
    const day = new Date(t).toLocaleDateString("en-US", {
      weekday: "long",
    });

    const hour = new Date(t).toLocaleTimeString([], {
      hour: "numeric",
    });

    if (!daysOfWeek[day]) {
      daysOfWeek[day] = [];
    }

    daysOfWeek[day].push({
      hour,
      temp: Math.round(temperature_2m[i]),
    });
  });
}
setDays();

function updateDayCard(day = today) {
  return daysOfWeek[day]
    .map((key) => {
      return /*html*/ `
    <div class="flex  items-center justify-between  bg-myneutral-600 p-2.5 rounded-small">
      <div class="flex items-center gap-x-2">
        <img src="${SnowIcon}" alt="" width="40" height="40">
        <p class="text-[20px] font-medium">${key.hour}</p>
      </div>
      <p>${key.temp}&deg;</p>
    </div>
    `;
    })
    .join("");
}

function updateDaysOption() {
  const keys = Object.keys(daysOfWeek);
  return keys
    .map((key) => {
      return /*html*/ `
        <option value="${key}">${key}</option>
      `;
    })
    .join("");
}

function updateHourlyEvents() {
  const selectEl = document.querySelector("#day-select");
  const container = document.querySelector("#hours-container");
  if (!selectEl) return;

  selectEl.addEventListener("change", (e) => {
    const selectedDay = e.target.value;
    container.innerHTML = updateDayCard(selectedDay);
  });
}

export default function hourforecast() {
  setTimeout(updateHourlyEvents, 0);

  return /*html*/ `
        <section class="mt-9 bg-myneutral-800 py-5 px-4  rounded-small space-y-4">
            <div class="flex items-center justify-between mb-5">
                <h4 class="text-[20px] font-medium">Hourly forecast</h4>
                <div class="bg-myneutral-600 py-1.5 px-5 rounded-small">
                  <select id="day-select">
                    ${updateDaysOption()}
                  </select>
                </div>
            </div>
            
            <div id="hours-container" class="space-y-4">
              ${updateDayCard()}
            </div> 
        </section>
    `;
}
