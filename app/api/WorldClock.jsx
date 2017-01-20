var axios = require('axios');

const AMDOREN_URL = 'https://www.amdoren.com/api/timezone.php?api_key=tSG5HzwPJVKxr3G6QA4GqLnyrVWqrb';

module.exports = {
  getTime: function (place) {
    var encodedPlace = encodeURIComponent(place);
    var requestUrl = `${AMDOREN_URL}&loc=${encodedPlace}`;

      return axios.get(requestUrl).then(function (res) {
      return res.time;
    });
  }
}





// http://api.openweathermap.org/data/2.5/weather?appid=8cb058981da21aef94e675c4b4f574b9&units=imperial
// AIzaSyAmPjHq1qkoJdJl6owHPl--WmmsAzOdAMk
//
// content_copy
//
//
//
// https://maps.googleapis.com/maps/api/timezone/outputFormat?parameters
//
//
// Amdoren
// tSG5HzwPJVKxr3G6QA4GqLnyrVWqrb
//
// remember to install axios around 2mins sections 34
//
//
//
//
// $(function(){
//
//   $.getJSON('https://www.amdoren.com/api/timezone.php?api_key=tSG5HzwPJVKxr3G6QA4GqLnyrVWqrb&loc=Rome&r=json', function(data){
//     console.log(data);
//   });
// });
// //
//
// $.getJSON('https://www.amdoren.com/api/timezone.php?api_key=tSG5HzwPJVKxr3G6QA4GqLnyrVWqrb&loc=Rome', function(){
//   console.log(myData);
//
//
//
//
//
// });
