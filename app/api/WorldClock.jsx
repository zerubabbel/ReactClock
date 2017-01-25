var axios = require('axios');

const GOOGLEMAPS_URL ='https://maps.googleapis.com/maps/api/timezone/json?timestamp=1331161200&key=AIzaSyC3qMhvazCdQncr0UsA1ui65KTZi113r0M';

module.exports = {
  getTime: function (place) {
    var encodedPlace = encodeURIComponent(place);
    var requestUrl = `${GOOGLEMAPS_URL}&location=${encodedPlace}`;

    return axios.get(requestUrl).then(function (res) {
      console.log(res, 'Bob');
      return res.data.timeZoneName;


    });
  }
}


// $(function(){
//
//   $.getJSON('https://maps.googleapis.com/maps/api/timezone/json?timestamp=1331161200&key=AIzaSyC3qMhvazCdQncr0UsA1ui65KTZi113r0M&location=40,30', function(data){
//     console.log(data);
//   });
// });



// 'https://maps.googleapis.com/maps/api/timezone/json?timestamp=1331161200&key=AIzaSyC3qMhvazCdQncr0UsA1ui65KTZi113r0M'

//google api key AIzaSyC3qMhvazCdQncr0UsA1ui65KTZi113r0M
// https://crossorigin.me/https://www.amdoren.com/api/timezone.php?api_key=tSG5HzwPJVKxr3G6QA4GqLnyrVWqrb

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




////https://maps.googleapis.com/maps/api/timezone/outputFormat=JSON?location:
