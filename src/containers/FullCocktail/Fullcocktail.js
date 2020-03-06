import React, {Component} from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';
import styles from './FullCocktail.module.css';

class FullCocktail extends Component {


    state = {
        cocktail: null
    }

    componentDidMount() {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.props.match.params.id)
            .then(response => this.setState({cocktail: response.data.drinks[0]}))
            
    }

    backButtonHandler = () => {
        this.props.history.goBack();
    }

    render() {

        let drink = <p>Loading</p>;
        const cocktail = this.state.cocktail;
        const ingredients =  [];
        let ingredientsList = []

        if(cocktail) {
            for( let i = 1; i < 16; i++) {

                let ingredient = cocktail[`strIngredient${i}`];
                let measure = cocktail[`strMeasure${i}`];

                if(ingredient !== null && measure !== null) {
                    ingredients.push( ingredient + ' : ' + measure);
                }

                ingredientsList = ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>);
                
            };

            let menu = this.props.menu;
            let button = <button onClick={() => this.props.remove(cocktail.idDrink)} className="btn">Remove from menu</button>;
            if(menu.indexOf(this.props.match.params.id) === -1) {
                button = <button onClick={() => this.props.add(cocktail.idDrink)} className="btn">Add to menu</button>
            }


            drink =   
                    <main className={styles.Wrapper}>
                        <h1>{cocktail.strDrink}</h1>
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                        <div className={styles.FullCocktail__ingredients}>
                            <h3>Ingredients</h3>
                            <ul>{ingredientsList}</ul>
                        </div>
                        <div className={styles.FullCocktail__desc}>
                            <h3>Method</h3>
                            <p>{cocktail.strInstructions}</p>
                        </div>
                        <button onClick={this.backButtonHandler} className="btn btn--light">Back</button>
                        {button}
                        
                    </main>
        }


        return(
            <div className={styles.FullCocktail}>
                {drink}
            </div>
        )

    }


}

export default withRouter(FullCocktail);