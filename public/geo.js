require('dotenv').config()

function getGeoLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude.toString();
    const lon = position.coords.longitude.toString();
    const GOOGLE_API = process.env.GOOGLE_API_KEY

    const url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&key=' + GOOGLE_API

    fetch(url).then(res => res.json())
      .then((res) => {
        let address = res.results[0].formatted_address;
        document.getElementById("loc").innerHTML = "My location is: " + address 
      })
  })
}

getGeoLocation()