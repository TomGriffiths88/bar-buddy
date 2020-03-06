import React, { Component } from 'react';
import axios from 'axios';
import Cocktail from './Cocktail/Cocktail';
import styles from './Cocktails.module.css';
import { Link, withRouter } from 'react-router-dom';

class Cocktails extends Component {

    state = {
        cocktails: [],
    }

    componentDidMount() {

        axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.props.match.params.query)
            .then(response => this.setState({cocktails: response.data.drinks}))
        
    }

    clickHandler = (id) => {
        this.props.history.push('/cocktail/' + id);
        window.scrollTo(0,0);
    }
    


    render() {

        
        let cocktails = <p>Sorry no cocktails found <Link to="/">Try Again</Link></p>;

        if(this.state.cocktails) {
             cocktails = this.state.cocktails.map(cocktail => <Cocktail 
                                key={cocktail.idDrink}
                                title={cocktail.strDrink}
                                img={cocktail.strDrinkThumb}
                                click={() => this.clickHandler(cocktail.idDrink)}
                                />);
        } 
        

        return(
            <div className={styles.Cocktails}>
                {/* <h1>Searching: {this.props.match.params.query}</h1> */}
                {cocktails}
            </div>
        )
    }


}

export default withRouter(Cocktails);