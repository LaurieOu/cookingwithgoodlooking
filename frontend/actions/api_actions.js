const AppDispatcher = require('../dispatcher/dispatcher');

const ApiActions = {
  receiveAllRecipes: function(recipes) {
    AppDispatcher.dispatch({
      actionType: 'RECIPES_RECEIVED',
      recipes: recipes
    });
  },
  receiveSingleRecipe: function(recipeId) {
    AppDispatcher.dispatch({
      actionType: 'RECIPE_RECEIVED',
      recipe: recipe
    })
  }
};

module.exports = ApiActions;
