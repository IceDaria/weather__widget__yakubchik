import React, { ChangeEvent } from 'react';
import { globalSVGSelector } from '../../../assets/SVG/globalSVGSelector';
import s from './SearchBar.module.scss';
import { locationType } from '../Types/Types'

interface SearchBarProps {
  searchLocation: (
    event: React.FormEvent<HTMLFormElement>,
    type: string,
    coords?: { latitude: number; longitude: number }
  ) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  getLocation: (event: React.MouseEvent<HTMLButtonElement>, type: string) => void;
  location: string;
}

// Создаём форму для поиска города
const SearchForm = ({ onSubmit, value, onChange }: { onSubmit: (e: React.FormEvent<HTMLFormElement>) => void, value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void }) => (
  <form className={s.search_bar} onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="Введите город..."
      value={value}
      onChange={onChange}
    />
    <button className={s.button}>{React.createElement(globalSVGSelector, { id: 'search' })}</button>
  </form>
);

// Делаем кнопочку для получения текущей геолокации
const GeoButton = ({ onClick }: { onClick: (e: React.MouseEvent<HTMLButtonElement>) => void }) => (
  <button className={s.myGeo} onClick={onClick}>Моё местоположение</button>
);

// Создаём компонент SearchBar, объединяющий SearchForm и GeoButton
const SearchBar = ({ searchLocation, setLocation, getLocation, location }: SearchBarProps) => {
  return (
    <div className={s.Geo}>
      <SearchForm
        onSubmit={(event) => searchLocation(event, locationType.input)}
        value={location}
        onChange={(event) => setLocation(event.target.value)}
      />
      <GeoButton onClick={(event) => getLocation(event, locationType.geo)} />
    </div>
)};

export default SearchBar;