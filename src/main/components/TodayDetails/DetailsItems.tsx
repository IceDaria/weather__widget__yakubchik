import React from 'react';
import s from './TodayDetails.module.scss';
import { SVGSelector } from '../../../assets/SVG/IconsSelector';
import { Item } from '../Types/Types';

interface Props {
    item: Item;
}

export const DetailsItems = ({item}: Props) => {
    const {icon_id, name, value} = item
    return (
        <div className={s.item}>
            <div className={s.item__svg}>
                <SVGSelector id={icon_id} />
            </div>
            <div className={s.item__name}>{name}</div>
            <div className={s.item__value}>{value}</div>
        </div>
    )
}