import React, { Component } from 'react';
import styles from './Search.module.css';

class Search extends Component {

    searchSubmitHandler = (e) => {
        e.preventDefault();
        const search = e.target.search.value.trim();

        if(search === ''){
            return
        }

        this.props.history.push({pathname: '/cocktails/' + search})
    }


    render() {
        return(
            <div className={styles.Search}>
            <form onSubmit={this.searchSubmitHandler}>
                <p>What can I get you?</p>
                <input type="text" name="search" placeholder="e.g Margerita"/>
            </form>
            </div>
        )
    }


}

export default Search;