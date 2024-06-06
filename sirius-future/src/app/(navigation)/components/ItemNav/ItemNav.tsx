import styles from './itemNav.module.scss';
import { itemNavProps } from '@/types/navigation';
import Link from 'next/link';

export default function ItemNav({ label, href, active, icon }: itemNavProps) {

    const style = {
        'background': active ? '#8D7FC7' : '',
        'color': active ? '#FFFFFF' : ''
    }

    return (
        <Link href={href}
            style={style}
            className={styles.wrapper}
        >
            <span className="material-symbols-outlined" style={{ 'fontSize': '30px' }}>{icon}</span>
            <span>{label}</span>
        </Link>
    )
}