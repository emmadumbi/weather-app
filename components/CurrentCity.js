import dailyforecast from "./DailyForecast";
import sunIcon from "../src/assets/images/icon-sunny.webp";

export default function currentcity() {
  return /*html*/ `
        <section>
            <div class="current_city-card">
                <div class="flex flex-col items-center gap-y-2">
                    <h2 class="text-[30px] font-bold leading-tight">Berlin, Germany</h2>
                    <p class="text-[18px] text-myneutral-200">Tuesday, Aug 5, 2025</p>
                </div> 
                <div class="flex items-center gap-5">
                    <img src="${sunIcon}" alt="" width="120" height="120">
                    <div class="text-[96px] italic font-bold"><span>68</span>&deg;</div>
                </div>
            </div>
            <div class="two_col-grid">
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Feels Like</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>64</span>&deg;
                    </div>
                </div>
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Humidity</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>46</span>&percnt;
                    </div>
                </div>
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Wind</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>9</span> mph
                    </div>
                </div>
                <div class="bg-myneutral-800 px-5 pt-5 pb-4 rounded-small">
                    <p class="text-[18px]">Precipitation</p>
                    <div class="text-[30px] font-light mt-3">
                        <span>0</span> in
                    </div>
                </div>
            </div>
            ${dailyforecast()}
        </section>

    `;
}
