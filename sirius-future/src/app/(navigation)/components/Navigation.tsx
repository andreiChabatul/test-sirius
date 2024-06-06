'use client'

import Image from 'next/image';
import styles from './navigation.module.scss';
import ItemNav from './ItemNav/ItemNav';
import { DataNav } from '../data';
import { usePathname } from 'next/navigation';
import NavAd from './navAd/NavAd';

export default function Navigation() {

    const path = usePathname();

    return (
        <nav className={styles.wrapper} >
            <Image className='mx-auto mb-10' src={'./logoFull.svg'} alt='logo' width={148} height={58} />
            <ul className='mb-12'>
                {DataNav.map((item) =>
                    <li key={item.label}>
                        <ItemNav {...{ ...item, active: path === item.href }} />
                    </li>
                )}
            </ul>
            <NavAd />
        </nav>
    )
}