'use client'

import Link from 'next/link';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';
import Profile from '../profile/Profile';

export default function Header() {

    const isLogin = true;
    const path = usePathname();

    return (
        <header className={styles.wrapper}>
            <div className='min-w-4'>
                {
                    (path === '/' && isLogin) &&
                    <p className={styles.headerName}>Добро пожаловать, <span className='text-[#7362BC]'>Михаил</span>!</p>
                }
            </div>
            {isLogin
                ? <Profile />
                : <Link className={styles.login} href='/login'>
                    <span className="material-symbols-outlined">
                        login
                    </span></Link>}
        </header>
    )
}