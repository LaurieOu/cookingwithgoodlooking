const ApiActions = require('../actions/api_actions');

const apiUtil = {
  fetchAllRecipes: function() {
    $.ajax({
      url: '/recipes',
      type: 'GET',
      success: function(recipes) {
        ApiActions.receiveAllRecipes(recipes);
      }
    });
  },
  fetchSingleRecipe: function(id) {
    $.ajax({
      url: '/recipes' + id,
      type: 'GET',
      success: function(recipe) {
        ApiActions.receiveSingleRecipe(recipe);
      }
    })
  }
};

module.exports = apiUtil;
