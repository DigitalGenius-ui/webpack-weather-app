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
