export interface WeatherResponse {
    cityName: string;
    countryCode: string;
    data: WeatherData[];
    lat: string;
    lon: string;
    state_code: string;
    timezone: string;
  }
  
  export interface WeatherData {
    datetime: string;
    dewpt: number;
    high_temp: number;
    low_temp: number;
    max_dhi: null | number;
    max_temp: number;
    min_temp: number;
    temp: number;
    valid_date: string;
    weather: Weather;
  }
  
  export interface Weather {
    description: string;
    code: number;
    icon: string;
  }
  