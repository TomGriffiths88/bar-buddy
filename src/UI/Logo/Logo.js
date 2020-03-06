import React from 'react';
import './Logo.css';
import { withRouter } from 'react-router-dom';




const logo = (props) => {

    const clickHandler = () => {
        props.history.push('/');
    }

    return(
        <h1 className="Logo" onClick={clickHandler}>bar buddy</h1>
    )
    
}

export default withRouter(logo);