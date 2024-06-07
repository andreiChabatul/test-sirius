import { infoLesson } from '@/types/itemLesson';
import ItemLesson from './components/itemLesson';
import styles from './lessonSection.module.scss';


const itemLesson1d: infoLesson[] = [
    {
        name: 'Ментальная Арифметика',
        teacher: 'Белкина Инна',
        duration: 300000,
        date: "December 17, 1995 13:24:00"

    },
    {
        name: 'Программирование',
        teacher: 'Животновская Оксана',
        duration: 3000000,
        date: "April 1, 1995 12:15:00"

    },
    {
        name: 'Изучение React',
        teacher: 'Владислав Игорев',
        duration: 10000000,
        date: "March 4, 1995 9:00:00"

    }]


export default function LessonsSections() {
    return (
        <section className={styles.wrapper}>
            <h6 className={styles.title}>Ближайшие уроки</h6>
            <ul className='mb-7'>
                {itemLesson1d.map((lesson) =>
                    <ItemLesson key={lesson.name} {...lesson} />)}
            </ul>
            <button className={styles.button}>Кнопка</button>
        </section>
    )
}