import Image from 'next/image';
import styles from './saleSection.module.scss';

export default function SaleSection() {
    return (
        <section className={styles.wrapper}>
            <p className={styles.title}>До 31 декабря любой курс со скидкой 20%</p>
            <p className={styles.desc}>До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!</p>
            <Image className={styles.image} src={'./saleMain.svg'} height={150} width={190} alt='sale' />
        </section>
    )
}