import iconUnit from "../assets/images/icon-units.svg";
import headerIcon from "../assets/images/logo.svg";
import dropDownIcon from "../assets/images/icon-dropdown.svg";
import checkMark from "../assets/images/icon-checkmark.svg";

export default function header() {
  return /*html*/ `
    <header>
      <section class="flex  items-center relative pt-4 justify-between">
        <div class="w-[40%]">
          <img src="${headerIcon}"/>
        </div>
        <button id="menu-Open" class="bg-myneutral-800 rounded-md px-2 space-x-1 py-1.5 flex items-center ">
          <img src="${iconUnit}" alt="">
          <span class="text-[14px]">Units</span>
          <img class="arrow" id="toggle-arrow" src="${dropDownIcon}" alt="">
        </button>
      </section>

      <section id="units-dropdown" class="hide-units-menu bg-myneutral-800 absolute z-10 right-[5%] top-[10%] w-[55%] p-2 rounded-[10px]">
        <button id="switch-imperial" class=" text-myneutral-200">Switch to Imperial</button>
        <!-- temperature -->
        <div class="section-label mt-2 text-[14px] text-myneutral-300 font-semibold">Temperature</div>
        <!-- celsuis -->
        <button class="option selected" data-group="temp"    data-value="metric">
          <span>Celsius (°C)</span><img src="${checkMark}" alt="">
        </button>
        <!-- fahrenheit -->
        <button class="option" data-group="temp" data-value="imperial">
          <span>Fahrenheit (°F)</span><img src="${checkMark}" alt="">
        </button>
 
        <div class="divider"></div>

        <!-- wind speed -->
        <div class="section-label mt-2 text-[14px] text-myneutral-300 font-semibold">Wind Speed</div>
        <!-- km/h -->
        <button class="option selected" data-group="wind" data-value="metric">
          <span>km/h</span><img src="${checkMark}" alt="">
        </button>
        <!-- mph -->
        <button class="option" data-group="wind" data-value="imperial">
          <span>mph</span><img src="${checkMark}" alt="">
        </button>
 
        <div class="divider"></div>

        <!-- Precipitation -->
        <div class="section-label mt-2 text-[14px] text-myneutral-300 font-semibold">Precipitation</div>
        <!-- mm -->
        <button class="option selected" data-group="precip" data-value="metric">
          <span>Millimeters (mm)</span><img src="${checkMark}" alt="">
        </button>
        <!-- inch -->
        <button class="option" data-group="precip" data-value="imperial">
          <span>Inches (in)</span><img src="${checkMark}" alt="">
        </button>
      </section>
    </header>
  `;
}
