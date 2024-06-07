import styles from './popUp.module.scss';


export default function PopUp() {
    return (
        <div className={styles.popUp}>
            <p className={styles.arrow}>
                <span className="material-symbols-outlined" style={{ 'fontSize': '32px' }}>
                    arrow_drop_up
                </span>
            </p>
            <p className={styles.close}>
                <span className="material-symbols-outlined" style={{ 'fontSize': '20px' }}>
                    close
                </span>
            </p>

            <p>Смена пользователя</p>

            <button className={styles.button}>
                <span>Выход</span>
                <span className="material-symbols-outlined">
                    logout
                </span>
            </button>
        </div>
    )
}