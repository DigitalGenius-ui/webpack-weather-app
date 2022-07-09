import "./styles/main.scss";
// geoLocation
import { formatWeatherData } from "./config/config"; 

const fetchData = async () => {
    const response = await formatWeatherData({q :"london"});
    console.log(response)
}

fetchData()
