import dailyforecast from "./DailyForecast";
import sunIcon from "../src/assets/images/icon-sunny.webp";

export default function currentcity() {
  return /*html*/ `
        <section>
            <div>
                <div>
                    <h2>Berlin, Germany</h2>
                    <p>Tuesday, Aug 5, 2025</p>
                </div> 
                <div>
                    <img src="${sunIcon}" alt="">
                    <div><span>68</span>&deg;</div>
                </div>
            </div>
            <div>
                <div>
                    <p>Feels Like</p>
                    <div>
                        <span>64</span>&deg;
                    </div>
                </div>
                <div>
                    <p>Humidity</p>
                    <div>
                        <span>46</span>&percnt;
                    </div>
                </div>
                <div>
                    <p>Wind</p>
                    <div>
                        <span>9</span> mph
                    </div>
                </div>
                <div>
                    <p>Precipitation</p>
                    <div>
                        <span>0</span> in
                    </div>
                </div>
            </div>
            ${dailyforecast()}
        </section>

    `;
}
