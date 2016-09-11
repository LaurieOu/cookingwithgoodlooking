const React = require('react');
const RecipeStore = require('../../stores/recipes.js');


const RecipeShow = React.createClass({
  getInitialState: function() {
    return {currentRecipe: RecipeStore.find(parseInt(this.props.params.id))}
  },
  render: function(){
    return (
      {this.state.currentRecipe.pictures.map(function(picture) {
        return (
          <ul>
            <li><img height="300" src={picture}/></li>
          </ul>
        )
      })}

      <li>{this.state.currentRecipe.name}</li>
      <li>{this.state.currentRecipe.time}</li>

      <ol>
      {this.state.currentRecipe.ingredients.map(function(ingredient) {
        return( <li>{ingredient}</li> )
      })}
      </ol>

      <ol>
      {this.state.currentRecipe.steps.map(function(step){
        return ( <li>{step}</li> )
      })}
      </ol>
    )
  }

});

module.exports = RecipeShow;
