var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a clock application I built using React.
      </p>
      <p>
        This application takes latitude and longitude coordinates, and returns the corresponding time zone.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
        </li>
        <li>
          <a href="https://developers.google.com/maps/documentation/timezone/intro">Google Maps Timezone API</a> - I used the Google Maps Timezone API to search for timezones by coordinates.
        </li>
        <li>
          <a href="https://github.com/andrewjmead/react-course-boilerplate-app">Boilerplate</a> - I made use of the Boilerplate presented in Andrew Mead's React Development course.
        </li>
      </ul>

    </div>
  )
};


module.exports = About;
