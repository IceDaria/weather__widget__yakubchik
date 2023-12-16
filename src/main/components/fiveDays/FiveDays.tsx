import React from 'react';
import s from './FiveDays.module.scss';
import { Card } from './Card';
import { Day, ForecastData } from '../Types/Types';

// Определяем типы данных
interface FiveDaysProps {
  forecastData: ForecastData | null;
}

export const FiveDays = ({ forecastData }: FiveDaysProps) => {
  
  //  Функция для определения дня недели
  const getDayOfWeek = (date: Date): string => {
    const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    return daysOfWeek[date.getDay()];
  };

  // Функция для форматирования даты
  const formatDayAndMonth = (date: Date): string => {
    const day = date.getDate();
    const monthGenitive = [
      'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
      'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ][date.getMonth()];

    return `${day} ${monthGenitive}`;
  };

  // Убираем из прогноза данные на текущий день
  const today = new Date();
  const fiveDaysFromNow = new Date(today);
  fiveDaysFromNow.setDate(today.getDate() + 5);

  const uniqueDates = new Set<string>();

  const fiveDays: Day[] = forecastData?.list?.filter(item =>
    new Date(item.dt_txt) > today &&
    new Date(item.dt_txt) < fiveDaysFromNow &&
    item.dt_txt.endsWith('0:00:00') &&
    !uniqueDates.has(item.dt_txt)
  )?.map(item => ({
    day: getDayOfWeek(new Date(item.dt_txt)),
    date: formatDayAndMonth(new Date(item.dt_txt)),
    icon_id: item.weather[0]?.icon || 'unknown',
    temp: `${Math.round(item.main.temp - 273.15)}°C`,
    info: item.weather[0]?.description || 'Unknown',
  })) || [];

  // Отрисовываем элемент 
  return (
    <div className={s.fiveDays}>
      {forecastData?.city && forecastData?.city?.name ? (
        // Проверяем, есть ли данные о городе
        <>
          <div className={s.city}>{forecastData.city.name}</div>
          <div className={s.cards}>
            {fiveDays.map((day: Day, index: number) => (
              <Card key={index} day={day} />
            ))}
          </div>
        </>
      ) : (
        <div className={s.error}>Ошибка при получении данных о городе. Попробуйте еще раз.</div>
      )}
    </div>
  );
};