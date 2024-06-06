'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './form.module.scss';
import { typeInputs } from '@/types/formAuth';

export default function FormAuth() {

    const rexExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<typeInputs>()

    const onSubmit: SubmitHandler<typeInputs> = (user) => { }


    return <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.inputContainer}>
            <input className={styles.input} {...register("email"    , { required: true, pattern: rexExpEmail })} placeholder='E-mail' />
            <p className={styles.error}>
                {(errors.email && errors.email.type === "required") && <span>Обязательное поле</span>}
                {(errors.email && errors.email.type === "pattern") && <span>Недействительный адрес</span>}
            </p>
        </div>

        <div className={styles.inputContainer}>
            <input type='password' className={styles.input} {...register("password", { required: true, minLength: 6 })} placeholder='Пароль' />
            <p className={styles.error}>
                {(errors.password && errors.password.type === "required") && <span>Обязательное поле</span>}
                {(errors.password && errors.password.type === "minLength") && <span>Минимальная длина 6 символов</span>}
            </p>
        </div>

        <div className={styles.buttonsContainer}>
            {/* <Button type="submit">{NAME_FORM[type]}</Button> */}

        </div>

    </form>

}