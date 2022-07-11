import { formatLuxon, iconURL } from "../config/config";
export const weatherUI = (data:any) => {
    let bodyText = `
        <div class="left-weather">
        <h1>${data.name + " | " + data.country}</h1>
        <p class="date">${formatLuxon(data.dt, data.timezone)}</p>
        <div class="situation">
            ${iconURL(data.icon)}
            <h4>${data.details}</h4>
        </div>
        </div>
        <div class="right-weather">
            <h1>${(data.temp).toFixed()}°</h1>
            <p>${(data.temp_max).toFixed()}°/<span>${(data.temp_min).toFixed()}°</span></p>
        </div>
    `
    document.querySelector(".body")!.innerHTML = bodyText;
}