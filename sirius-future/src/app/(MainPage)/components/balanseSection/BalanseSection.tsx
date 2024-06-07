import { infoStat } from '@/types/itemStat';
import styles from './balanseSection.module.scss';
import ItemBalanse from './components/itemBalanse/ItemBalanse';

export const temp: infoStat[] = [
    {
        nameLesson: 'Ментальная Арифметика',
        value: 32
    },
    {
        nameLesson: 'Программирование',
        value: 0
    },
    {
        nameLesson: 'Скорочтение',
        value: 4
    },
    {
        nameLesson: 'Изучение реакт',
        value: 15
    },
]

export default function BalanseSection() {
    return (
        <section className={styles.wrapper}>
            <h6 className={styles.title}>Баланс занятий</h6>
            <ul className={styles.list}>
                {temp.map((stat) =>
                    <ItemBalanse key={stat.nameLesson} {...stat} />)}
            </ul>
            <button className={styles.button}>Кнопка</button>
        </section>
    )
}