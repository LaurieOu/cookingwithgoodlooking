const React = require('react');
const RecipeStore = require('../stores/recipes.js');


const RecipeShow = React.createClass({
  getInitialState: function() {
    return {currentRecipe: RecipeStore.find(parseInt(this.props.params.id))}
  },
  render: function(){
    return (
      <div className="recipeShowContainer">
        <li className="recipeHeader">{this.state.currentRecipe.name}</li>
        <li className="recipeHeader">{this.state.currentRecipe.time}</li>

        {this.state.currentRecipe.pictures.map(function(picture, idx) {
          return (
            <ul key={idx}>
              <li className="picture"><img height="300" src={picture}/></li>
            </ul>
          )
        })}

        <div className="ingredientsAndStepsContainer">
          <div className="labels">Ingredients:</div>
          <ol>
          {this.state.currentRecipe.ingredients.map(function(ingredient, idx) {
            return( <li key={idx}>{ingredient}</li> )
          })}
          </ol>

          <div className="labels">Steps:</div>
          <ol>
          {this.state.currentRecipe.steps.map(function(step, idx){
            return ( <li key={idx}>{step}</li> )
          })}
          </ol>
        </div>
      </div>
    )
  }

});

module.exports = RecipeShow;
