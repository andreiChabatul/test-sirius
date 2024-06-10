import styles from './itemPop.module.scss';
import Image from "next/image";

export type propsItem = {
    name: string,
    image: string,
    isYou: boolean
}

export default function ItemPopUpProfile({ name, image, isYou }: propsItem,) {

    return (
        <li className={styles.wrapper + ' ' + (isYou ? styles.active : '')}>
            <Image className={styles.image} src={`/${image}.png`} width={32} height={32} alt='profile' />
            <p className={styles.desc}>
                <span className={styles.title}>{name}</span>
                {isYou && <span className={styles.titleYou}>Это вы</span>}
            </p>
        </li>
    )
}