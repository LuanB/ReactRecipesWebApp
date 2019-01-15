import React, { Component } from 'react';

import './App.css';
import {recipes} from './tempList'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails'

class App extends Component {
  state = {
    recipes:recipes,
    url:'https://www.food2fork.com/api/search?key=b94ab4bfae8c99dd5b4725eb81bdf4c5',
    details_id:35380,
    pageIndex:1,
    search:''
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
  
  // componentDidMount() {
  //   this.getRecipes()
  // }
  
  displayPage = (index) => {
    switch(index) {
      default:
      case 1:
      return(
        <RecipeList 
          recipes={this.state.recipes}
          handleDetails={this.handleDetails}
          value={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          ></RecipeList>)
      
      case 0:
      return(<RecipeDetails id={this.state.details_id}
        handleIndex={this.handleIndex}></RecipeDetails>)
    }
  }
  
  handleIndex = index => {
    this.setState({
      pageIndex: index
    })
  }

handleDetails = (index, id) => {
  this.setState({
    pageIndex: index,
    details_id: id
  })
}

handleChange = (e) => {
  console.log('hello from handle change');
}
  
handleSubmit = (e) => {
  e.preventDefault();
  console.log('hello from handle submit');
}  
  
  
  
  render() {
    //console.log(this.state.recipes);
    //console.log(this.state.details_id)
    return (
    <React.Fragment>
    {this.displayPage(this.state.pageIndex)}
    
    </React.Fragment>
    );
  }
}

export default App;
