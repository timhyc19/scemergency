function getGeoLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude.toString();
    const lon = position.coords.longitude.toString();
    const GOOGLE_API = 'redacted'
    // const http = new XMLHttpRequest()
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lon + '&key=' + GOOGLE_API
    // http.open("GET", url)
    // http.send()
    // var address = ""
    // http.onreadystatechange = (e)=>{
    //   var txt = JSON.parse(http.responseText)
    //   console.log(txt.results[0].formatted_address)

    fetch(url).then(res => res.json())
		          .then((res) => {
                let address = res.results[0].formatted_address;
                localStorage.setItem("address", address)

              })
  })}

getGeoLocation()
