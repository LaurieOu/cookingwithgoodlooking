const React = require('react');
const ApiUtil = require('../util/api_util.js');
const RecipeStore = require('../stores/recipes.js');
import { Link } from 'react-router';


const Recipes = React.createClass({
  getInitialState: function() {
    return {recipes: RecipeStore.all()}
  },
  _onChange: function() {
    this.setState({recipes: RecipeStore.all()});
  },
  componentWillMount: function() {
    this.RecipeStoreListener = RecipeStore.addListener(this._onChange);
    ApiUtil.fetchAllRecipes();
  },
  componentWillUnmount: function() {
    this.RecipeStoreListener.remove();
  },
  render: function() {
    const that = this;

    return (
        <div className="allRecipesContainer">
          <ol>
            {Object.keys(this.state.recipes).map(function(recipeId) {
              return (
                <li><Link to={'/recipes/' + recipeId} key={recipeId}>{that.state.recipes[recipeId].name}</Link></li>
              )
            })}
          </ol>
        </div>
    )
  }

});


module.exports = Recipes;
