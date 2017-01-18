var axios = require('axios');

const AMDOREN_URL = 'https://www.amdoren.com/api/timezone.php?api_key=tSG5HzwPJVKxr3G6QA4GqLnyrVWqrb&r=jsonp';

module.exports = {
  getTime: function (place) {
    var encodedPlace = encodeURIComponent(place);
    var requestUrl = `${AMDOREN_URL}&q=${encodedPlace}`;

    axios.get(requestUrl).then(function (res) {
      return res.time;
    });
  }
}

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
