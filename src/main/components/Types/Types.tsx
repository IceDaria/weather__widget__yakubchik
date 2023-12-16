export interface Coordinates {
    latitude: number;
    longitude: number;
};

export const locationType = {
    geo: "geo",
    input: "input",
};

/** export interface PositionError {
    code: number;
    message: string;
    PERMISSION_DENIED: number;
    POSITION_UNAVAILABLE: number;
    TIMEOUT: number;
}*/
  
// Определяем типы данных, которые получим из АПИ для погоды на сегодня
export interface WeatherData {
    name: string;
    timezone: number;
    main: {
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
    };
    weather: {
      description: string;
      icon: string;
    }[];
    wind: {
      deg: number;
      speed: number;
    };
}
  
// Определяем типы данных, которые получим из АПИ для погоды на 5 дней
export interface ForecastData {
    list?: {
      dt_txt: string;
      main: {
        temp: number;
      };
      weather: {
        icon: string;
        description: string;
      }[];
    }[] | null;
    city: {
      name: string;
    } | null;
}

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export interface Day {
  day: string;
  date: string;
  icon_id: string;
  temp: string;
  info: string;
}