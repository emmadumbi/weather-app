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
        <button class="bg-myneutral-800 rounded-md px-2 space-x-1 py-1.5 flex items-center ">
          <img src="${iconUnit}" alt="">
          <span class="text-[14px]">Units</span>
          <img src="${dropDownIcon}" alt="">
        </button>
      </section>

      <section class="bg-myneutral-800 absolute z-10 right-[5%] top-[10%] w-[55%] p-2 rounded-[10px]">
        <p class=" text-myneutral-200">Switch to Imperial</p>
        <!-- temperature -->
        <div class="section-label mt-2 text-[14px] text-myneutral-300 font-semibold">Temperature</div>
        <!-- celsuis -->
        <div class="option selected" data-group="temp"    data-value="metric" onclick="">
          <span>Celsius (°C)</span><img src="${checkMark}" alt="">
        </div>
        <!-- fahrenheit -->
        <div class="option" data-group="temp" data-value="imperial" onclick="selectOne(this)">
          <span>Fahrenheit (°F)</span><img src="${checkMark}" alt="">
        </div>
 
        <div class="divider"></div>

        <!-- wind speed -->
        <div class="section-label mt-2 text-[14px] text-myneutral-300 font-semibold">Wind Speed</div>
        <!-- km/h -->
        <div class="option selected" data-group="wind" data-value="metric" onclick="selectOne(this)">
          <span>km/h</span><img src="${checkMark}" alt="">
        </div>
        <!-- mph -->
        <div class="option" data-group="wind" data-value="imperial" onclick="selectOne(this)">
          <span>mph</span><img src="${checkMark}" alt="">
        </div>
 
        <div class="divider"></div>

        <!-- Precipitation -->
        <div class="section-label mt-2 text-[14px] text-myneutral-300 font-semibold">Precipitation</div>
        <!-- mm -->
        <div class="option selected" data-group="precip" data-value="metric" onclick="selectOne(this)">
          <span>Millimeters (mm)</span><img src="${checkMark}" alt="">
        </div>
        <!-- inch -->
        <div class="option" data-group="precip" data-value="imperial" onclick="selectOne(this)">
          <span>Inches (in)</span><img src="${checkMark}" alt="">
        </div>
        <!-- <div>
          <p>Temperature</p>
          <button>
            Celsius(&deg;C)
            <img src="${checkMark}" alt="">
          </button>
          <button>
            Fahrenheit(&deg;F)
          </button>
        </div>

        <hr>

        <div>
          <p>Wind Speed</p>
          <button>
            km/h
            <img src="${checkMark}" alt="">
          </button>
          <button>
            mph
          </button>
        </div>
        
        <hr>

        <div>
          <p>Precipitation</p>
          <button>
            Millimeters(mm)
            <img src="${checkMark}" alt="">
          </button>
          <button>
            Inches(in)
          </button>
        </div> -->
      </section>
    </header>
  `;
}
