import React, {Component} from 'react'
import Recipe from './Recipe'
import RecipeSearch from './RecipeSearch'

export class RecipeList extends Component {
  render() {
    return (
    <React.Fragment>
    <h1>hello from recipelist</h1> 
    <RecipeSearch></RecipeSearch>
    
    <Recipe></Recipe> 
    
    </React.Fragment>
    )
  }
}
export default RecipeList
