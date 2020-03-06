import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import Search from '../Search/Search';
import Cocktails from '../Cocktails/Cocktails';
import FullCocktail from '../FullCocktail/Fullcocktail';
import Menu from '../../components/Menu/Menu';

import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';

import './App.css';

class App extends Component  {

  state = {
    menu: []
  }

  componentDidMount() {
    let menu = window.localStorage.getItem('barbuddy');
    if(menu) {
      let newMenu = JSON.parse(menu);
      this.setState({menu: newMenu});
    }
  }

  addToMenuHandler = (id) => {
    const menu = [...this.state.menu];
    menu.push(id);
    this.setState({menu: menu})
    window.localStorage.setItem('barbuddy', JSON.stringify(menu));
  }

  removeFromMenuHandler = (id) => {
    const menu = [...this.state.menu];
    const index = menu.indexOf(id);
    console.log('before:', menu);
    console.log(index);
    
    menu.splice(index, 1);
    console.log('after:', menu)
    this.setState({menu: menu})
    window.localStorage.setItem('barbuddy', JSON.stringify(menu));
  }

  render() {

      return (
        <div className="App">
          <BrowserRouter basename={'/bar-buddy'}>
            <Layout>
              <Route path='/menu'exact render={() => <Menu cocktails={this.state.menu} />} />
              <Route path='/' exact component={Search} />
              <Route path='/cocktails/:query' component={Cocktails} />
              <Route path='/cocktail/:id' render={() => <FullCocktail add={this.addToMenuHandler} remove={this.removeFromMenuHandler} menu={this.state.menu}/>} />
            </Layout>
          </BrowserRouter>
        </div>
      );
  }
  
}

export default App;
