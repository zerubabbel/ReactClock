var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return(
    <div>
      <div>
        <Nav/>
        <div className="row">
          <div className="columns medium-6 large-4 small-centered">
            <p>Main.jsx Rendered</p>
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
