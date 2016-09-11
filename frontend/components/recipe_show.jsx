const React = require('react');
const RecipeStore = require('../../stores/recipes.js');


const RecipeShow = React.createClass({
  getInitialState: function() {
    return {currentRecipe: RecipeStore.find(parseInt(this.props.params.id))}
  },
  render: function(){
    return (
      {currentRecipe.pictures.map(function(picture) {
        return (
          <ul>
            <li><img height="300" src={picture}/></li>
          </ul>
        )
      })}

      <li>{currentRecipe.name}</li>
      <li>{currentRecipe.time}</li>

      <ol>
      {currentRecipe.ingredients.map(function(ingredient) {
        return( <li>{ingredient}</li> )
      })}
      </ol>

      <ol>
      {RecipeStore.currentREcipeId.steps.map(function(step){
        return ( <li>{step}</li> )
      })}
      </ol>
    )
  }

});

module.exports = RecipeShow;
