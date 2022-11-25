getSelection(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.showPositionn);
    }
    else{
        alert("Geolocation is not supported by this browser.");
    }
}
showPositionn(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    console.log("latitude : " + lat);
    console.log("longitude : " + lng);
}