import headerIcon from "../src/assets/images/logo.svg";

export default function header() {
  return /*html*/ `
    <header class="flex  items-center pt-4 justify-between">
        <div class="w-[40%]">
          <img src="${headerIcon}"/>
        </div>
        <button class="bg-myneutral-800 rounded-md px-6 py-1 flex items-center">
          Units
        </button>
    </header>
  `;
}
