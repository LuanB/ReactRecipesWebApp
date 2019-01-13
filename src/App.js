import React, { Component } from 'react';

import './App.css';
import {recipes} from './tempList'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

class App extends Component {
  state = {
    recipes:[],
    url:'https://www.food2fork.com/api/search?key=b94ab4bfae8c99dd5b4725eb81bdf4c5'
  }
  
  async getRecipes(){
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes:jsonData.recipes
      })
    } catch(error) {
      console.log(error);
      
    }
  
  }
  
  componentDidMount() {
    this.getRecipes()
  }
  
  
  render() {
    console.log(this.state.recipes);
    
    return (
    <React.Fragment>
    <RecipeList></RecipeList>
    <RecipeDetails></RecipeDetails>
    </React.Fragment>
    );
  }
}

export default App;
