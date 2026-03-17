export default function search() {
  return /*html*/ `
    <section class="flex flex-col mt-8">
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search for a place..."
      class="placeholder:text-myneutral-0 bg-myneutral-800 pl-4 py-5"
    />
    <button type="submit" class="">
      Search
    </button>
  </section>
 `;
}
