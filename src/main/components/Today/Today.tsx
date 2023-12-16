import React, { useEffect, useCallback } from 'react';
import s from './Today.module.scss';
import { CardsSVGSelector } from '../../../assets/SVG/CardsSVGSelector';
import { WeatherData } from '../Types/Types'; // Импортируем типы данных

// Определяем тип данных, которые приходят их АПИ
interface TodayProps {
  data: WeatherData | null;
}

export const Today = ({ data }: TodayProps) => {

  const getFormattedTimeCallback = useCallback(getFormattedTime, []);

  useEffect(() => {
    // Устанавливаем интервал обновления времени каждую минуту
    const intervalId = setInterval(() => {
      // Вызывайте функцию напрямую, не сохраняя результат в переменную, если она не используется далее
      getFormattedTimeCallback();
    }, 60000);

    // Очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [getFormattedTimeCallback]);
  
  // Функция для форматирования времени
  function formatTime(date: Date, timezoneOffset: number = 0): string {
    const utcTime = date.getTime() + date.getTimezoneOffset() * 60000;
    const localTime = new Date(utcTime + timezoneOffset * 1000);
    const hours = localTime.getHours().toString().padStart(2, "0");
    const minutes = localTime.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  // Функция для получения форматированного времени
  function getFormattedTime(): string {
    const now = new Date();
    return formatTime(now);
  }

  // Функция для получения времени в местной временной зоне, полученной из АПИ
  function getLocalTime(cityTimeZoneOffset: number): string {
    const now = new Date();
    return formatTime(now, cityTimeZoneOffset);
  }

  // Создаём элемент
  return (
    <div className={s.today}>
      <div className={s.top_info}>
        <div className={s.city}>{data?.name || 'Город не найден'}</div>
        <div className={s.time}>{getLocalTime(data?.timezone || 0)}</div>
      </div>
      <div className={s.bottom_info}>
        <div className={s.wrapper}>
          <div className={s.temp}>{data?.main?.temp !== undefined ? Math.round(data?.main?.temp - 273.15) : 0}</div>
          <div className={s.image}>
            {React.createElement(CardsSVGSelector, { id: data?.weather?.[0]?.icon || '' })}
          </div>
        </div>
        <div className={s.theday}>Сегодня</div>
      </div>
    </div>
  );
};