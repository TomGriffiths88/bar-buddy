import React from 'react';
import styles from './Header.module.css';
import Logo from '../../UI/Logo/Logo';
import Navigation from '../../UI//Navigation/Navigation';

const header = () => (
    <div className={styles.Header}>
        <Logo />
        <Navigation />
    </div>
)

export default header;