import React from 'react';
import { ReactComponent as LogoBrand } from '../../../assets/Logo.svg';
import { ReactComponent as Cart } from '../../../assets/icons/Cart.svg';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <button className={styles.logo__btn1}>Ligue - 9999-9999</button>
            <LogoBrand />
            <div className={styles.logo__container}>
                <Cart className={styles.logo__container__cart} />
                <button className={styles.logo__container__btn2}><Link to={'/reserva'}>Reserva</Link></button>
            </div>
        </div>
    );
}
