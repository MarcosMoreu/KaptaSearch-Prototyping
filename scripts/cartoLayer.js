
var requestCartoData = function(sqlQuerySelectEncoded) {

      var settings = {
        "url":"https://gcp-europe-west1.api.carto.com/v3/maps/carto_dw/query?format=geojson&q=" + sqlQuerySelectEncoded,

        "method": "GET",
        "timeout": 0,
        "cache":false,
        "success":testcarto,
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfNzQ1cDUydG4iLCJqdGkiOiIxOTIxMzgwMiJ9.e8ad2qIgiY4YgpMIE3DfBJ-ipH0k_Zk3APbIkYZyJiM",
          "Cache-Control": "max-age=300"
        },
      };
        clearInterval(requestCartoData);
        
        $.ajax(settings).fail(function(jqXHR, textStatus, errorThrown) {
          // Handle failure here
          console.error("Request failed: " + textStatus + ", " + errorThrown);
          // Optionally, execute other failure logic, e.g., show an error message to the user
      });
        function getGeoJSON() {
          $.getJSON(settings, function(data) {
            $.each(data.rows, function(key, val) {

            });
          });
        };
      getGeoJSON(); //////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

}


var cartopopupcontentrefined
var datatoexport
var testcarto = function(data) {
  datatoexport = data
console.log('test carto')
console.log(data)
    map.addSource('test', {
      'type': 'geojson',
      'data': data
    });
    map.addLayer(
    {
    'id': 'test',
    'type': 'circle',
    'source': 'test',
    // 'source-layer': 'sf2010',
    'paint': {
    // Make circles larger as the user zooms from z12 to z22.
    'circle-radius': {
    'base': 1.75,
    'stops': [
    [12, 2],
    [22, 180]
    ]
    },
    'circle-color': 'red'
    }
    },

    );
    try{
      const coordinates = data.features[0].geometry.coordinates;
      // currentLocation = [52.54463, 13.36817];
      console.log(coordinates)
      var bounds = new mapboxgl.LngLatBounds();
  
        data.features.forEach(function(feature) {
            bounds.extend(feature.geometry.coordinates);
        });
        console.log(bounds)
        map.fitBounds(bounds);
  
        setTimeout(() => {
          document.getElementById("bot").style.fontSize = "16px";
          document.getElementById("bot").style.color = 'white';
          document.getElementById('bot').innerHTML = '    Do you want to download this ground data?? (yes/no)'
          document.getElementById("bot").style.display = 'initial'
        }, 3000);
        searchResult = 'data'
    }catch(err){
      document.getElementById('bot').innerHTML = '    No data found. Do you want to launch a crowdsourcing campaign? (yes/no)'
      document.getElementById("bot").style.display = 'initial'
      console.log('error sql catched due to empty layer after filter applied')
    }

      return searchResult && datatoexport

}


