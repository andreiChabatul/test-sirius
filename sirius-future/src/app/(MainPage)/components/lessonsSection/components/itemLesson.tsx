import styles from './itemLesson.module.scss';
import { useDateLesson } from "@/hooks/useDateLesson"
import { infoLesson } from "@/types/itemLesson";

export default function ItemLesson() {


    const itemLesson1d: infoLesson = {
        name: 'Ментальная Арифметика',
        teacher: 'Белкина Инна',
        duration: 300000,
        date: "December 17, 1995 13:24:00"

    }

    const { timeLesson, day, month } = useDateLesson(itemLesson1d.date, itemLesson1d.duration);

    return (
        <li className={styles.wrapper}>
            <div className={styles.date}>
                <span className={styles.day}>{day}</span>
                <span className={styles.month}>{month}</span>
            </div>
            <span className={styles.name} >{itemLesson1d.name}</span>
            <span className={styles.duration}>{timeLesson}</span>
            <p className={styles.teacher}>
                <span className='material-symbols-outlined' style={{ 'fontSize': '18px', 'color': '#79747F' }}>account_circle</span>
                {itemLesson1d.teacher}
            </p>

            <div>
                <button>Кнопка</button>
                <button>Кнопка</button>
            </div>
        </li>
    )
}