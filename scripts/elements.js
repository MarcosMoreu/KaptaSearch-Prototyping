var dropDownOpen = false;
var isOnline = navigator.onLine
var browserLanguage = navigator.language
var languageSelected

// document.getElementById('english').src = "https://raw.githubusercontent.com/hjnilsson/country-flags/master/png100px/ad.png"
//console.(screen.height)
//console.('innerheight',window.innerHeight)

// document.getElementById('startMapping').onclick = function(e){
//   document.getElementById("startMapping").style.animation = "initial";
//
//
//    setTimeout(function(){
//     //  document.getElementById("startMapping").style.animation = "none";
//     // document.getElementById("english").style.display = "none";
//     // document.getElementById("swahili").style.display = "none";
//     // document.getElementById("other1").style.display = "none";
//     // document.getElementById("other1UnderDev").style.display = "none";
//     // document.getElementById("AlertTranslate").style.display = "none";
//      location.href='../';
//    },100)
//   }
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com

mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY29zbW9yZXV1Y2wiLCJhIjoiY2xwZHNlbmFpMDVoZjJpcGJxOHplOGw0ZCJ9.MiHNkvMRkTcfndsLMH166w';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/dark-v11',
zoom: 1.5,
center: [30, 50],
projection: 'globe',
// customAttribution: 'Map design by me',
// attributionControl: 'Leaflet | Mapbox and OpenStreetMap Contributors',
// attributionControl: false
});
var intervalremoveattributes = setInterval(function(){
  try{
    var mapboxattrib1 = document.getElementsByClassName("mapboxgl-ctrl-bottom-right")
    mapboxattrib1[0].style.display = 'none'
    var mapboxattrib2 = document.getElementsByClassName("mapboxgl-ctrl-bottom-left")
    mapboxattrib2[0].style.display = 'none'
  }catch(e){
    console.log('error', e)
  }

},1)

map.on('load', () => {
  console.log('map loaded')
// Set the default atmosphere style
map.setFog({
color: 'grey', // Lower atmosphere
    'high-color': '#232222', // Upper atmosphere
    'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
    'space-color': '#232222', // Background color
    'star-intensity': 0 // Background star brightness (default 0.35 at low zoooms )
});
// var mapboxattrib1 = document.getElementsByClassName("mapboxgl-ctrl-bottom-right")
// mapboxattrib1[0].style.display = 'initial'
// var mapboxattrib2 = document.getElementsByClassName("mapboxgl-ctrl-bottom-left")
// mapboxattrib2[0].style.display = 'initial'
// var mapboxattrib = document.getElementsByClassName("mapbox-improve-map")
// mapboxattrib[0].innerHTML = ''
// var mapboxattribbox = document.getElementsByClassName("mapboxgl-ctrl-bottom-right")
// mapboxattribbox[0].style.backgroundColor = '#fffff'

});



setTimeout(function(){
  clearInterval(intervalremoveattributes)
},2000)

document.getElementById('dropDown').onclick = function(e){

    if(dropDownOpen == false){
      document.getElementById('aboutButton').style.display = "initial";
      document.getElementById('methodologyButton').style.display = "initial";

      if(isOnline == true){
        document.getElementById('technologyButton').style.display = "initial";
        // document.getElementById('methodologyButton').style.display = "initial";

      }
      document.getElementById('dropDown').style.backgroundColor = 'grey';
      document.getElementById('imageDropDown').src = '../images/burgerBlack.png';
      dropDownOpen = true
    }else{
      document.getElementById('aboutButton').style.display = "none";
      document.getElementById('technologyButton').style.display = "none";
      document.getElementById('methodologyButton').style.display = "none";
      document.getElementById('dropDown').style.backgroundColor = 'transparent';
      document.getElementById('imageDropDown').src = '../images/burger.png';

      dropDownOpen = false
    }

    return dropDownOpen
  }
var cognitoFormLoaded = false

document.getElementById('aboutButton').onclick = function(e){
   setTimeout(function(){
     document.getElementById("burgerGobackbutton").style.display = "initial";
     document.getElementById('aboutContent').style.display = 'initial'
     // document.getElementById('TextRequest').style.display = 'initial'

     // document.getElementById("cognitoForm").style.display = "initial";
     document.body.style.overflow = 'visible';
     // document.getElementById('loadingCognito').style.display = "none";
     document.getElementById('dropDown').style.display = "none";
     document.getElementById('technologyButton').style.display = "none";
    document.getElementById('aboutButton').style.display = "none";
    document.getElementById("methodologyButton").style.display = "none";
    document.getElementById('technologyButton').style.display = "none";
    document.getElementById('askthemap').style.display = 'none'
    document.getElementById('dropDown').style.display = 'none'
    document.getElementById('languages').style.display = 'none'
    document.getElementById('kaptainitialscreen').style.display = 'none'
    document.getElementById('map').style.display = 'none'

   },100)
  }

document.getElementById('technologyButton').onclick = function(e){

    setTimeout(function(){
      document.getElementById("burgerGobackbutton").style.display = "initial";
      document.getElementById('technologyContent').style.display = 'initial'
      // document.getElementById("cognitoForm").style.display = "initial";
      document.body.style.overflow = 'visible';
      // document.getElementById('loadingCognito').style.display = "none";
      document.getElementById('dropDown').style.display = "none";
      document.getElementById('technologyButton').style.display = "none";
     document.getElementById('aboutButton').style.display = "none";
     document.getElementById("methodologyButton").style.display = "none";
     document.getElementById('technologyButton').style.display = "none";
     document.getElementById('askthemap').style.display = 'none'
     document.getElementById('dropDown').style.display = 'none'
     document.getElementById('languages').style.display = 'none'
     document.getElementById('kaptainitialscreen').style.display = 'none'
     document.getElementById('map').style.display = 'none'


     // if(cognitoFormLoaded == false){
     //   document.getElementById("loadingCognito").style.display = "initial";
     // }

   },100)
         // Cognito.load("forms", { id: "2" })
         // cognitoFormLoaded = true
         //

  // setTimeout(function(){
  //   document.getElementById("loadingCognito").style.display = "none";
  // },4000)
  // return cognitoFormLoaded
}


document.getElementById('methodologyButton').onclick = function(e){
   setTimeout(function(){

     document.getElementById("burgerGobackbutton").style.display = "initial";
     document.getElementById("methodologyContent").style.display = "initial";

     document.body.style.overflow = 'visible';
     // document.getElementById('loadingCognito').style.display = "none";
     document.getElementById('dropDown').style.display = "none";
     document.getElementById('technologyButton').style.display = "none";
    document.getElementById('aboutButton').style.display = "none";
    document.getElementById("methodologyButton").style.display = "none";
    document.getElementById('technologyButton').style.display = "none";
    document.getElementById('askthemap').style.display = 'none'
    document.getElementById('dropDown').style.display = 'none'
    document.getElementById('languages').style.display = 'none'
    document.getElementById('kaptainitialscreen').style.display = 'none'
    document.getElementById('map').style.display = 'none'


   },100)
  }

document.getElementById('burgerGobackbutton').onclick = function(e){
  // var storeIframeURL = document.getElementById("youtubeVideo").src
   setTimeout(function(){
     document.getElementById("burgerGobackbutton").style.display = "none";
     document.getElementById("aboutContent").style.display = "none";
     document.getElementById("technologyContent").style.display = "none";
     document.getElementById("methodologyContent").style.display = "none";



     // document.getElementById("TextRequest").style.display = "none";

     document.body.style.overflow = 'hidden';

     document.getElementById("aboutButton").style.display = "none";
     document.getElementById("methodologyButton").style.display = "none";
     document.getElementById('technologyButton').style.display = "none";
     // if(languageSelected == 'english'){
       document.getElementById('dropDown').style.backgroundColor = 'transparent';
       document.getElementById('imageDropDown').src = '../images/burger.png';
       document.getElementById('dropDown').style.display = "initial";
       dropDownOpen = false
       document.getElementById('map').style.display = 'initial'

       document.getElementById('askthemap').style.display = 'initial'
       document.getElementById('dropDown').style.display = 'initial'
       document.getElementById('languages').style.display = 'initial'
       document.getElementById('kaptainitialscreen').style.display = 'initial'

   },100)
   return dropDownOpen
  }
var checkTextbox
var youtubeVideoLoaded = false
var searchResult = 'nosearchyet'

document.getElementById('askthemap').onclick = function(){
  clearInterval(intervalremoveattributes)


  document.getElementById('askthemap').style.backgroundColor = '#4B0101'

  setTimeout(function(){
    document.getElementById('classification').style.display = 'initial'
    document.getElementById('emojionearea').style.display = 'initial'
    document.getElementById('backtohomepage').style.display = 'initial'
    document.getElementById('searchWocMap').style.display = 'initial'
  
  
    document.getElementById("Alert").style.display = 'none'
    document.getElementById("aboutButton").style.display = 'none'
    document.getElementById("technologyButton").style.display = 'none'
    document.getElementById("methodologyButton").style.display = 'none'
    // document.getElementById("kaptainitialscreen").style.display = 'none'
    document.getElementById("languages").style.display = 'none'
    document.getElementById("languages").style.display = 'none'
    document.getElementById("dropDown").style.display = 'none'
    document.getElementById("askthemap").style.display = 'none'
    map.flyTo({
      center: [0,10],
      zoom: 2,
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });


      var mapboxAttrib1style1 = document.getElementsByClassName("mapboxgl-ctrl-bottom-right")
      mapboxAttrib1style1[0].style.backgroundColor = 'transparent'
      mapboxAttrib1style1[0].style.display = 'initial'
      var mapboxAttrib1style2 = document.getElementsByClassName("mapboxgl-ctrl mapboxgl-ctrl-attrib")
      mapboxAttrib1style2[0].style.backgroundColor = 'transparent'
      mapboxAttrib1style2[0].style.display = 'initial'
      
      // leafletAttrib1style2.style.color = 'yellow'
      var mapboxAttrib1style3 = document.getElementsByClassName("mapboxgl-ctrl-attrib-inner")
      mapboxAttrib1style3[0].style.backgroundColor = 'transparent'
      mapboxAttrib1style3[0].style.color = 'grey'
      mapboxAttrib1style3[0].innerHTML = 'Mapbox | CARTO | OSM Contributors'
      mapboxAttrib1style3[0].style.display = 'initial'
  },300)



  


  // setTimeout(function(){
  //   document.getElementById("bot").style.display = 'none'
  // },4000)

  setTimeout(function(){
    document.getElementById('homepage').style.display = 'none'
    document.getElementById("map").style.opacity = 1;
    document.getElementById('MapLoading').style.opacity = 1
    document.getElementById('askthemap').style.backgroundColor = 'white'


  },200)

}
document.getElementById('backtohomepage').onclick = function(e){
  document.getElementById('askthemap').style.backgroundColor = '#740202'

  var emojioneareaeditor0 = document.getElementById('emojionearea')

emojioneareaeditor0.value = ''
document.getElementById('classification').style.display = 'none'
document.getElementById('emojionearea').style.display = 'none'
document.getElementById('backtohomepage').style.display = 'none'
document.getElementById('searchWocMap').style.display = 'none'
document.getElementById('bot').style.display = 'none'
// map.removeSource('test')
map.removeLayer('test')

map.flyTo({
  center: [0,10],
  zoom: 2,
  essential: true // this animation is considered essential with respect to prefers-reduced-motion
  });

  // filter_Button.addTo(map);
  //
  // document.getElementById('filter').click()
  // filter_Button.removeFrom(map);
  // document.getElementById('tutorial').click()

  clearInterval(checkTextbox)
  document.getElementById('homepage').style.display = 'initial'

  document.getElementById('askthemap').style.display = 'initial'
  document.getElementById('dropDown').style.display = 'initial'
  document.getElementById('languages').style.display = 'initial'
  document.getElementById('kaptainitialscreen').style.display = 'initial'
}


document.getElementById('formGobackbutton').onclick = function(e){
   setTimeout(function(){
     document.getElementById("formGobackbutton").style.display = "none";
     document.getElementById('homepage').style.display = 'none'
     document.getElementById('inputs').style.display = 'none'
     document.getElementById('requestsubmitedmessage').style.display = 'none'
     document.getElementById('submitrequestbutton').style.display = 'none'
     document.getElementById('bot').style.display = 'initial'
     document.getElementById('emojionearea').style.display = 'initial'
     document.getElementById('map').style.display = 'initial'
     document.getElementById('searchWocMap').style.display = 'initial'
     document.getElementById('backtohomepage').style.display = 'initial'

   },100)
  }

let var1, var2, var3, var4, var5;

 document.querySelectorAll('input[type="text"]').forEach(input => {
     input.addEventListener('change', function() {
         switch(this.id) {
             case 'input1': var1 = this.value; break;
             case 'input2': var2 = this.value; break;
             case 'input3': var3 = this.value; break;
             case 'input4': var4 = this.value; break;
             case 'input5': var5 = this.value; break;
         }
     });
 });
 document.getElementById('submitrequestbutton').onclick = function(e){
    setTimeout(function(){
      document.getElementById("inputs").style.display = "none";
      document.getElementById('submitrequestbutton').style.display = 'none'
      document.getElementById('formGobackbutton').style.display = 'none'


      document.getElementById('requestsubmitedmessage').style.display = 'initial'
      document.getElementById('finishandstart').style.display = 'initial'


      // document.getElementById('initialscreen2options').style.display = 'none'
      // document.getElementById('inputs').style.display = 'none'

    },100)
   }
   document.getElementById('finishandstart').onclick = function(e){
      setTimeout(function(){
        document.getElementById('finishandstart').style.display = 'none'
        document.getElementById("formGobackbutton").style.display = "none";
        document.getElementById('homepage').style.display = 'none'
        document.getElementById('inputs').style.display = 'none'
        document.getElementById('requestsubmitedmessage').style.display = 'none'
        document.getElementById('submitrequestbutton').style.display = 'none'
        document.getElementById('classification').style.display = 'initial'
        document.getElementById('emojionearea').style.display = 'initial'
        document.getElementById('backtohomepage').style.display = 'initial'
        document.getElementById('searchWocMap').style.display = 'initial'
        document.getElementById('map').style.display = 'initial'

        // document.getElementById('initialscreen2options').style.display = 'none'
        // document.getElementById('inputs').style.display = 'none'

      },100)
     }
