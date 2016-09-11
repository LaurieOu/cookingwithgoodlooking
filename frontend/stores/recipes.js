const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher.js');

const RecipeStore = new Store(AppDispatcher);
let _recipes = {};


RecipeStore.all = function() {
  const recipesCopy = {};

  Object.keys(_recipes).forEach( (recipeId) => {
    recipesCopy[recipeId] = _recipes[recipeId];
  });

  return recipesCopy;
};

RecipeStore.find = function(id){
  return _recipes[id];
};

RecipeStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case 'RECIPES_RECEIVED':
      resetRecipes(payload.recipes);
      RecipeStore.__emitChange();
      break;
    case 'RECIPE_RECEIVED':
      _recipes[payload.recipe.id] = payload.recipe
      RecipeStore.__emitChange();
      break;
  }
};

function resetRecipes(recipes) {
  _recipes = {};
  recipes.forEach((recipe) => {
    _recipes[recipe.id] = recipe;
  })
  return _recipes;
};



module.exports = RecipeStore;
