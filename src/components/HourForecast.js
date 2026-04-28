import { getWeatherIcon, roundUpValue, formatDay } from "../utils/utils";

export default function hourforecast(data) {
  const { time, temperature_2m, weather_code } = data.weatherData.hourly;

  const daysOfWeek = {};

  const today = formatDay(data.weatherData.current.time);

  time.forEach((t, i) => {
    const day = formatDay(t);

    const hour = new Date(t).toLocaleTimeString([], {
      hour: "numeric",
    });

    if (!daysOfWeek[day]) {
      daysOfWeek[day] = [];
    }

    daysOfWeek[day].push({
      hour,
      temp: roundUpValue(temperature_2m[i]),
      code: weather_code[i],
    });
  });

  function renderHours(day = today) {
    return daysOfWeek[day]
      .map((key) => {
        return /*html*/ `
    <div class="flex  items-center justify-between  bg-myneutral-600 p-2.5 rounded-small">
      <div class="flex items-center gap-x-2">
        <img src="${getWeatherIcon(key.code)}" alt="" width="40" height="40">
        <p class="text-[20px] font-medium">${key.hour}</p>
      </div>
      <p>${key.temp}&deg;</p>
    </div>
    `;
      })
      .join("");
  }

  const dayOptions = Object.keys(daysOfWeek)
    .map((day) => `<option value="${day}">${day}</option>`)
    .join("");

  setTimeout(() => {
    const selectEl = document.querySelector("#day-select");
    const container = document.querySelector("#hours-container");
    if (!selectEl || !container) return;

    selectEl.addEventListener("change", (e) => {
      container.innerHTML = renderHours(e.target.value);
    });
  }, 0);

  return /*html*/ `
        <section class="mt-9 bg-myneutral-800 py-5 px-4  rounded-small space-y-4">
            <div class="flex items-center justify-between mb-5">
                <h4 class="text-[20px] font-medium">Hourly forecast</h4>
                <div class="bg-myneutral-600 py-1.5 px-5 rounded-small">
                  <select id="day-select">
                    ${dayOptions}
                  </select>
                </div>
            </div>
            
            <div id="hours-container" class="space-y-4">
              ${renderHours()}
            </div> 
        </section>
    `;
}
