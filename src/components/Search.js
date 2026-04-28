import SearchIcon from "../assets/images/icon-search.svg";
import geocoding from "../api/Geocoding";

const defaultCity = "abbi";

export async function getWeatherData(city = defaultCity) {
  const data = await geocoding(city);
  return data;
}

export function searchWeatherData(onData) {
  const searchBtn = document.querySelector("#search-btn");
  const input = document.querySelector("#search");

  if (!searchBtn || !input) return;

  searchBtn.addEventListener("click", async () => {
    const city = input.value.trim() || defaultCity;
    try {
      const data = await getWeatherData(city);
      onData(data);
      input.value = "";
    } catch (error) {
      console.log(`city not found`);
    }
  });
}

export default function search() {
  return /*html*/ `
  <section class="flex flex-col space-y-3 mt-13">
    <div class="relative">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a place..."
        class="placeholder:text-myneutral-200 py-4 rounded-small bg-myneutral-800 w-full pl-15 placeholder:text-[20px]"
      />
      <div class="absolute top-[30%] left-[6%]">
        <img src="${SearchIcon}" alt="">
      </div>
    </div>
    
    <button type="submit" id="search-btn" class="bg-blue-500 rounded-small py-3 text-[20px] ">
      Search
    </button>
  </section>
 `;
}
