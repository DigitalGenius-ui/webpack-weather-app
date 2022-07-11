import { formatCurrentWeatherType } from "../interfaces/interface";

const { DateTime } = require("luxon");

// all in weather api link 
const API_CODE = `e25ee32759521c692ad465ccbead8cd0`;
const BASE_URL = `https://api.openweathermap.org/data/2.5`;


// get all weather data 
const getWeatherData = ( typeInfo : string, searchParam : object) => {
    const url = new URL(BASE_URL + "/" + typeInfo);
    url.search = new URLSearchParams({...searchParam ,appid: API_CODE}).toString();
    return fetch(url).then((res) => res.json());
}

// format weather data 
export const formatWeatherData = async (searchParam : any) => {
    const response = await getWeatherData('weather', searchParam)
    .then(formatCurrentWeather);
    // get full days and hours weather 
    const { lat , lon } = response;
    const formatAllWeather = await getWeatherData("onecall", {
        lat, lon, exclude :"current,minutely,alerts,", units: searchParam.units
    })
    .then(formatWeatherNumbers);
    return {...response, ...formatAllWeather};
}

// format current weather 
const formatCurrentWeather = (data: formatCurrentWeatherType) => {
    const { main:details, icon } = data.weather[0];
    const {
        coord : {lat, lon},
        main : {feels_like, humidity, temp, temp_max, temp_min},
        name,
        dt,
        sys : {country, sunrise, sunset},
        timezone,
        wind : { deg, speed }
    } = data;

    return { lat, lon ,feels_like, humidity, temp, temp_max, temp_min, name,
        country, sunrise, sunset, timezone, deg, speed, details, icon, dt };
}

// format weather number
const formatWeatherNumbers = (data : any) => {
    let { daily, hourly, timezone} = data;
    daily = daily.slice(1,7).map((day:any) => {
        return {
            title : formatLuxon(day.dt, timezone, "ccc"),
            temp : day.temp.day,
            icon : day.weather[0].icon
        }
    })
    hourly = hourly.slice(1, 7).map((day:any) => {
        return {
            title : formatLuxon(day.dt, timezone, "hh:mm a"),
            temp : day.temp,
            icon : day.weather[0].icon
        }
    });

    return {daily, hourly, timezone}
}
// the format is cccc for days name, LLL for month name, yyy for year, hh for hour, mm for minutes, a for am and pm.
// for writing string we need to put a single quotation mark after and before the string.
const formatLuxon = (sec : number, zone: number, format = "c LLL yyyy | 'Local Time : 'hh : mm a") => (
    DateTime.fromSeconds(sec).setZone(zone).toFormat(format)
);

// icons generator.
const iconURL = (code :any) => {
    return `<img src="http://openweathermap.org/img/wn/${code}@2x.png" alt="icon"/>`
}

export { iconURL, formatLuxon }