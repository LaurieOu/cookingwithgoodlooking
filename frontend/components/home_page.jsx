const React = require('react');
import { Link } from 'react-router';


const HomePage = React.createClass ({
  render(){
    return(
      <div className="mainBody">
        <Link className="homeLinkText" to={'/'}>Home</Link>
        <div className="homePageTitle">Recipes under 30 minutes</div>
        {this.props.children}
      </div>
    );
  }
});


module.exports = HomePage;
