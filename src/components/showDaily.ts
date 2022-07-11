import { iconURL } from "../config/config";

export const  showDaily = (data:any) => {
    for (const hour of data.daily ){
        const daily =  `
        <div class="single-time">
        <h1>${hour.title}</h1>
        ${iconURL(hour.icon)}
        <h3>${(hour.temp).toFixed()}°</h3>
        </div>
        `
        document.querySelector(".times")!.innerHTML += daily;
    }
}