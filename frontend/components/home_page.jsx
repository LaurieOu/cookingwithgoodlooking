const React = require('react');

const HomePage = React.createClass ({
  render(){
    return(
      <div>
        <nav className="navbar navbar-inverse">HIIII</nav>
        {this.props.children}
      </div>
    );
  }
});


module.exports = HomePage;
