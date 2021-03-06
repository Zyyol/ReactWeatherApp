import axios from 'axios'
import { API_KEY } from './API_KEY'

const daysMap = {
  "0":"Sunday",
  "1":"Monday",
  "2":"Tuesday",
  "3":"Wednesday",
  "4":"Thursday",
  "5":"Friday",
  "6":"Saturday"
};

const monthsMap = {
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

String.prototype.capitalize = function() {
    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};


export async function getWeather (city) {
  try {
    const data = await axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=
      ${city}&type=accurate&APPID=${API_KEY}&cnt=5`)
    return data.data
  } catch (error) {
    console.warn('Error in getWeather', error)
  }
}

export function convertTemp (kelvin) {
  return parseInt(kelvin - 273.15)
}

export function getDate (unixTimestamp) {
  const date = new Date(unixTimestamp * 1000)
  const day = daysMap[date.getDay()]
  const month = `${monthsMap[date.getMonth()]} ${date.getDate()}`
  return `${day}, ${month}`
}
