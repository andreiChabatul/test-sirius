import Image from "next/image";
import styles from "./page.module.scss";
import FormAuth from "./components/formAuth/formAuth";

export default function PageLogin() {
    return (
        <div className={styles.wrapper}>
            <Image src={'./logo.svg'} width={80} height={80} alt="logo" />
            <h3 className={styles.title}>Вход в Sirius Future</h3>
            <FormAuth />
        </div>
    )
}