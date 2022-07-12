// all datas 

export interface array {
    icon: string,
    temp: number,
    title: string,
}

export interface search {
    q : string,
    units : string,
}

export interface datas {
    country: string
    daily: [ array],
    deg: number,
    details: string,
    dt: number,
    feels_like: number,
    hourly: [array],
    humidity: number,
    icon: string,
    lat: number,
    lon: number,
    name: string,
    speed: number,
    sunrise: number,
    sunset: number,
    temp: number,
    temp_max:number,
    temp_min: number,
    timezone: number,
}

export interface formatCurrentWeatherType{
    weather : [
        {
            details : string,
            icon : string,
            main : string,
        }
    ],
    coord : {lat :number, lon : number},
    main : {feels_like : number, humidity : number, temp : number, temp_max : number , temp_min: number},
    name : string,
    dt : number,
    sys : {country : string, sunrise : number, sunset : number},
    timezone : number,
    wind : { deg : number, speed :number }
};

export interface dailyHourly{
    title: string,
    icon : string,
    temp : number
}