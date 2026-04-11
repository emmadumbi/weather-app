import dailyforecast from "./DailyForecast";
import sunIcon from "../src/assets/images/icon-sunny.webp";
import geocoding from "../src/api/Geocoding";
import weatherdata from "../src/api/WeatherData";

const { name, country } = await geocoding();
const data = await weatherdata();

const {
  apparent_temperature,
  precipitation,
  relative_humidity_2m,
  temperature_2m,
  wind_speed_10m,
  time,
} = data.current;

function roundUp(value) {
  const roundedValue = Math.round(value);
  return roundedValue;
}

const formateDate = new Date(time).toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function currentcity() {
  return /*html*/ `
        <section>
            <div class="current_city-card">
                <div class="flex flex-col items-center gap-y-2">
                    <h2 class="text-[30px] text-center font-bold leading-tight">${name}, ${country}</h2>
                    <p class="text-[18px] text-myneutral-200">${formateDate}</p>
                </div> 
                <div class="flex items-center gap-5">
                    <img src="${sunIcon}" alt="" width="120" height="120">
                    <div class="text-[96px] italic font-bold"><span>${roundUp(temperature_2m)}</span>&deg;</div>
                </div>
            </div>
            <div class="two_col-grid">
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Feels Like</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>${roundUp(apparent_temperature)}</span>&deg;
                    </div>
                </div>
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Humidity</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>${roundUp(relative_humidity_2m)}</span>&percnt;
                    </div>
                </div>
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Wind</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>${roundUp(wind_speed_10m)}</span> mph
                    </div>
                </div>
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Precipitation</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>${roundUp(precipitation)}</span> in
                    </div>
                </div>
            </div>
            ${dailyforecast()}
        </section>

    `;
}
