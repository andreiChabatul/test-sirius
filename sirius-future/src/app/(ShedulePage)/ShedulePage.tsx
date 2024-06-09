
'use client'

import styles from './shedulePage.module.scss';
import SelectSubject from './components/selectSubject/SelectSubkect';
import Shedule from './components/shedule/Shedule';
import { CircularProgress } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks/hookStore';
import { useEffect } from 'react';
import { fetchShedule } from '@/lib/redux/reducers/shedule.reducer';
import NoLogin from '../login/components/noLogin/NoLogin';


export default function ShedulePage() {

    const loading = useAppSelector((state) => state.shedule.loading);
    const isLogin = useAppSelector((state) => state.user.isLogin);
    const dispatch = useAppDispatch();

    useEffect(() => {if (isLogin) dispatch(fetchShedule()) }, [isLogin])

    return (
        <div className='pl-8 w-[1087px]'>
            {isLogin
                ? <>
                    <div className={styles.head}>
                        <SelectSubject />
                        <button className={styles.buttonChange}>Изменить расписание</button>
                    </div>
                    <div className='flex items-center mb-3'>
                        <div className='flex items-center gap-4 mr-8 text-[#79747F]'>
                            <span className="material-symbols-outlined">
                                arrow_left_alt
                            </span>
                            <span className='text-[#323854] font-bold'>Март 2024</span>
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </div>
                        <button className={styles.button}>Сегодня</button>
                        <span className="material-symbols-outlined" style={{ 'color': '#8D7FC7' }}>
                            help
                        </span>
                    </div>
                    <div className={styles.shedules}>
                        {loading
                            ? <CircularProgress className='mt-20' size={100} color="inherit" />
                            : <Shedule />
                        }
                    </div>
                </>
                : <NoLogin />
            }
        </div>
    );
}