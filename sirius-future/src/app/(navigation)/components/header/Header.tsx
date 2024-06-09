'use client'

import Link from 'next/link';
import styles from './header.module.scss';
import { usePathname } from 'next/navigation';
import Profile from '../profile/Profile';
import { useAppSelector } from '@/hooks/hookStore';

export default function Header() {

    const isLogin = useAppSelector((state) => state.user.isLogin);
    const name = useAppSelector((state) => state.user.profile.name);
    const path = usePathname();

    return (
        <header className={styles.wrapper}>
            <div className='min-w-4'>
                {
                    (path === '/' && isLogin) &&
                    <p className={styles.headerName}>Добро пожаловать, <span className='text-[#7362BC]'>{name}</span>!</p>
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