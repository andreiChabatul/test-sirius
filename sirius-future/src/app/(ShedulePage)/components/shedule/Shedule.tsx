'use client'

import { useAppSelector } from '@/hooks/hookStore';
import ItemShedule from '../itemShedule/ItemShedule';
import styles from './shedule.module.scss';

export default function Shedule() {

    const dayWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const shedule = useAppSelector((state) => state.shedule.data);

    return (
        <div>
            <div className='flex'>
                {dayWeek.map((day) =>
                    <span className={styles.day} key={day}>{day}</span>)}
            </div>
            <ul className={styles.shedules}>
                {shedule.map((day, index) =>
                    <ItemShedule key={day.date + index} {...day} />)}
            </ul>
        </div>
    )

}