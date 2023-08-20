import React from 'react';
import styles from './Overview.module.scss';
import Photo from '../../assets/Photo.png';

export default function Overview() {
    return (
        <section className={styles.container}>
            <div className={styles.container__content}>
                <h2>Bem-vindo ao restaurante</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quo maiores fuga accusamus laborum nisi ducimus in tenetur repudiandae officiis. Veritatis dolorum iure ipsum? Ad pariatur ab totam aliquam suscipit!</p>
                <button>Ver menu</button>
            </div>
            <img 
                className={styles.container__image}
                src={Photo}
                alt="Mesa do restaurante"
            />
        </section>
    );
}
