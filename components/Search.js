import SearchIcon from "../src/assets/images/icon-search.svg";

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
