import React, { useState, MouseEvent, FormEvent } from 'react';
import axios from 'axios';
import s from './Main.module.scss';
import { Today } from './Today/Today';
import { TodayDetails } from './TodayDetails/TodayDetails';
import { FiveDays } from './fiveDays/FiveDays';
import Tabs from './Tabs/Tabs';
import { Header } from './Header/Header';
import { Coordinates, ForecastData, WeatherData, locationType } from './Types/Types';

const apiKey = "eddb3b060973a97fea8bcfaf7cb86b49";

export function Main() {
  const [activeTab, setActiveTab] = useState<string>('today');
  const [data, setData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [location, setLocation] = useState<string>("");

// Функция для получения текущего местоположения пользователя
  const getLocation = (event: MouseEvent, type: string): void => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          searchLocation(event, type, { latitude, longitude });
        },
        (error) => {
          console.error("Ошибка при получении геолокации", error);
        }
      );
    } else {
      console.log("Геолокация не поддерживается браузером");
    }
  };

// Функция для получения место положения путём ввода города
  const searchLocation = async (
    event: FormEvent,
    type: string,
    coords: Coordinates = { latitude: 0, longitude: 0 }
  ): Promise<void> => {
    event.preventDefault();
    let locationParams;
    if (type === locationType.input) {
      locationParams = `q=${location}`;
    } else {
      locationParams = `lat=${coords.latitude}&lon=${coords.longitude}`;
    }
    // Ссылка на получени прогноза погоды на сегодня
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${locationParams}&appid=${apiKey}&lang=ru`;

    // Ссылка на получени прогноза погоды на 5 дней
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?${locationParams}&appid=${apiKey}&lang=ru`;
  
    try {
      const response = await axios.get(apiUrl);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Ошибка при получении текущей погоды", error);
    }
  
    try {
      const response = await axios.get(urlForecast);
      setForecastData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Ошибка при получении прогноза погоды", error);
    }
  
    setLocation("");
  };

  const handleTabChange = (tab: string): void => {
    setActiveTab(tab);
  };

  return (
    <div className={s.main}>
      <Header
        searchLocation={searchLocation}
        setLocation={setLocation}
        getLocation={getLocation}
        location={location}
      />
      <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
      <div className={s.today_info}>
        {activeTab === 'today' && (
          <>
            <Today data={data} />
            <TodayDetails data={data} />
          </>
        )}
        {activeTab === 'fiveDays' && (<FiveDays forecastData={forecastData} />)}
      </div>
    </div>
  );
}