/** import axios from 'axios';
 
import { Coordinates, WeatherData, ForecastData, locationType, PositionError } from './Types/Types';

const apiKey = "eddb3b060973a97fea8bcfaf7cb86b49";

export const getLocation = (
  onSuccess: (coords: Coordinates) => void,
  onError: (error: PositionError) => void
): void => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        onSuccess({ latitude, longitude });
      },
      (error) => {
        onError(error);
      }
    );
  } else {
    console.log("Геолокация не поддерживается браузером");
  }
};

export const searchLocation = async (
  location: string,
  type: string,
  coords: Coordinates,
  setData: React.Dispatch<React.SetStateAction<WeatherData | null>>,
  setForecastData: React.Dispatch<React.SetStateAction<ForecastData | null>>,
  setLocation: React.Dispatch<React.SetStateAction<string>>
): Promise<void> => {
  let locationParams;
  if (type === locationType.input) {
    locationParams = `q=${location}`;
  } else {
    locationParams = `lat=${coords.latitude}&lon=${coords.longitude}`;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${locationParams}&appid=${apiKey}&lang=ru`;

  try {
    const response = await axios.get(apiUrl);
    setData(response.data);
  } catch (error) {
    console.error("Ошибка при получении текущей погоды", error);
    throw error;
  }

  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?${locationParams}&appid=${apiKey}&lang=ru`;

  try {
    const response = await axios.get(urlForecast);
    setForecastData(response.data);
  } catch (error) {
    console.error("Ошибка при получении прогноза погоды", error);
    throw error;
  }

  setLocation("");
};
*/

export {}