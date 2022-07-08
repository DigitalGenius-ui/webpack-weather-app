import "./styles/main.scss";
// font awesome 
import '@fortawesome/fontawesome-free/js/all.js';
// geoLocation
import { formatWeatherData } from "./config/config"; 

const fetchData = async () => {
    const response = await formatWeatherData({q :"london"});
    console.log(response)
}

fetchData();
