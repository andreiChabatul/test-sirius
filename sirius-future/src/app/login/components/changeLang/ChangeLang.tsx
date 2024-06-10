'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/hookStore';
import styles from './changeLang.module.scss';
import { setLang } from '@/lib/redux/reducers/app.reducer';
import { lang } from '@/types/store';

const langs: Array<lang> = ['RU', 'EN']

export default function ChangeLang() {

    const appLang = useAppSelector((state) => state.app.lang);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.wrapper}>
            {langs.map((lang) =>
                <button
                    key={lang}
                    className={appLang === lang ? styles.active : styles.disable}
                    onClick={() => dispatch(setLang(lang))}>
                    {lang}
                </button>
            )}
        </div>
    )
}