import DrizzleIcon from "../src/assets/images/icon-drizzle.webp";
import weatherdata from "../src/api/WeatherData";

const data = await weatherdata();

console.log(data);

const { temperature_2m_max, temperature_2m_min, time } = data.daily;

function roundUp(value) {
  const roundeValue = Math.round(value);
  return roundeValue;
}

const weatherCard = time
  .map((date, index) => {
    const day = new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
    });

    return /*html*/ `
        <div class="bg-myneutral-800 flex flex-col items-center rounded-small px-2 pt-3 space-y-3 pb-4">
            <p class="text-[18px]">${day}</p>
            <span>
                <img src="${DrizzleIcon}" alt="" width="60" height="60"> 
            </span>
            <div class="flex justify-between w-full">
                <p><span>${roundUp(temperature_2m_max[index])}</span>&deg;</p>
                <p><span>${roundUp(temperature_2m_min[index])}</span>&deg;</p>
            </div>
        </div>
    `;
  })
  .join("");

export default function dailyforecast() {
  return /*html*/ `
        <section class="mt-7">
            <h3 class="text-[20px]">Daily forecast</h3>
            <div class="three_col-grid">
                ${weatherCard}
            </div>
        </section>
    `;
}
