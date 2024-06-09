'use client'

import { useAppDispatch, useAppSelector } from '@/hooks/hookStore';
import PopUp from '../popUp/PopUp';
import styles from './profile.module.scss';
import Image from "next/image";
import { openModalUser } from '@/lib/redux/reducers/app.reducer';

export default function Profile() {

    const image = useAppSelector((state) => state.user.profile.image);
    const amount = useAppSelector((state) => state.user.profile.messages);
    const modal = useAppSelector((state) => state.app.modalUser);
    const dispatch = useAppDispatch();

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Image src={'./messages.svg'} alt="messages" width={24} height={24} />
                <span className={styles.value}>{amount}</span>
            </div>
            <div className='flex items-center text-[#7362BC]' onClick={() => dispatch(openModalUser())}>
                <div className={styles.container}>
                    <Image src={`/${image}.png`} alt="messages" width={48} height={48} />
                </div>
                <span className="material-symbols-outlined">
                    keyboard_arrow_down
                </span>
            </div>
            {modal && <div className='absolute top-[55px] right-1'>
                <PopUp />
            </div>}

        </div>
    )
}