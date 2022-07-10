import "./styles/main.scss";
// geoLocation
import { formatWeatherData } from "./config/config"; 
// import { active, textChange } from "./eventListners/eventListners";
import { weatherUI } from "./components/showTemp";
import { textChange } from "./eventListner.ts/events";
const button = document.querySelector(".button");
const search = document.querySelector(".search") as HTMLInputElement;

// temperature name change 
button?.addEventListener("click", textChange);


let defaultWeather = {q : "kabul"};
let defaultUnite = "metric";

async function fetchData() {
    await formatWeatherData({...defaultWeather, defaultUnite}).then((data) => {
        weatherUI(data);
    });
}

window.addEventListener("DOMContentLoaded", () => {
    fetchData();
});


