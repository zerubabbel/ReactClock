var React = require('react');
var ClockForm = require('ClockForm');
var ClockMessage = require('ClockMessage');

var Clock = React.createClass({
  getInitialState: function () {
    return {
      place: 'heck',
      time: 2342
    }
  },
  handleSearch: function (place) {
    this.setState({
      place: place,
      time: 333
    });
  },
  render: function(){
    var {place, time} = this.state;

    return (
      <div>
        <h3>Clock</h3>
        <ClockForm onSearch={this.handleSearch}/>
        <ClockMessage place={place} time={time}/>
      </div>
    )
  }
});

module.exports = Clock;
