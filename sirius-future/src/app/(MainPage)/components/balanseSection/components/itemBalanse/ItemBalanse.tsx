import styles from './itemBalanse.module.scss';
import { infoStat } from '@/types/itemStat';

export default function ItemBalanse({ nameLesson, value }: infoStat) {
    return (
        <li className={styles.wrapper}>
            <span className='leading-5'>{nameLesson}</span>
            <span className={styles.value}>{value}</span>
        </li>
    )
}