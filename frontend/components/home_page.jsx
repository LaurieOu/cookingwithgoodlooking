const React = require('react');

const HomePage = React.createClass ({
  render(){
    return(
      <div className="mainBody">
        <div className="homePageTitle">Recipes under 30 minutes</div>
        {this.props.children}
      </div>
    );
  }
});


module.exports = HomePage;
