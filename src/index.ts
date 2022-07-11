import "./styles/main.scss";
import { formatWeatherData } from "./config/config"; 
import { weatherUI } from "./components/showTemp";
import { showHourly } from "./components/showHourly";
import { showDaily } from "./components/showDaily";
const button = document.querySelector(".button");
const search = document.querySelector(".search") as HTMLInputElement;
const searchBtn = document.querySelector(".searchBtn");
const gps = document.querySelector(".gps");

// temperature name change 
let unite = document.querySelector(".units");
let active = true;
let searchParam = {q : "kabul"};
let units = "metric";

// fetch the data 
async function fetchData() {
    await formatWeatherData({...searchParam, units}).then((response) => {
        weatherUI(response);
        // showDaily(data)
        showHourly(response);
    })
}

// change the temperature 
button?.addEventListener("click", () => {
    if(active){
        unite?.classList.add("transform");
        active = false;
        // temperature name change 
        unite!.textContent = "F";
        units = "imperial"
        fetchData();
        document.querySelector(".times")!.innerHTML = "";
    }else{
        unite?.classList.remove("transform");
        active = true;
        unite!.textContent = "C";
        units = "metric"
        fetchData();
        document.querySelector(".times")!.innerHTML = "";
    }
});

// search input handler 
searchBtn?.addEventListener("click", () => {
    searchParam = {q : search.value}
    document.querySelector(".times")!.innerHTML = "";
    fetchData();
    search.value = "";
});

// once the browser is loaded 
window.addEventListener("DOMContentLoaded", () => {
    fetchData();
});


