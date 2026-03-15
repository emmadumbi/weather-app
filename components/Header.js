import headerIcon from "../src/assets/images/logo.svg";

export default function header() {
  return /*html*/ `
    <section class="flex  items-center pt-4 justify-between">
        <div class="w-[40%]">
          <img src="${headerIcon}"/>
        </div>
        <button class="bg-myneutral-800 rounded-md px-6 py-1 flex items-center">
          Units
        </button>
    </section>
    <section>
      <h1 class="text-center font-medium text-6xl mt-13">How's the sky looking today?</h1>
    </section>
  `;
}
