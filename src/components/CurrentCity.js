import sunIcon from "../assets/images/icon-sunny.webp";

import { roundUpValue } from "../utils/utils";

export default function currentcity(data) {
  const {
    apparent_temperature,
    precipitation,
    relative_humidity_2m,
    temperature_2m,
    wind_speed_10m,
    time,
  } = data.weatherData.current;

  const formateDate = new Date(time).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return /*html*/ `
        <section>
            <div class="current_city-card">
                <div class="flex flex-col items-center gap-y-2">
                    <h2 class="text-[30px] text-center font-bold leading-tight">${data.name}, ${data.country}</h2>
                    <p class="text-[18px] text-myneutral-200">${formateDate}</p>
                </div> 
                <div class="flex items-center gap-5">
                    <img src="${sunIcon}" alt="" width="120" height="120">
                    <div class="text-[96px] italic font-bold"><span>${roundUpValue(temperature_2m)}</span>&deg;</div>
                </div>
            </div>
            <div class="two_col-grid">
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Feels Like</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>${roundUpValue(apparent_temperature)}</span>&deg;
                    </div>
                </div>
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Humidity</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>${roundUpValue(relative_humidity_2m)}</span>&percnt;
                    </div>
                </div>
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Wind</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>${roundUpValue(wind_speed_10m)}</span> mph
                    </div>
                </div>
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Precipitation</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>${roundUpValue(precipitation)}</span> in
                    </div>
                </div>
            </div>
        </section>

    `;
}
