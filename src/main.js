import "./style.css";
import header from "../components/Header";
import search from "../components/Search";

document.querySelector("#app").innerHTML = `
 <main class="main">
    ${header()}
    ${search()}
 </main>
`;
