var React = require('react');

var ClockMessage = React.createClass({
  render: function () {

    var {place, time} = this.props;
    return (
      <div>
        <h3>
          It's {time} in {place}
        </h3>
      </div>
    )
  }
});

module.exports = ClockMessage;
