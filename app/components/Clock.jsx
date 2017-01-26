var React = require('react');
var ClockForm = require('ClockForm');
var ClockMessage = require('ClockMessage');
var WorldClock = require('WorldClock');

var Clock = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
      // place: '{insert lat and long points}',
      // time: '{search for time zone}'
    }
  },
  handleSearch: function (place) {
    var that = this;

    this.setState({isLoading: true});

    WorldClock.getTime(place).then(function (time) {
      that.setState({
        place: place,
        time: time,
        isLoading: false
      });
    });
    // this.setState({
    //   place: place,
    //   time: 333
    // });
  },
  render: function(){
    var {isLoading, place, time} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Please wait while we fetch your timezone....</h3>;
      } else if (place && time) {
        return <ClockMessage place={place} time={time}/>;
      }
    }

    return (
      <div>
        <h3>Timezone Finder</h3>
        <ClockForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Clock;
