import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Form.module.scss';

const reservationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'No mínimo 2 caractéres')
        .max(30, 'No máximo 30 caractéres')
        .required('Campo obrigatório'),
    email: Yup.string().email('Email inválido').required('Campo obrigatório')
});


export default function Form() {
    const formik = useFormik({
        validationSchema: reservationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: (values) => {
            alert(`Mesa reservada, mais informações enviadas ao email: ${values.email}`);
        }
    });

    return (
        <section className={styles.container}>
            <div className={styles.container__box}>
                <form className={styles.container__box__form} onSubmit={formik.handleSubmit}>
                    <h3 className={styles.container__box__form__title} >Reserve sua mesa agora!</h3>
                    <div className={styles.container__box__form__field}>
                        <label htmlFor="name">Nome</label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div>{formik.errors.name}</div>
                        )}
                    </div>
                    <div className={styles.container__box__form__field}>
                        <label htmlFor="email">Email</label>
                        <input
                            id='email'
                            name='email'
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className='error'>{formik.errors.email}</div>
                        )}
                    </div>
                    <button type='submit'>Reservar uma mesa</button>
                </form>
            </div>
        </section>
    );
}
