import { iconURL } from "../config/config";
import { dailyHourly, datas } from "../interfaces/interface";

export const  showDaily = (data:datas) => {
        const daily = data.daily.map((day:dailyHourly) => {
            return `
            <div class="single-time">
                <h1>${day.title}</h1>
                ${iconURL(day.icon)}
                <h3>${(day.temp).toFixed()}°C</h3>
            </div>
        `
        });
        document.querySelector(".times")!.innerHTML = daily.join(" ");
}