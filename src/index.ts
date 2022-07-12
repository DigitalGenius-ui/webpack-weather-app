import "./styles/main.scss";
import { formatWeatherData } from "./config/config"; 
import { weatherUI } from "./components/showTemp";
import { showDaily } from "./components/showDaily";
import { showHourly } from "./components/showHourly";
const button = document.querySelector(".button");
const search = document.querySelector(".search") as HTMLInputElement;
const searchBtn = document.querySelector(".searchBtn");
const footer = document.querySelector(".footer");

// temperature name change 
let unite = document.querySelector(".units");
let active = true;
let searchParam = {q : "Kabul"};
let units = "metric";
let show = true;

// fetch the data 
async function fetchData() {
    await formatWeatherData({...searchParam, units}).then((response) => {
        weatherUI(response);
        if(show){
            showDaily(response);
        }else{
            showHourly(response);
        }
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

// change form daily to hourly and repeat.
footer?.addEventListener("click", (e) => {
    const target = e.target as HTMLInputElement;
    if(target?.classList.contains("hourly")){
        show = false;
        fetchData();
        document.querySelector(".times")!.innerHTML = "";
    }
    if(target?.classList.contains("daily")){
        show = true;
        fetchData();
        document.querySelector(".times")!.innerHTML = "";
    }
});



// once the browser is loaded 
window.addEventListener("DOMContentLoaded", () => {
    fetchData();
});


