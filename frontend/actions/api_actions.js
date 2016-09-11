const AppDispatcher = require('../dispatcher/dispatcher');

const ApiActions = {
  receiveAllRecipes: function(recipes) {
    AppDispatcher.dispatch({
      actionType: 'RECIPES_RECEIVED',
      recipes: recipes
    });
  }
};

module.exports = ApiActions;
