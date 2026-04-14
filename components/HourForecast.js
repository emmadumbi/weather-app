import SnowIcon from "../src/assets/images/icon-snow.webp";
import weatherdata from "../src/api/WeatherData";

const data = await weatherdata();

console.log(data.hourly);

const { time, temperature_2m } = data.hourly;

const currentDay = time.slice(0, 24);

function roundUp(value) {
  const roundeValue = Math.round(value);
  return roundeValue;
}

const eachHour = currentDay
  .map((hours, index) => {
    const date = new Date(hours);
    const currentHour = date.toLocaleTimeString([], {
      hour: "numeric",
    });

    return /*html*/ `
    <div class="flex items-center justify-between  bg-myneutral-600 p-2.5 rounded-small">
      <div class="flex items-center gap-x-2">
        <img src="${SnowIcon}" alt="" width="40" height="40">
        <p class="text-[20px] font-medium">${currentHour}</p>
      </div>
      <p>${roundUp(temperature_2m[index])}&deg;</p>
    </div>
  `;
  })
  .join("");

export default function hourforecast() {
  return /*html*/ `
        <section class="mt-9 bg-myneutral-800 py-5 px-4  rounded-small space-y-4">
            <div class="flex items-center justify-between mb-5">
                <h4 class="text-[20px] font-medium">Hourly forecast</h4>
                <div class="bg-myneutral-600 py-1.5 px-5 rounded-small"><span>Tuesday</span> <span>&UpArrowDownArrow;</span></div>
            </div>
            ${eachHour}
        </section>
    `;
}
