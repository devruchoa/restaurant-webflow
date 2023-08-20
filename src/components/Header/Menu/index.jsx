import React from 'react';
import styles from './Menu.module.scss';
import { ReactComponent as Insta } from '../../../assets/icons/Insta.svg';
import { ReactComponent as Fb } from '../../../assets/icons/Fb.svg';
import { ReactComponent as Twiter } from '../../../assets/icons/Twiter.svg';
import { ReactComponent as Pintrest } from '../../../assets/icons/Pintrest.svg';
import { Link } from 'react-router-dom';

export default function Menu() {
    const routes = [{
        label: 'Home',
        to: '/'
    }, {
        label: 'Sobre',
        to: '/sobre'
    }, {
        label: 'Menu',
        to:'/menu'
    }, {
        label: 'Reserva',
        to: '/reserva'
    }, {
        label: 'Galeria',
        to: '/galeria'
    }, {
        label: 'Blog',
        to: '/blog'
    }, {
        label: 'Contato',
        to: '/contato'
    }];

    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__navbar}>
                {routes.map((route, index) => (
                    <li key={index} className={styles.menu__navbar__item}>
                        <Link to={route.to}>{route.label}</Link>
                    </li>
                ))}
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
