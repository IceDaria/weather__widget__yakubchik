import React from 'react';
import s from './Header.module.scss';
import SearchBar from '../SearchBar/SearchBar';
import { globalSVGSelector } from '../../../assets/SVG/globalSVGSelector';

interface HeaderProps {
  searchLocation: (
    event: React.FormEvent<HTMLFormElement>,
    type: string,
    coords?: { latitude: number; longitude: number }
  ) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  getLocation: (event: React.MouseEvent<HTMLButtonElement>, type: string) => void;
  location: string;
}

export const Header = ({ searchLocation, setLocation, getLocation, location }: HeaderProps) => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>{React.createElement(globalSVGSelector, { id: 'header_logo' })}</div>
        <div className={s.title}>Weather with <br /> OpenWeather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.search}>
          <SearchBar
            searchLocation={searchLocation}
            setLocation={setLocation}
            getLocation={getLocation}
            location={location}
          />
        </div>
      </div>
    </header>
  );
};