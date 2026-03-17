import search from "./Search";
import weatherinfos from "./WeatherInfos";

export default function main() {
  return /*html*/ `
    <main>
        <h1 class="text-center font-medium text-6xl mt-13">
            How's the sky looking today?
        </h1>
        ${search()}
        ${weatherinfos()}
    </main>
    `;
}
