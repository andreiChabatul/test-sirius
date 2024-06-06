import Image from 'next/image';
import styles from './reportSection.module.scss';

export default function ReportSection() {
    return (
        <section>
            <div className={styles.container + ' ' + styles.report}>
                <p className={styles.desc}>Домашние задания</p>
                <Image className={styles.icon} src={'./iconWork.svg'} height={40} width={40} alt='icon work' />
            </div>
            <div className={styles.container + ' ' + styles.teachers}>
                <p className={styles.desc}>Отчеты от учителей</p>
                <Image className={styles.icon} src={'./iconTeacher.svg'} height={40} width={40} alt='icon work' />
            </div>
        </section>
    )
}