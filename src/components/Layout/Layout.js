import React from 'react';
import styles from './Layout.module.css';

import Header from '../Header/Header';

const layout = (props) => {

    return(
        <div className={styles.Layout}>
            <Header />
            {props.children}
        </div>
    )

}


export default layout;