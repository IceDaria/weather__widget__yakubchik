import React from 'react';
import s from './Tabs.module.scss';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs = ({ activeTab, onTabChange }: TabsProps) => {
  return (
    <div className={s.tabs}>
      <button className={activeTab === 'today' ? s.activeTab : ''} onClick={() => onTabChange('today')}>Сегодня</button>
      <button className={activeTab === 'fiveDays' ? s.activeTab : ''} onClick={() => onTabChange('fiveDays')}>На 5 дней</button>
    </div>
  );
};

export default Tabs;