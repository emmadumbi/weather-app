import { getWeatherIcon, roundUpValue } from "../utils/utils";

export default function dailyforecast(data) {
  const { temperature_2m_max, temperature_2m_min, time, weather_code } =
    data.weatherData.daily;

  const weatherCard = time
    .map((date, i) => {
      const day = new Date(date).toLocaleDateString("en-US", {
        weekday: "short",
      });

      return /*html*/ `
        <div class="bg-myneutral-800 flex flex-col items-center rounded-small px-2 pt-3 space-y-3 pb-4">
            <p class="text-[18px]">${day}</p>
            <span>
                <img src="${getWeatherIcon(weather_code[i])}" alt="" width="60" height="60"> 
            </span>
            <div class="flex justify-between w-full">
                <p><span>${roundUpValue(temperature_2m_max[i])}</span>&deg;</p>
                <p><span>${roundUpValue(temperature_2m_min[i])}</span>&deg;</p>
            </div>
        </div>
    `;
    })
    .join("");

  return /*html*/ `
        <section class="mt-7">
            <h3 class="text-[20px]">Daily forecast</h3>
            <div class="three_col-grid">
                ${weatherCard}
            </div>
        </section>
    `;
}
