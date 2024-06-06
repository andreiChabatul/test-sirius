import ItemLesson from './components/itemLesson';
import styles from './lessonSection.module.scss';

export default function LessonsSections() {
    return (
        <section className={styles.wrapper}>
            <h6 className={styles.title}>Ближайшие уроки</h6>
            <ItemLesson/>
        </section>
    )
}