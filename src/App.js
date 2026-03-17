import "./style.css";
import header from "../components/Header";
import main from "../components/Main";

document.querySelector("#app").innerHTML = `
 <div>
    ${header()}
    ${main()}
 </div>
`;
