import { iconURL } from "../config/config";
export const  showHourly = (data:any) => {
    for (const hour of data.hourly ){
        const hourly =  `
            <div class="single-time">
            <h1>${hour.title}</h1>
            ${iconURL(hour.icon)}
            <h3>${(hour.temp).toFixed()}°</h3>
            </div>
        `
        document.querySelector(".times")!.innerHTML += hourly;
    }
}