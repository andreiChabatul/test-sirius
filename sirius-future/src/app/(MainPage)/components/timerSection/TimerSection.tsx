'use client'
import { useAppSelector } from '@/hooks/hookStore';
import styles from './timerSection.module.scss';
import { useDateParser } from '@/hooks/useDateParser';

export default function TimerSection() {

    const time = useAppSelector((state) => state.user.profile.nextLessontime);
    const { day, hours, minute } = useDateParser(time);

    return (
        <section className={styles.wrapper}>
            <p className={styles.title}>Следующее занятие начнется через:</p>
            <div className={styles.time}>
                <p className={styles.timeValue}><span className={styles.timeTitle}>{day} </span>д</p>
                <p className={styles.timeValue}><span className={styles.timeTitle}>{hours} </span>ч</p>
                <p className={styles.timeValue}><span className={styles.timeTitle}>{minute} </span>мин</p>
            </div>
            <button className={styles.button}>Кнопка</button>
        </section>
    )
}