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
  }
};

module.exports = apiUtil;
