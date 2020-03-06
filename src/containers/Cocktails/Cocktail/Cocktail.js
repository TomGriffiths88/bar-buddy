import React from 'react';
import styles from './Cocktail.module.css'
const cocktail = (props) => {


    return(
        <div className={styles.Cocktail}
            onClick={props.click}>
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
        </div>
    )
}


export default cocktail;