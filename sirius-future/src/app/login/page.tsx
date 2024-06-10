import Image from "next/image";
import styles from "./page.module.scss";
import FormAuth from "./components/formAuth/formAuth";
import Link from "next/link";
import ChangeLang from "./components/changeLang/ChangeLang";

export default function PageLogin() {
    return (
        <div className={styles.containerPage}>
            <div className={styles.wrapper}>
                <Image className="mb-4" src={'./logo.svg'} width={80} height={80} alt="logo" />
                <h3 className={styles.title}>Вход в Sirius Future</h3>
                <FormAuth />
                <div className={styles.containerLinks}>
                    <Link className={styles.link} href={'./login'}>Я забыл пароль</Link>
                    <Link className={styles.link} href={'./login'}>Войти как тренер</Link>
                </div>
                <div className={styles.containerRegister}>
                    <p className="text-[#323854]">Нет аккаунта?</p>
                    <Link className={styles.link} href={'./login'}>Зарегистрироваться</Link>
                </div>
                <ChangeLang />
            </div>
        </div>
    )
}