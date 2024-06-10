import { useAppDispatch, useAppSelector } from '@/hooks/hookStore';
import styles from './popUp.module.scss';
import { closeModalUser } from '@/lib/redux/reducers/app.reducer';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { logoutProfile } from '@/lib/redux/reducers/user.reducer';
import ItemPopUpProfile from '../itemPopUpProfile/ItemPopUpProfile';


export default function PopUp() {

    const popUpRef = useRef(null);
    const dispatch = useAppDispatch();
    const router = useRouter();
    const anotherProfile = useAppSelector((state) => state.user.profile.anotherProfile);
    const profile = useAppSelector((state) => state.user.profile);
    useClickOutside(popUpRef, () => dispatch(closeModalUser()));


    const logout = () => {
        router.push('./login');
        dispatch(closeModalUser());
        dispatch(logoutProfile());
    }

    return (
        <div ref={popUpRef} className={styles.popUp}>
            <p className={styles.arrow}>
                <span className="material-symbols-outlined" style={{ 'fontSize': '32px' }}>
                    arrow_drop_up
                </span>
            </p>
            <p className={styles.close} onClick={() => dispatch(closeModalUser())}>
                <span className="material-symbols-outlined" style={{ 'fontSize': '20px' }}>
                    close
                </span>
            </p>
            <p className={styles.title}>Смена пользователя</p>
            <ul>
                {[profile, ...anotherProfile].map((user) =>
                    <ItemPopUpProfile
                        key={user.name}
                        {...{ name: user.name, image: user.image, isYou: profile.name === user.name }}
                    />)}
            </ul>
            <button className={styles.button} onClick={logout}>
                <span>Выход</span>
                <span className="material-symbols-outlined">
                    logout
                </span>
            </button>
        </div>
    )
}