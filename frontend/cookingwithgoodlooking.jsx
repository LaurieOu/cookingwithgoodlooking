const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = require('react-router').browserHistory;
const HomePage = require('./components/home_page.jsx');
const RecipeIndex = require('./components/recipe_index.jsx');
const RecipeShow = require('./components/recipe_show.jsx');


const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={ HomePage }>
      <IndexRoute component={RecipeIndex} />
      <Route path='recipes/:id' component={RecipeShow} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    routes,
    document.getElementById('root')
  );
});
