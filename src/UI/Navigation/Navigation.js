import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.css';

const navigation = () => (
    <ul className={styles.Navigation}>
        <li><NavLink to='/' exact>Search</NavLink></li>
        <li><NavLink to='/menu' exact>Menu</NavLink></li>
    </ul>
)

export default navigation;