'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './form.module.scss';
import { typeInputs } from '@/types/formAuth';
import { useState } from 'react';

export default function FormAuth() {

    const rexExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const [visibility, setVisibility] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<typeInputs>()

    const onSubmit: SubmitHandler<typeInputs> = (user) => { }

    return <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.inputContainer}>
            <input className={styles.input} {...register("email", { required: true, pattern: rexExpEmail })} placeholder='E-mail' />
            <p className={styles.error}>
                {(errors.email && errors.email.type === "required") && <span>Обязательное поле</span>}
                {(errors.email && errors.email.type === "pattern") && <span>Недействительный адрес</span>}
            </p>
        </div>

        <div className={styles.inputContainer}>
            <input type={visibility ? 'text' : 'password'} className={styles.input} {...register("password", { required: true, minLength: 6 })} placeholder='Пароль' />
            <div className={styles.password} onClick={() => setVisibility(!visibility)}>
                <span className="material-symbols-outlined" style={{ 'fontSize': '20px' }}>
                    {visibility ? 'visibility' : 'visibility_off'}
                </span>
            </div>
            <p className={styles.error}>
                {(errors.password && errors.password.type === "required") && <span>Обязательное поле</span>}
                {(errors.password && errors.password.type === "minLength") && <span>Минимальная длина 6 символов</span>}
            </p>
        </div>
        <div className={styles.checkboxContainer}>
            <input type='checkbox' id='save-me' />
            <label className={styles.label} htmlFor="save-me">Запомнить меня</label>
        </div>
        <button className={styles.button} type="submit">Войти</button>
    </form>
}