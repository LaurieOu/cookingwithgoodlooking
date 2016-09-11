const React = require('react');
import { Link } from 'react-router';


const RecipeIndexItem = React.createClass({
  render: function() {

    return (
      <Link to={'/recipes/' + this.props.recipe.id}>
          <p>{this.props.recipe.name}</p>
      </Link>
    )
  }
});

module.exports = RecipeIndexItem;
