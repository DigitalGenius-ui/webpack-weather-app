import { iconURL } from "../config/config";
import { dailyHourly, datas } from "../interfaces/interface";
export const  showHourly = (data:datas) => {
    console.log(data);
        const hourly = data.hourly.map((hour:dailyHourly) => {
            return `
                <div class="single-time">
                    <h1>${hour.title}</h1>
                    ${iconURL(hour.icon)}
                    <h3>${(hour.temp).toFixed()}°<span class="deg">C</span></h3>
                </div>
            `
        }) 
        document.querySelector(".times")!.innerHTML = hourly.join(" ");
}