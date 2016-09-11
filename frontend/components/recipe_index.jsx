const React = require('react');
const ApiUtil = require('../util/api_util.js');
const RecipeStore = require('../stores/recipes.js');
const RecipeIndexItem = require('./recipe_index_item.jsx');

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
        <div>
          <ul>
            {Object.keys(this.state.recipes).map(function(recipeId) {
              return < RecipeIndexItem key={recipeId} recipe={that.state.recipes[recipeId]}/>;
            })}
          </ul>
        </div>
    )
  }

});


module.exports = Recipes;
