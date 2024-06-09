'use client'
import { useAppSelector } from '@/hooks/hookStore';
import styles from './balanseSection.module.scss';
import ItemBalanse from './components/itemBalanse/ItemBalanse';

export default function BalanseSection() {

    const stats = useAppSelector((state) => state.user.profile.stat);

    return (
        <section className={styles.wrapper}>
            <h6 className={styles.title}>Баланс занятий</h6>
            <ul className={styles.list}>
                {stats.map((stat) =>
                    <ItemBalanse key={stat.nameLesson} {...stat} />)}
            </ul>
            <button className={styles.button}>Кнопка</button>
        </section>
    )
}