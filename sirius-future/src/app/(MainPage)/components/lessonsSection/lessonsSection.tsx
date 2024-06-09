'use client'
import { useAppSelector } from '@/hooks/hookStore';
import ItemLesson from './components/itemLesson';
import styles from './lessonSection.module.scss';

export default function LessonsSections() {

    const lessons = useAppSelector((state) => state.user.profile.infoLesson);

    return (
        <section className={styles.wrapper}>
            <h6 className={styles.title}>Ближайшие уроки</h6>
            <ul className='mb-7'>
                {lessons.map((lesson) =>
                    <ItemLesson key={lesson.name} {...lesson} />)}
            </ul>
            <button className={styles.button}>Кнопка</button>
        </section>
    )
}