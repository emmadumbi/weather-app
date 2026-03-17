import currentcity from "./CurrentCity";
import hourforecast from "./HourForecast";

export default function weatherinfos() {
  return /*html*/ `
        <section>
            ${currentcity()}
            ${hourforecast()}
        </section>
    `;
}
