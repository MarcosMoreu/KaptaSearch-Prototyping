var emojioneareaeditor0 = document.getElementById('emojionearea')

emojioneareaeditor0.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("searchWocMap").click();
  }
});
document.getElementById('searchWocMap').onclick = function(e){
  console.log('searchclicked')
  // setTimeout(function(){
  //   document.getElementById("bot").style.fontSize = "16px";
  //   document.getElementById("bot").style.color = 'white';
  //   document.getElementById('bot').innerHTML = '    Zoom to the area of interest'
  //   document.getElementById("bot").style.display = 'initial'
  // },200)
//   document.getElementById("bot").style.backgroundColor = '#888686'

// setTimeout(function(){
//   document.getElementById("bot").style.backgroundColor = '#616060'

// },100)


  console.log('searchresult', searchResult)
  var emojioneareaeditor0 = document.getElementById('emojionearea')
  checkTextbox = setInterval(function() {
    // console.log('checking text')
      if (emojioneareaeditor0.value.length == 0) {
        document.getElementById("imagesearchWocMap").src = 'images/arrowUp.png'
        searchResult = 'nosearchyet'
      }
  },100)

// if(searchResult == 'nosearchyet'){
  /////////////////////////// THE QUERY ///////////////////////////////////////
  var datePeriodAgoReplaceComaInvert = '2010-1-1'
  var sapelliProjectIdentifier = '111'
  var boxContent = document.getElementById('emojionearea').value
  // var sqlQueryWithoutCondition = "SELECT geom, contributionid, areapolygon, lengthline, date, attribute1s, attribute2s, attribute3s, attribute11n, attribute12n, attribute13n, attribute14n, attribute15n FROM `carto-dw-ac-745p52tn.private_marcos_moreu_a1ec85bf.gxdb_QMM_Madagascar` WHERE sapprojid='" +sapelliProjectIdentifier+ "' AND (attribute1s ";
  //
  // var sqlCondition =
  //  "LIKE '%" + boxContent +"%')" //exact value
  //
  //  +" AND (timestamp>'"+datePeriodAgoReplaceComaInvert +"')";
  // var sqlQuerySelect = sqlQueryWithoutCondition + sqlCondition

  // var sqlQuerySelect = "SELECT geom FROM `carto-demo-data.demo_tables.dataappeal_restaurants_and_cafes_berlin_cpg`"
  // var sqlQuerySelectEncoded = encodeURI(sqlQuerySelect)

  //   requestCartoData(sqlQuerySelectEncoded)
///////////////////////////////////////////////////////////////////////////////

  console.log(emojioneareaeditor0.value)
        if(boxContent.includes('berlin') && boxContent.includes('cafes')){ //simulate data found
          // document.getElementById("imagesearchWocMap").src = 'images/arrowRight.png'
          searchResult = 'data'
          var sqlQuerySelect = "SELECT geom FROM `carto-demo-data.demo_tables.dataappeal_restaurants_and_cafes_berlin_cpg`"
          var sqlQuerySelectEncoded = encodeURI(sqlQuerySelect)
        
            requestCartoData(sqlQuerySelectEncoded)
            document.getElementById("bot").style.fontSize = "16px";
            document.getElementById("bot").style.color = 'white';
            document.getElementById('bot').innerHTML = '    Searching...'
            document.getElementById("bot").style.display = 'initial'
            setTimeout(() => {
              document.getElementById("bot").style.fontSize = "16px";
              document.getElementById("bot").style.color = 'white';
              document.getElementById('bot').innerHTML = '    Do you want to download or query this ground data? (Yes/No)'
              document.getElementById("bot").style.display = 'initial'
            }, 3000);

          // document.getElementById('seefullchat').style.display = 'initial'
        }else{ //simulate data found
          if(boxContent.includes('download')){
            document.getElementById("bot").style.fontSize = "16px";
            document.getElementById("bot").style.color = 'white';
            document.getElementById('bot').innerHTML = '    Downloading data'
            document.getElementById("bot").style.display = 'initial'
            // document.getElementById('seefullchat').style.display = 'initial'
          }else if(boxContent.includes('query')){

            document.getElementById("bot").style.fontSize = "16px";
            document.getElementById("bot").style.color = 'white';
            document.getElementById('bot').innerHTML = '    Preparing your request...'
            document.getElementById("bot").style.display = 'initial'
            setTimeout(() => {
              document.getElementById("bot").style.fontSize = "16px";
              document.getElementById("bot").style.color = 'white';
              document.getElementById('bot').innerHTML = '    Use this query to monitor the data in real time: SELECT geom FROM `carto-demo...'
              document.getElementById("bot").style.display = 'initial'
            }, 3000);
            // document.getElementById('seefullchat').style.display = 'initial'
          }else if(boxContent.includes('no')){
            document.getElementById("bot").style.fontSize = "16px";
            document.getElementById("bot").style.color = 'white';
            document.getElementById('bot').innerHTML = '    Search more'
            document.getElementById("bot").style.display = 'initial'
          
          
          }else if(boxContent.includes('yes')){
              document.getElementById('homepage').style.display = 'initial'
              document.getElementById('formGobackbutton').style.display = 'initial'
              document.getElementById('submitrequestbutton').style.display = 'initial'
              document.getElementById('inputs').style.display = 'initial'
              document.getElementById('bot').style.display = 'none'
              document.getElementById('emojionearea').style.display = 'none'
              document.getElementById('askthemap').style.display = 'none'
              document.getElementById('dropDown').style.display = 'none'
              document.getElementById('languages').style.display = 'none'
              document.getElementById('kaptainitialscreen').style.display = 'none'
              document.getElementById('map').style.display = 'none'
              document.getElementById('searchWocMap').style.display = 'none'
              document.getElementById('backtohomepage').style.display = 'none'

          
          
          }else if(boxContent.includes('holahola')){
          
          
          
          }else if(boxContent.includes('dddsadfadsfa')){
          
          
          
          }else if(boxContent.includes('ngfafdafdasfdaso')){
          
          
          
          }
          else{
          // document.getElementById("imagesearchWocMap").src = 'images/arrowRight.png'
          searchResult = 'nodata'
          document.getElementById("bot").style.fontSize = "16px";
          document.getElementById("bot").style.color = 'white';
          document.getElementById('bot').innerHTML = '    Searching...'
          document.getElementById("bot").style.display = 'initial'
          setTimeout(() => {
            document.getElementById("bot").style.fontSize = "16px";
            document.getElementById("bot").style.color = 'white';
            document.getElementById('bot').innerHTML = '    No data found. Do you want to launch a crowdsourcing campaign? (Yes/No)'
            document.getElementById("bot").style.display = 'initial'
          }, 2000);

          // document.getElementById('seefullchat').style.display = 'initial'

        }
      }
        
// }else{



//     if(searchResult == 'data'){
//       console.log('searchresult second click', searchResult)
//       document.getElementById('initialscreen2options').style.display = 'initial'
//       document.getElementById('formGobackbutton').style.display = 'initial'
//       document.getElementById('submitrequestbutton').style.display = 'initial'
//       document.getElementById('inputs').style.display = 'initial'
//       document.getElementById('askthemap').style.display = 'none'
//       document.getElementById('dropDown').style.display = 'none'
//       document.getElementById('languages').style.display = 'none'
//       document.getElementById('kaptainitialscreen').style.display = 'none'

//     }else if(searchResult == 'nodata'){
//       console.log('searchresult second click', searchResult)

//         document.getElementById('initialscreen2options').style.display = 'initial'
//         document.getElementById('formGobackbutton').style.display = 'initial'
//         document.getElementById('submitrequestbutton').style.display = 'initial'
//         document.getElementById('inputs').style.display = 'initial'
//         document.getElementById('askthemap').style.display = 'none'
//         document.getElementById('dropDown').style.display = 'none'
//         document.getElementById('languages').style.display = 'none'
//         document.getElementById('kaptainitialscreen').style.display = 'none'
//       }
// }

// return searchResult

var emojioneareaeditor0 = document.getElementById('emojionearea')
emojioneareaeditor0.value = ''
emojioneareaeditor0.placeholder = '...'
}
