function getGeoLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude.toString();
    const lon = position.coords.longitude.toString();
    const GOOGLE_API = 'AIzaSyAbbwm41-HW0vI_TT4U-Kxh5s1XTe6F1EI'

    const url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&key=' + GOOGLE_API

    fetch(url).then(res => res.json())
      .then((res) => {
        let address = res.results[0].formatted_address;
        if(localStorage.getItem("Opened") == 1){
          document.getElementById("loc").innerHTML = "I need police services. My location is: " + address
        }
        else if(localStorage.getItem("Opened") == 2){
          document.getElementById("loc").innerHTML = "I need ambulance services. My location is: " + address
        }
        else if(localStorage.getItem("Opened") == 3){
          document.getElementById("loc").innerHTML = "I need fire services. My location is: " + address
        }
      })
  })
}

getGeoLocation()
