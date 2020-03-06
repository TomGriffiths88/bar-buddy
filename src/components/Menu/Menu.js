import React, {Component} from 'react';
import axios from 'axios';
import Cocktail from '../../containers/Cocktails/Cocktail/Cocktail';
import styles from '../../containers/Cocktails/Cocktails.module.css';

import {withRouter} from 'react-router-dom';


class Menu extends Component {

    state = {
        cocktails: []
    }

    componentDidMount() {

        this.props.cocktails.forEach(cocktail => {
            axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktail)
                .then(response => {
                    const cocktails = [...this.state.cocktails];
                    cocktails.push(response.data.drinks[0]);
                    this.setState({cocktails: cocktails})
                    })
        })

    }

    clickHandler = (id) => {
        this.props.history.push('/cocktail/' + id);
    }


    render() {

        let cocktails = (
            <p>You haven't added any cocktails yet</p>
        );

        if(this.state.cocktails.length >= 1) {

            cocktails = this.state.cocktails.map(cocktail => <Cocktail key={cocktail.idDrink} title={cocktail.strDrink} img={cocktail.strDrinkThumb} click={() => this.clickHandler(cocktail.idDrink)}/>);

        }

        return (
            <div className={styles.Cocktails}>
                 <h1>My Menu</h1>
                {cocktails}
            </div>
        )
    }
   

}

export default withRouter(Menu);