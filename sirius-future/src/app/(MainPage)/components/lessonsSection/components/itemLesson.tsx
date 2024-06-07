import styles from './itemLesson.module.scss';
import { useDateLesson } from "@/hooks/useDateLesson"
import { infoLesson } from "@/types/itemLesson";

export default function ItemLesson({ date, duration, name, teacher }: infoLesson) {

    const { timeLesson, day, month } = useDateLesson(date, duration);

    return (
        <li className={styles.wrapper}>
            <div className={styles.date}>
                <span className={styles.day}>{day}</span>
                <span className={styles.month}>{month}</span>
            </div>
            <span className={styles.name} >{name}</span>
            <span className={styles.duration}>{timeLesson}</span>
            <p className={styles.teacher}>
                <span className='material-symbols-outlined' style={{ 'fontSize': '18px', 'color': '#79747F' }}>account_circle</span>
                {teacher}
            </p>

            <div className='flex gap-1'>
                <button className={styles.button + ' ' + styles.buttonWhite}>Кнопка</button>
                <button className={styles.button + ' ' + styles.buttonBlue}>Кнопка</button>
            </div>
        </li>
    )
}