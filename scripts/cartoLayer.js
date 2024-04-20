
var requestCartoData = function(sqlQuerySelectEncoded) {
  //console.('requestCartoDataaaaaaaaaaaaaaaaaaaaaaaa')
    // if (isOnline == true) {

      // sqlQuery = "SELECT geom, contributionid, phone, sapprojid, areapolygon, lengthline, distance, date, attribute1s, attribute2s, attribute3s, attribute4s, attribute5s, attribute6s, attribute7s, attribute8s, attribute9s, attribute10s, attribute11n, attribute12n, attribute13n, attribute14n, attribute15n, attribute16n, attribute17n, attribute18n, attribute19n, attribute20n FROM `carto-dw-ac-745p52tn.private_marcos_moreu_a1ec85bf.gxdb0`";
      var settings = {
        "url":"https://gcp-europe-west1.api.carto.com/v3/maps/carto_dw/query?format=geojson&q=" + sqlQuerySelectEncoded,
        // carto-demo-data.demo_tables.dataappeal_restaurants_and_cafes_berlin_cpg

        // "url":"https://gcp-europe-west1.api.carto.com/v3/maps/carto_dw/table?name=carto-demo-data.demo_tables.dataappeal_restaurants_and_cafes_berlin_cpg",
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
      // deflated.addTo(map)
    // }
    // return cartousername
}
// var requestCartoData = function(sqlQuerySelectEncoded) {
//   var settings = {
//       "url": "https://gcp-europe-west1.api.carto.com/v3/maps/carto_dw/query?format=geojson&q=" + sqlQuerySelectEncoded,
//       "method": "GET",
//       "timeout": 0,
//       "cache": false,
//       "headers": {
//           "Content-Type": "application/json",
//           "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhIjoiYWNfNzQ1cDUydG4iLCJqdGkiOiIxOTIxMzgwMiJ9.e8ad2qIgiY4YgpMIE3DfBJ-ipH0k_Zk3APbIkYZyJiM",
//           "Cache-Control": "max-age=300"
//       }
//   };

//   // Remove clearInterval, as it seems to be incorrectly used here. clearInterval should be used with a timer ID.
  
//   $.ajax(settings)
//   .done(function(response) {
//       // Handle success
//       testcarto(response); // Assuming testcarto is your success handler function
//   })
//   .fail(function(jqXHR, textStatus, errorThrown) {
//       // Handle failure
//       console.error("Request failed: " + textStatus + ", " + errorThrown);
//   })
//   .always(function() {
//     console.error("always");

//       // Code to execute regardless of success or failure
//   });
// };

// It's not clear what getGeoJSON function is supposed to do, especially since settings object is not a URL string
// Consider revising or removing this part based on your actual requirements

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
    // Color circles by ethnicity, using a `match` expression.
    'circle-color': 'red'
    }
    },
    // Place polygons under labels, roads and buildings.

    );
    // map.fitBounds('test');
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


