import Image from 'next/image';
import styles from './navAd.module.scss';

export default function NavAd() {
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>Учитесь бесплатно</h4>
            <p className={styles.desc}>Приводите друзей с детьми заниматься в Sirius Future и получайте подарки!</p>
            <button className={styles.button}>Узнать</button>
            <Image className={styles.gift} src={'./gift.svg'} alt='gift' width={73} height={83} />
        </div>
    )
}