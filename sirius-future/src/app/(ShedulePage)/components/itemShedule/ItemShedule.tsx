import { shedule } from '@/types/shedule';
import styles from './itemShedule.module.scss';
import { useDateLesson } from '@/hooks/useDateLesson';
import ItemLessonShedule from '../itemLessonShedule/itemLessonShedule';

export default function ItemShedule({ date, lessons }: shedule) {

    const { day, month } = useDateLesson(date);

    return (
        <li className={styles.wrapper}>

            <p className={styles.title}>{`${day} ${month}`}</p>

            <div>
                {lessons?.map((lesson) =>
                    <ItemLessonShedule {...lesson}/>)}
            </div>

        </li>
    )
}