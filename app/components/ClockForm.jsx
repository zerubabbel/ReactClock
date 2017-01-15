var React = require('react');

var ClockForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var place = this.refs.place.value;

    if (place.length > 0) {
      this.refs.place.value = '';
      this.props.onSearch(place);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="place"></input>
          <button>Get Time</button>
        </form>
      </div>
    )
  }
});


module.exports = ClockForm;
