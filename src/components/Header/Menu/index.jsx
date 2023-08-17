import React from 'react';
import styles from './Menu.module.scss';
import { ReactComponent as Insta } from '../../../assets/icons/Insta.svg';
import { ReactComponent as Fb } from '../../../assets/icons/Fb.svg';
import { ReactComponent as Twiter } from '../../../assets/icons/Twiter.svg';
import { ReactComponent as Pintrest } from '../../../assets/icons/Pintrest.svg';

export default function Menu() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__navbar}>
                <li className={styles.menu__navbar__item}>Home</li>
                <li className={styles.menu__navbar__item}>Sobre</li>
                <li className={styles.menu__navbar__item}>Menu</li>
                <li className={styles.menu__navbar__item}>Reserva</li>
                <li className={styles.menu__navbar__item}>Galeria</li>
                <li className={styles.menu__navbar__item}>Blog</li>
                <li className={styles.menu__navbar__item}>Contato</li>
            </ul>

            <div className={styles.menu__icons}>
                <Insta />
                <Fb />
                <Twiter />
                <Pintrest />
            </div>
        </nav>
    );
}
