import search from "./Search";

export default function main() {
  return /*html*/ `
    <main>
        <h1 class="text-center font-medium text-6xl mt-13">
            How's the sky looking today?
        </h1>
        ${search()}
        <section>
            <div id="current-city"></div>
            <div id="daily-forecast"></div>
            <div id="hour-forecast"></div>
        </section>
        
    </main>
    `;
}
