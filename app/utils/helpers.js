var axios = require('axios');

var API_KEY = proccess.env.API_KEY;

var daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

var monthsMap = {
  "0":"Jan",
  "1":"Feb",
  "2":"Mar",
  "3":"Apr",
  "4":"May",
  "5":"June",
  "6":"July",
  "7":"Aug",
  "8":"Sept",
  "9":"Oct",
  "10":"Nov",
  "11":"Dec"
};

var helpers = {
  getWeather: function (city) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='
     + city + '&type=accurate&APPID=' + API_KEY + '&cnt=5')
      .then(function (data) { return data.data; }).catch(function (err) {
        console.warn('Error in getWeather', err);
      })
  },
  convertTemp: function (kelvin) {
    return kelvin - 273.15
  },
  getDate: function (unixTimestamp) {
    var date = new Date(unixTimestamp * 1000);
    var day = daysMap[date.getDay()];
    var month = monthsMap[date.getMonth()] + ' ' + date.getDate();
    return day + ', ' + month;
  }
};

module.exports = helpers;
