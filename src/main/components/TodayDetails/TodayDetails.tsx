import React from 'react';
import s from './TodayDetails.module.scss';
import { DetailsItems } from './DetailsItems';
import { Item, WeatherData } from '../Types/Types';

// Определяем тип данные, которые получим из АПИ
interface TodayDetailsProps {
    data?: WeatherData | null;
  }

export const TodayDetails = ({ data }: TodayDetailsProps) => {
    // Форматируем строки температуры
    const formatTemperatureString = () => {
        if (!data) return 'Пожалуйста, укажите город';
        const { temp, feels_like } = data.main;
        const temperature = Math.round(temp - 273.15);
        const feelsLike = Math.round(feels_like - 273.15);
        return `${temperature}°C, ощущается как ${feelsLike}°C`;
    };

// Определяем направление ветра на основе угла в градусах
    const getWindDirection = (degrees: number) => {
        const directions = ['северный', 'северо-восточный', 'восточный', 'юго-восточный', 'южный', 'юго-западный', 'западный', 'северо-западный'];
        const index = Math.round(degrees / 45) % 8;
        return directions[index] || 'Неопределенное направление';
      };

      // Генерация элементов деталей погоды
    const items = [
        {
            icon_id: 'temperature',
            name: 'Температура',
            value: formatTemperatureString(),
        },

        {
            icon_id: 'pressure',
            name: 'Давление',
            value: data ? `${(data.main.pressure * 0.00750062).toFixed(2)} мм ртутного столба` : '-',
        },

        {
            icon_id: 'precipitation',
            name: 'Осадки',
            value: data ? `${data.weather[0].description}` : '-',
        },

        {
            icon_id: 'humidity',
            name: 'Влажность',
            value: data ? `${data.main.humidity}%` : '-',
        },

        {
            icon_id: 'wind',
            name: 'Ветер',
            value: data ? `${getWindDirection(data.wind.deg)}, ${data.wind.speed} м/с` : '-',
        },
];

// Создаём элемент
    return (
        <div className={s.today__details}> {
            items.map((item: Item) => (
            <DetailsItems key={item.icon_id} item={item} />
            
            ))}
        </div>
    )
}