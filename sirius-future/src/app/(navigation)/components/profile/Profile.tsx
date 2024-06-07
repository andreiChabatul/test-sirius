import PopUp from '../popUp/PopUp';
import styles from './profile.module.scss';
import Image from "next/image";

export default function Profile() {

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Image src={'./messages.svg'} alt="messages" width={24} height={24} />
                <span className={styles.value}>2</span>
            </div>
            <div className='flex items-center text-[#7362BC]'>
                <div className={styles.container}>
                </div>
                <span className="material-symbols-outlined">
                    keyboard_arrow_down
                </span>
            </div>
            {/* <div className='absolute top-[55px] right-1'>
                <PopUp />
            </div> */}

        </div>
    )
}