import React from 'react'
import s from './FiveDays.module.scss';
import { CardsSVGSelector } from '../../../assets/SVG/CardsSVGSelector';
import { Day } from '../Types/Types';

interface Props {
    day: Day;
}

export const Card = ({ day }: Props) => {
    return (
        <div className={s.card}>
            <div className={s.card__day}>{day.day}</div>
            <div className={s.card__date}>{day.date}</div>
            <div className={s.card__svg}>
               <CardsSVGSelector id={day.icon_id} /> 
            </div>
            <div className={s.card__temp}>{day.temp}</div>
            <div className={s.card__info}>{day.info}</div>

        </div>
    )
}