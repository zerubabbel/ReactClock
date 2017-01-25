var React = require('react');
var ClockForm = require('ClockForm');
var ClockMessage = require('ClockMessage');
var WorldClock = require('WorldClock');

var Clock = React.createClass({
  getInitialState: function () {
    return {
      place: '{insert lat and long points}',
      time: '{search for time zone}'
    }
  },
  handleSearch: function (place) {
    var that = this;

    WorldClock.getTime(place).then(function (time) {
      that.setState({
        place: place,
        time: time
      });
    });
    // this.setState({
    //   place: place,
    //   time: 333
    // });
  },
  render: function(){
    var {place, time} = this.state;

    return (
      <div>
        <h3>Timezone Finder</h3>
        <ClockForm onSearch={this.handleSearch}/>
        <ClockMessage place={place} time={time}/>
      </div>
    )
  }
});

module.exports = Clock;
