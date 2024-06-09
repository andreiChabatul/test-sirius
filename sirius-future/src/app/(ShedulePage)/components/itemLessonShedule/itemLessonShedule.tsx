'use client'

import { infoLessonShedule } from '@/types/itemLesson';
import styles from './itemLesson.module.scss';
import { dataStyle } from './dataStyle';
import { useDateLesson } from '@/hooks/useDateLesson';
import { useState } from 'react';
import Image from 'next/image';


export default function ItemLessonShedule({ duration, date, stateLesson, name, paid }: infoLessonShedule) {

    const { timeLesson } = useDateLesson(date, duration);
    const [active, setActive] = useState<boolean>(false);

    return (
        <div
            className={styles.wrapper__active + ' ' + (active ? "border-[#7362BC]" : '')}
            onClick={() => setActive(!active)}
        >
            <div className={styles.wrapper} style={dataStyle[stateLesson]}>
                <p className={styles.time}>{timeLesson}</p>
                <p className={styles.name}>{name}</p>
            </div>
            {paid && <Image className={styles.wallet} src={'./wallet.svg'} height={16} width={16} alt='wallet' />}
        </div>
    )

}