getPostalCodeFromGoogle(){
    if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position =>{
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        console.log("latitude : " + lat);
        console.log("longitude : " + lng);
        let latlng = lat+","+lng;
        let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+latlng+"&key="+<<YOUR_MAPS_API_KEY>>
        axios.get(url).then(res => {
            for (let i=0; i < res.data.results.length; i++)
            {
                if(res.data.results[i].types[0] === "postal_code")
                {
                    let address_components = res.data.results[i].address_components;
                    for (let j = 0; j < address_components.length; j++)
                    {
                        if(address_components[j].types[0] === "postal_code")
                        {
                            let googleGeocodePostalCode = address_components[j].long_name;
                            console.log("Google geocode postalcode loaded for viewer : ", googleGeocodePostalCode);
                        }
                    }
                }
            }
        })
            .catch(err => {
                console.error(err);
            });
    }),(error)=>{
        console.error(error);
    },
        {
            enableHighAccuracy : false, // dont care of high accuracy! change to true if your app cares
            timeout : 15000, // wait 15 seconds before giving up
            maximumAge:3600000, // 1 hour, cached value
    
        };
    } 
    else {
        logger.error("Geolocation is not supported by this browser.");
        }
    }