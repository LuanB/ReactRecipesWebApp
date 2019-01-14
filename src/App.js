import React, { Component } from 'react';

import './App.css';
import {recipes} from './tempList'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

class App extends Component {
  state = {
    recipes:recipes,
    url:'https://www.food2fork.com/api/search?key=b94ab4bfae8c99dd5b4725eb81bdf4c5',
    details_id:35386
  }
  
  // async getRecipes(){
  //   try {
  //     const data = await fetch(this.state.url);
  //     const jsonData = await data.json();
  //     this.setState({
  //       recipes:jsonData.recipe
  //     })
  //   } catch(error) {
  //     console.log(error);
  // 
  //   }
  // 
  // }
  // 
  // componentDidMount() {
  //   this.getRecipes()
  // }
  
  
  render() {
    //console.log(this.state.recipes);
    console.log(this.state.details_id)
    return (
    <React.Fragment>
    {/* <RecipeList recipes={this.state.recipes}></RecipeList> */}
    <RecipeDetails id={this.state.details_id}></RecipeDetails>
    </React.Fragment>
    );
  }
}

export default App;
