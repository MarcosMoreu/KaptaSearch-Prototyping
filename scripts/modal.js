// var imagesToPreload = new Array()
// function preload() {
// 				for (i = 0; i < preload.arguments.length; i++) {
// 				  imagesToPreload[i] = new Image()
// 					imagesToPreload[i].src = preload.arguments[i]
//           console.log('image preloaded')
// 				}
// 			}
// 			preload(
//         'images/checkingPw.gif','images/gpsSearching.gif',
//         'images/armchair.png','images/field.png','images/tvSmall.png',
//         'images/osm.png','images/myLayerPrivate.png','images/filterIcon.png',
//         'images/myLayerOpen.png',
// 			)
// window.onload = function(){
//   preload([
//     'images/checkingPw.gif','images/gpsSearching.gif',
//
//     'images/armchair.png','images/field.png','images/tvSmall.png',
//     'images/osm.png','images/myPrivateLayer.png','images/filterIcon.png',
//     'images/myLayerOpen.png',
//     // 'https://mt3.google.com/vt/lyrs=s,h&x=2&y=1&z=2',
//     // 'https://mt3.google.com/vt/lyrs=s,h&x=1&y=2&z=2',
//     // 'https://mt3.google.com/vt/lyrs=s,h&x=1&y=2&z=2',
//     // 'https://mt0.google.com/vt/lyrs=s,h&x=2&y=2&z=2',
//     // 'https://mt1.google.com/vt/lyrs=s,h&x=1&y=0&z=2',
//     // 'https://mt2.google.com/vt/lyrs=s,h&x=2&y=0&z=2',
//     // 'https://mt0.google.com/vt/lyrs=s,h&x=1&y=3&z=2',
//     // 'https://mt1.google.com/vt/lyrs=s,h&x=2&y=3&z=2',
//   ])
// }

//the map is initialised if not first load or when key is clicked

// window.onload = function(){
//   var basemapClass = document.getElementsByClassName('leaflet-layer')
//   basemapClass[0].style.opacity = 1
// }
// document.getElementById('AlertModalIOS').innerHTML = ''
// setTimeout(function(){
//   document.getElementById('AlertModalIOS').innerHTML = ''
//
// },)
var isOnline = navigator.onLine
if(isOnline == false){
  document.getElementById('askthemap').style.opacity = '0.4';
  document.getElementById('askthemap').style.borderColor = 'black'
    document.getElementById('askthemap').disabled = true
}


var phoneNumber
var arrayOfImages = [
  'images/ThumbsUpGreen.png','images/checkingPw.gif',
  'images/talk.png','images/listen.png',

  'images/armchair.png','images/field.png','images/tvSmall.png',
  // 'https://mt3.google.com/vt/lyrs=s,h&x=2&y=1&z=2',
  // 'https://mt3.google.com/vt/lyrs=s,h&x=1&y=2&z=2',
  // 'https://mt3.google.com/vt/lyrs=s,h&x=1&y=2&z=2',
  // 'https://mt0.google.com/vt/lyrs=s,h&x=2&y=2&z=2',
  // 'https://mt1.google.com/vt/lyrs=s,h&x=1&y=0&z=2',
  // 'https://mt2.google.com/vt/lyrs=s,h&x=2&y=0&z=2',
  // 'https://mt0.google.com/vt/lyrs=s,h&x=1&y=3&z=2',
  // 'https://mt1.google.com/vt/lyrs=s,h&x=2&y=3&z=2',


    'images/drawPolygon.png','images/line.png','images/point.png','images/onionlayericon.png',
    'images/applyFilter.png','images/arrowLeft.png', 'images/arrowRight.png', 'images/backButton.png','images/bin.png','images/binOriginal.png','images/binpost.png',
    'images/binpre.png','images/burger.png','images/burgerBlack.png','images/cancel.png','images/clearFilter.png','images/commentFeature.png',
    'images/dateAll.png','images/dateDay.png','images/dateMonth.png','images/dateWeek.png','images/dateYear.png','images/deleteAllVertex.png',
    'images/deleteLastVertex.png','images/devicedownload.png','images/download.png','images/filterIcon.png','images/dtm.png','images/gifcartofilter.gif',
    'images/google.png','images/googleHistorical.png','images/gps.png','images/gpsOff.png','images/gpsSearching.gif','images/gpsSearchingIOS.gif',
    'images/infoGoBack.png','images/key.png','images/lineDeleteAll.png','images/lineDeleteVertex.png','images/padlockclosed.png','images/padlockopen.png',
    'images/locked.png','images/man.png','images/marker-icon.png','images/marker-icon-2x.png','images/marker-icon-cian.png','images/markerPolygonBlue.png','images/markerLine.png','images/markerPolygon.png',
    'images/markerLocalStorage.png','images/myLayerOpen.png','images/myLayerPrivate.png','images/myLayerEmpty.png','images/nautical.svg','images/osm.png',
    'images/other1.png','images/play.png','images/PlusSign.png','images/cameraIcon.png','images/changeCamera.png','images/screenshot.png',
    'images/questionmark.png','images/random.png','images/shareMessagingApps.png','images/shareworld.png','images/shareworldConfirm.png',
    'images/uk.png','images/ethiopiaTutorial.png','images/other1.png','images/underConstruction.png','images/youtube.png','images/youtubeOffline.png',
    'images/shareMessagingAppsYellow.png','images/sendComment.png','images/deleteFromCarto.png',
    'images/LocalStorageRecenter.png',
    'images/excitesTree.png','images/qmm.png',
    'images/customIconsMap.png','images/customIconsCancel.png','images/infohelp.png',

    //sapelli project images
    'images/omoIcons/banana.png','images/omoIcons/boatCrossing.png','images/omoIcons/cattleGrazing.png','images/omoIcons/church.png','images/omoIcons/eldersHut.png','images/omoIcons/fishing.png',
    'images/omoIcons/floodRecessionFlat.png','images/omoIcons/floodRecessionSteep.png','images/omoIcons/goatSheepGrazing.png','images/omoIcons/healthStation.png','images/omoIcons/hotSpring.png','images/omoIcons/hunting.png',
    'images/omoIcons/hutVillage.png','images/omoIcons/irrigationPump.png','images/omoIcons/lakeRecession.png','images/omoIcons/maize.png',
    'images/omoIcons/manualPump.png','images/omoIcons/medicinalPlants.png','images/omoIcons/noFarming.png','images/omoIcons/pondFarming.png','images/omoIcons/Questionmark.png','images/omoIcons/recreationCenter.png',
    'images/omoIcons/reehive.png','images/omoIcons/saltlick.png','images/omoIcons/school.png','images/omoIcons/sorghum.png','images/omoIcons/ThumbsUp.png','images/omoIcons/ThumbsDown.png',
    'images/omoIcons/timber.png','images/omoIcons/treeForGathering.png','images/omoIcons/unknownOther.png','images/omoIcons/veterinary.png','images/omoIcons/waterPoint.png','images/omoIcons/waterPondAnimal.png',
    'images/omoIcons/waterRiverAnimal.png','images/omoIcons/wildFruits.png','images/omoIcons/pathTrack.png','images/omoIcons/cropscombined.png',
    'images/omoIcons/kidsmale.png','images/omoIcons/kidsfemale.png','images/omoIcons/adultsmale.png','images/omoIcons/adultsfemale.png',
    'images/omoIcons/households.png','images/omoIcons/confirm.png',
    'images/omoIcons/conflictgeneric.png','images/omoIcons/livestockdisease.png','images/omoIcons/conflict1.png','images/omoIcons/conflict2.png',
    'images/omoIcons/ld1.png','images/omoIcons/ld2.png','images/omoIcons/ld3.png','images/omoIcons/ld4.png','images/omoIcons/ld5.png','images/omoIcons/legumes.png','images/omoIcons/fire.png','images/omoIcons/deforestation.png',
        // 'images/omoIcons/waterRiverAnimal.png',  'images/omoIcons/waterRiverAnimal.png',  'images/omoIcons/waterRiverAnimal.png'
        // ,  'images/omoIcons/waterRiverAnimal.png',  'images/omoIcons/waterRiverAnimal.png',  'images/omoIcons/waterRiverAnimal.png'
    //sapelli project images
    // 'images/omoIcons/Shelter.png','images/omoIcons/dtm.png','images/omoIcons/pluistorrentielles.png','images/omoIcons/camera.png','images/omoIcons/coutlocation.png',
    // 'images/omoIcons/personnesaffectees.png','images/omoIcons/maisonsdetruites.png','images/omoIcons/femmesnevontpas1.png','images/omoIcons/hommesnevontpas1.png',
    // 'images/omoIcons/regimefoncierchamps.png','images/omoIcons/ventsviolents.png',
    // 'images/omoIcons/seul.png','images/omoIcons/protection.png','images/omoIcons/proprietaire.png','images/omoIcons/mangues.png','images/omoIcons/maize.png',
    // 'images/omoIcons/location.png','images/omoIcons/inondations.png','images/omoIcons/ett.png','images/omoIcons/documentation.png','images/omoIcons/champs.png',
    // 'images/omoIcons/numbers.png',
     'images/omoIcons/ThumbsUp.png','images/omoIcons/ThumbsDown.png',

]

var sharetarget = false
var manualupload = true

var firstLoad = function() { //fucntion to determine if the site is visited for first time
  console.log('FIRST LOAD CALLED')
  console.log('sharetarget',sharetarget)

  // console.log('isfirstload??')
  //$.getScript("lib/leaflet/plugins/Leaflet.draw-1.0.4/src/Leaflet.Draw.Event.js")
    // Check if localStorage is available (IE8+) and make sure that the visited flag is not already set.
    if(localStorage.getItem('pwCorrect')){
      // if (urlContainsHash == true && urlContainsGeoJSON == true){  // if url contains geojson (and coords)
      //   document.getElementById('talk').style.opacity = 0
      //   document.getElementById('listen').style.opacity = 0
      // }
      // if (urlContainsHash != true && urlContainsGeoJSON != true){  // if url contains geojson (and coords)
// if(sharetarget == false){
  setTimeout(function(){
    document.getElementById('askthemap').style.display = 'initial'
    document.getElementById('dropDown').style.display = 'initial'
    document.getElementById('languages').style.display = 'initial'

    document.getElementById('kaptainitialscreen').style.display = 'initial'
    },300)
// }

      // }

      document.getElementById('MapLoading').style.display = 'initial'
      document.getElementById('MapLoading').style.opacity = 0
      jQuery(document).ready(checkContainer);

      function checkContainer () {
        if($('#MapLoading').is(':visible')){ //if the container is visible on the page
            initialiseMap() //map initialised AND LOADED (no modal)
            var imagesToPreload = new Array()
            function preload() {
                    for (i = 0; i < preload.arguments.length; i++) {
                      imagesToPreload[i] = new Image()
                      imagesToPreload[i].src = preload.arguments[i]
                      //console.('image preloaded')
                    }
                  }
                  preload(
                    'images/checkingPw.gif','images/gpsSearching.gif',
                    'images/armchair.png','images/field.png','images/tvSmall.png',
                    'images/osm.png','images/myLayerPrivate.png','images/filterIcon.png',
                    'images/myLayerOpen.png',
                  )
              isFirstTime = false;

        } else {
          setTimeout(checkContainer, 50); //wait 50 ms, then try again
        }
      }
      // var fieldImageCheck = document.getElementById("MapLoading")
      // fieldImageCheck.src = 'images/field.png'
      // var roseid = document.getElementById("rose")
      // roseid.src = 'images/osm.png'
      //
      // fieldImageCheck.onload = function(){


    }else if(typeof window.localStorage !== "undefined" && !localStorage.getItem('visited')) {
        // Set visited flag in local storage
        try{
          $.getScript({
             cache:false,
            url:'https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js'
          }),
          $.getScript({
             cache:false,
            url:'https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js',
            success:function(){
              console.log('firebase loaded')
              document.getElementById('login').style.opacity='1';
              document.getElementById('login').disabled = false;
              document.getElementById('login').style.borderColor= 'grey'


            }
          })
        }catch(e){
          location.reload()
        }
        localStorage.setItem('visited', true);
        isFirstTime = true;
        // console.log('stored in local sotrage')
        /////////////////////    password protection for first time /////////////////

        ////////////////////    login  input    ///////////
        // var checkDone = setInterval(function(){
        //   console.log('done',done)
        //   if(done==true){clearInterval(checkDone)}
        //   return done
        //   })
        requestPw()


    }else if(!localStorage.getItem('pwCorrect')){  //condition to ensure that if in first load pw was incorrect, pw is requested until correct !!!!!!!!!!!!!!!!!!!!!!!
      try{
        $.getScript({
           cache:false,
          url:'https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js'
        }),
        $.getScript({
           cache:false,
          url:'https://www.gstatic.com/firebasejs/8.2.1/firebase-auth.js'
        })
      }catch(e){
        location.reload()
      }
        // console.log('!localStorage.getItem(pwCorrect')
        requestPw()
    }
    return isFirstTime;
}
window.onload = firstLoad;  /// to launch the root function XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXS
var done = false

setTimeout(function(){
  document.getElementById('loginInfo').style.opacity = '1'
  document.getElementById('loginInfo').disabled = false
  document.getElementById('loginKey').style.opacity = '1'
  document.getElementById('loginKey').disabled = false
  // if(isIOS == true){
  //   document.getElementById('AlertModalIOS').style.display = 'initial'
  // }
  document.getElementById('AlertModalIOS').style.display = 'initial'
  document.getElementById("AlertModalIOS").style.fontFamily = 'Ubuntu'


},2900)

document.getElementById('loginInfo').onclick = function(){
  window.location.href="https://wa.me/+34678380944";
}

document.getElementById('loginKey').onclick = function(e){
  document.getElementById('AlertModalIOS').innerHTML = '</br></br> 📞 Enter your phone number 📞'
  document.getElementById('AlertModalIOS').style.display = 'initial'
  document.getElementById("AlertModalIOS").style.fontFamily = 'Ubuntu'
  e.preventDefault() //to avoid reload
    document.getElementById('loginKey').disabled = true
  document.getElementById('loginKey').style.display = 'none'
  document.getElementById('loginInfo').style.display = 'none'

  // setTimeout(function(){
  //   document.getElementById('loginKey').style.opacity = '1'
  //   document.getElementById('loginInfo').style.opacity = '1'
  // },100)

  // document.getElementById('textPwScreen').style.display = 'initial';

  //runJSselectFeature()
  document.getElementById('loginKey').style.backgroundColor = '#D5D6D5'
  document.getElementById('enteredPw').style.display = 'initial';
  document.getElementById('login').style.display = 'initial';

  initialiseMap() //map initialised but not shown
  function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        try{
            $('<img/>')[0].src = this;
        }catch(e){
          //console.log('image failed to preload')
        }

        // Alternatively you could use:
        // (new Image()).src = this;
    });
  }
    // Usage:

    preload(arrayOfImages);
  try{
    $(document).keypress(
      function(event){
        if (event.which == '13') {
          event.preventDefault();
        }
    });
  }catch(e){
    console.log('error disable enter key catched')
  }
//   setTimeout(function(){
//
//   document.getElementById('enteredPw').focus() //to open keyboard!!!
// },100)
 //console.log(loaded)
//return loaded
}

var initialiseMap = function(){
  document.body.style.backgroundColor = "#232222";
  setTimeout(function(){
      if (document.readyState === 'complete' && localStorage.getItem('pwCorrect')) {
      phoneNumber = localStorage.getItem('phoneNumber');
      //console.('phonenumber', phoneNumber)

    document.getElementById('initialscreen2options').style.display = 'initial'
    //console.('initialise map')
    if (urlContainsHash == true && urlContainsGeoJSON == true){  // if url contains geojson (and coords)
      document.getElementById('initialscreen2options').style.display = 'none'
      document.getElementById('startmapping').style.display = 'none'
      document.getElementById('askthemap').style.display = 'none'
      document.getElementById('asktheteam').style.display = 'none'
      document.getElementById('geocredits').style.display = 'none'
      document.getElementById('taskthemappers').style.display = 'none'


      document.getElementById('map').style.opacity = 1
      document.getElementById('map').disabled = false
      document.getElementById("tutorial").style.display = "initial";
      document.getElementById("armchair").style.display = "initial";
      document.getElementById("field").style.display = "initial";


      // document.getElementById('talk').click()
  }
}
},100)



document.getElementById("map").style.opacity = 0;

  googleSat.addTo(map)
var basemapClass = document.getElementsByClassName('leaflet-layer')
basemapClass[0].style.opacity = 0
   //  var mapListerner = document.getElementById("map")
   // mapListerner.addEventListener('touchstart', {passive: true});

    // preload([
    //   'images/ThumbsUpGreen.png','images/checkingPw.gif',
    //
    //   'images/armchair.png','images/field.png','images/tvSmall.png',
    //   'https://mt3.google.com/vt/lyrs=s,h&x=2&y=1&z=2',
    //   'https://mt3.google.com/vt/lyrs=s,h&x=1&y=2&z=2',
    //   'https://mt3.google.com/vt/lyrs=s,h&x=1&y=2&z=2',
    //   'https://mt0.google.com/vt/lyrs=s,h&x=2&y=2&z=2',
    //   'https://mt1.google.com/vt/lyrs=s,h&x=1&y=0&z=2',
    //   'https://mt2.google.com/vt/lyrs=s,h&x=2&y=0&z=2',
    //   'https://mt0.google.com/vt/lyrs=s,h&x=1&y=3&z=2',
    //   'https://mt1.google.com/vt/lyrs=s,h&x=2&y=3&z=2',
    //   'images/gpsSearching.gif',
    //   'images/osm.png',
    //   'images/myLayerPrivate',
    //   'images/filterIcon.png',
    // ])
    document.getElementById("map").style.display = "initial";
    // googleSat.addTo(map)
    // googleSat.removeFrom(map)



  document.getElementById("app-css").disabled = false
  document.getElementById("customIcons-css").disabled = false
  document.getElementById("slider-css").disabled = false
  document.getElementById("leaflet-css").disabled = false
  document.getElementById("easybutton-css").disabled = false
  document.getElementById("rose-css").disabled = false
  document.getElementById("draw-css").disabled = false
  document.getElementById("cluster-css").disabled = false
  document.getElementById("clusterDefault-css").disabled = false
  // $.getScript( "scripts/app.js" , function(){console.log('script gotten')});
    //   $.when(
    //
    //
    //
    //   $.Deferred(function( deferred ){
    //       $( deferred.resolve );
    //   })
    // ).done(function(){
      // console.log('all script loaded')
      //place your code here, the scripts are all loaded



      // document.getElementById("gobackArmchairField").style.display = "initial";

      // document.getElementById("polygon").style.display = "initial";
      // document.getElementById("polyline").style.display = "initial";
      // document.getElementById("point").style.display = "initial";
      document.getElementById("map").style.display = "block";
      //addLeafletAttribute()


      document.getElementById('rose').style.marginBottom = '5px' // to avoid extra margin, visible when offline buttons appear
    // window.addEventListener('DOMContentLoaded', function(){
  // $('rose').ready(function(){

  // var mainmenu_Button = L.easyButton({
  //     id: 'mainmeny',
  //     class: 'easyButton1',
  //     position: 'topleft',
  //     states: [{
  //         icon: iconOSM,
  //         //stateName: 'check-mark',
  //         onClick: function(btn, map) {
  //           document.getElementById('initialscreen2options').style.display = 'initial'
  //
  //         }
  //     }]
  // });
  //
  // mainmenu_Button.button.style.width = '50px';
  // mainmenu_Button.button.style.height = '50px';
  // mainmenu_Button.button.style.transitionDuration = '.3s';
  // mainmenu_Button.button.style.backgroundColor = '#c00000';

  var rose = L.control.rose('rose', {
      position: 'topleft',
      icon: 'nautical',
      iSize: 'medium',
      opacity: 1
  })//.addTo(map)
  // var fieldImageCheck = document.getElementById("fieldImage")
  // fieldImageCheck.src = 'images/field.png'
  // var roseid = document.getElementById("rose")
  // roseid.src = 'images/osm.png'
// mainmenu_Button.addTo(map)
  // fieldImageCheck.onload = function(){
    gps_Button.addTo(map);
    osm_Button.addTo(map);
    myLayer_Button.addTo(map); //always on as there will always be features in the map, even when first load
    scale.addTo(map)
    rose.addTo(map)

    // deflated.addTo(map)

    // var mylayerready = document.getElementById('myLayerButton')
    //
    // $(mylayerready).ready(function() {
    //   console.log('mylayerbutton is ready')
    //   setTimeout(function() {
    //         // document.getElementById('myLayerButton').click()
    //         document.getElementById('myLayerButton').click()
    //         // document.getElementById("emojionearea-css").disabled = false
    //         console.log('clicksimulated')
    //
    //           // emojiRequest()
    //           $.getScript({
    //              cache:true,
    //             url:'scripts/customIcons_v3.js'
    //           }),
    //           $.getScript({
    //              cache:true,
    //             url:'scripts/lib/html2canvas.js'
    //           }),
    //           $.getScript({
    //             cache:true,
    //             url:'scripts/lib/adapter-latest.min.js'
    //           })
    //
    //
    //   },1000)
    //   map.fireEvent('click', {
    //   latlng: L.latLng(0, 0)
    // },100);
    //
    // });


      // var images = new Array()
      //       function preload() {
      //         for (i = 0; i < preload.arguments.length; i++) {
      //           images[i] = new Image()
      //           images[i].src = preload.arguments[i]
      //         }
      //       }
      //       preload(
      //               'images/drawPolygon.png','images/line.png','images/point.png',
      //               'images/applyFilter.png','images/arrowLeft.png', 'images/arrowRight.png', 'images/backButton.png','images/bin.png','images/binOriginal.png','images/binpost.png',
      //               'images/binpre.png','images/burger.png','images/burgerBlack.png','images/cancel.png','images/clearFilter.png','images/commentFeature.png',
      //               'images/customise.png','images/dateAll.png','images/dateDay.png','images/dateMonth.png','images/dateWeek.png','images/dateYear.png','images/deleteAllVertex.png',
      //               'images/deleteLastVertex.png','images/devicedownload.png','images/download.png','images/editDelete.png','images/filterIcon.png',
      //               'images/france.png','images/google.png','images/gps.png','images/gpsOff.png','images/gpsSearching.gif','images/gpsSearchingIOS.gif',
      //               'images/info.png','images/infoGoBack.png','images/kenya.png','images/key.png','images/lineDeleteAll.png','images/lineDeleteVertex.png',
      //               'images/locked.png','images/man.png','images/marker-icon.png','images/marker-icon-2x.png','images/marker-icon-cian.png','images/markerLine.png',
      //               'images/markerLocalStorage.png','images/markerPolygon.png','images/myLayer.png','images/namibia.png','images/nautical.svg','images/osm.png',
      //               'images/other.png','images/other1.png','images/planet.png','images/play.png','images/PlusSign.png','images/portugal.png',
      //               'images/questionmark.png','images/random.png','images/record.png','images/shareMessagingApps.png','images/shareworld.png','images/spain.png',
      //               'images/telegram.png','images/ThumbsUpGreen.png','images/uk.png','images/wechat.png','images/whatsapp.png','images/youtube.png',
      //       )


      done = true
      return done && phoneNumber
    // });
}
// console.log('innerheight',window.innerHeight)
// document.getElementById('map').style.height = window.innerHeight
// var innerHeight = window.innerHeight
// var bodyheight = document.getElementById('body').clientHeight


// console.log('bodyheight',bodyheight)
document.getElementById("tutorial").onclick = function(e) {
  myLayer_Button.addTo(map); //always on as there will always be features in the map, even when first load

//   phoneNumber = localStorage.getItem('phoneNumber');
//   sapelliProjectIdentifier = localStorage.getItem('sapelliProjectIdentifier');
//   var sapprojIDtest = '123456789'
//
// //The pre-filled message will automatically appear in the text field of a chat. Use https://wa.me/whatsappphonenumber?text=urlencodedtext where whatsappphonenumber
// // is a full phone number in international format and urlencodedtext is the URL-encoded pre-filled message.
//
//
//   window.location.href="https://wa.me/+34678380944"
//   var textwhatsapp
//   var textwhatsappencoded = '123456789'
// document.getElementById('initialscreen2options').style.backgroundColor = '#c00000'
// document.getElementById('numberofcontrib').style.display = 'none'
// document.getElementById('valueincurrency').style.display = 'none'
//
// document.getElementById('gobackFromCredits').style.display = 'none'
// document.getElementById('exchangeCredits').style.display = 'none'

          document.getElementById('initialscreen2options').style.display = 'initial'

          // if(whichLayerIsOn == 'deflated'){
          //   document.getElementById('myLayerButton').click()
          //   document.getElementById('myLayerButton').click()
          // }if(whichLayerIsOn == 'localStorage'){
          //   document.getElementById('myLayerButton').click()
          // }
          // document.getElementById('myLayerButton').click()


}
document.getElementById('startmapping').onclick = function(){
  document.getElementById('startmapping').style.backgroundColor = '#a6a4a4'
  document.getElementById('backFromFilter').style.display = 'none'

  filter_Button.removeFrom(map);
  filterLocalStorage_Button.removeFrom(map);
    document.getElementById('myLayerButton').click()
    if(whichLayerIsOn == 'deflated'){
      document.getElementById('myLayerButton').click()
    }else if(whichLayerIsOn == 'localStorage'){
        document.getElementById('myLayerButton').click()
      }





    myLayer_Button.removeFrom(map); //always on as there will always be features in the map, even when first load


    setTimeout(function(){
      document.getElementById("Alert").style.display = 'none'
    },2000)



  // document.getElementById('talk').style.borderColor = '#404040'


// mapheight.clientHeight = '80%'
// console.log('innerheight',window.innerHeight)
// document.body.style.height = innerHeight
// document.getElementById("map").style.height = innerHeight

  // console.log('bodyheight',bodyheight)
  // console.log('screensheight',screen.height)

  // document.getElementById('myLayerButton').click()

  setTimeout(function(){

  document.getElementById('initialscreen2options').style.display = 'none'
  // document.getElementById("map").style.display = "block";
  document.getElementById("map").style.opacity = 1;
  // document.getElementById('map').style.cursor='grab';

  // setTimeout(function(){
    // document.getElementById("tutorial").style.display = "initial";
    // document.getElementById("armchair").style.display = "initial";
    // document.getElementById("field").style.display = "initial";
  // },100)
  document.getElementById('MapLoading').style.opacity = 1
  document.getElementById('startmapping').style.backgroundColor = 'white'


},200)

}
// document.getElementById('askthemap').onclick = function(){
//   setTimeout(function(){
//     document.getElementById('map').style.display = 'none'
//
// },2000)
//   document.getElementById('askthemap').style.backgroundColor = '#4B0101'
//   // document.getElementById('listen').style.borderColor = '#BFBEBE'
//   document.getElementById('backtohomepage').style.display = 'initial'
//   document.getElementById("filterByDate").style.display = "none";
//
//   document.getElementById("MessageZoomTo").style.fontSize = "20px";
//   document.getElementById('MessageZoomTo').innerHTML = 'Zoom tooooooooooo'
//   document.getElementById("MessageZoomTo").style.display = 'initial'
//   document.getElementById("Alert").style.display = 'none'
//
//
// setTimeout(function(){
//
// document.getElementById("MessageZoomTo").style.display = 'none'
//
// },5000)
//
//
//
//   setTimeout(function(){
//     filter_Button.addTo(map);
//     myLayer_Button.addTo(map); //always on as there will always be features in the map, even when first load
//
//
//     document.getElementById('myLayerButton').click()
//     document.getElementById("Alert").style.display = 'none'
//
//     if(whichLayerIsOn == 'none'){
//       document.getElementById('myLayerButton').click()
//       document.getElementById("Alert").style.display = 'none'
//
//     }else if(whichLayerIsOn == 'localStorage'){
//         document.getElementById('myLayerButton').click()
//         document.getElementById("Alert").style.display = 'none'
//
//       }
//     document.getElementById('filter').click()
//     document.getElementById("Alert").style.display = 'none'
//
//     filter_Button.removeFrom(map);
//     myLayer_Button.removeFrom(map); //always on as there will always be features in the map, even when first load
//
//
//   document.getElementById('initialscreen2options').style.display = 'none'
//   document.getElementById('applyFilter').style.display = 'none'
//
//   document.getElementById("map").style.opacity = 1;
//
//
//   // setTimeout(function(){
//   //   // document.getElementById("tutorial").style.display = "initial";
//   //   // document.getElementById("armchair").style.display = "initial";
//   //   // document.getElementById("field").style.display = "initial";
//   //
//   // },100)
//   document.getElementById('MapLoading').style.opacity = 1
//   document.getElementById('askthemap').style.backgroundColor = 'white'
//
//
// },200)
//
// }
document.getElementById('asktheteam').onclick = function(){
  document.getElementById('asktheteam').style.backgroundColor = '#a6a4a4'
  // document.getElementById('talk').style.borderColor = '#404040'
  setTimeout(function(){
    document.getElementById("Alert").style.display = 'none'
    window.location.href="https://wa.me/+34678380944?";
    document.getElementById('asktheteam').style.backgroundColor = 'white'


  },500)
  // window.location.href="https://wa.me/+34678380944?' + textwhatsappencoded + '";
}

document.getElementById('geocredits').onclick = function(){
  document.getElementById('geocredits').style.backgroundColor = '#a6a4a4'
  setTimeout(function(){
    document.getElementById('geocredits').style.backgroundColor = 'white'
    document.getElementById('geocredits').style.display = 'none'
    document.getElementById('taskthemappers').style.display = 'none'
    document.getElementById('asktheteam').style.display = 'none'
    document.getElementById('askthemap').style.display = 'none'
    document.getElementById('startmapping').style.display = 'none'
    document.getElementById('kaptainitialscreen').style.display = 'none'
    document.getElementById('initialscreen2options').style.backgroundColor = 'black'
    document.getElementById('kaptacredits').style.display = 'initial'
    document.getElementById('iconcredits').style.display = 'initial'
    // document.getElementById('iconvalue').style.display = 'initial'
    document.getElementById('numberofcredits').style.display = 'initial'
    document.getElementById('valueincurrency').style.display = 'initial'

    document.getElementById('gobackFromCredits').style.display = 'initial'
    document.getElementById('exchangeCredits').style.display = 'initial'

  },500)

    // document.getElementById('geocreditsimage').src = '../images/underConstruction.png'
    // setTimeout(function(){
    //   document.getElementById('geocreditsimage').src = '../images/geocredits.png'
    //   document.getElementById('geocredits').style.backgroundColor = 'white'
    //
    // },2000)



// window.location.href="https://wa.me/+34678380944?' + textwhatsappencoded + '";
}




// window.onload = function(){
// window.addEventListener("click", function(){

document.onreadystatechange = function () {
  var state = document.readyState
  //console.(state,'state')
  if (document.readyState === 'complete' && localStorage.getItem('pwCorrect')) {
    $.getScript({
       cache:true,
      url:'scripts/customIcons_v3.js'
    })
    startSearchingLocation()
  // document.getElementById('rose').click()
    setTimeout(function(){
      // requestCartoData()
    },1000)
  }
}

  window.addEventListener("click", function(){
    //console.('click to load more stuff')
      // window.addEventListener("click", () => {
      // document.getElementById("emojionearea-css").disabled = false

      // emojiRequest()

    //   console.log("emoji script called");
    // }, { once: true });
    //rose.addTo(map)
    // deflated.addTo(map) // to initialize //////////////////////!!!!!!!!
    $.getScript({
      cache:true,
      url:'scripts/lib/d3.min.js',
       // success: console.log('d3 fetched')
    }),
    $.getScript({
      cache:true,
      url:'scripts/lib/topojson.min.js'
    }),
    $.getScript({
      cache:true,
      url:'scripts/lib/leaflet/plugins/leaflet-globeminimap-master/src/Control.GlobeMiniMap.js'
    }),
    $.getScript({
       cache:true,
      url:'scripts/lib/html2canvas.min.js'
    }),
    $.getScript({
      cache:true,
      url:'scripts/lib/adapter-latest.min.js'
    })
    function preload(arrayOfImages) {
      $(arrayOfImages).each(function(){
          try{
              $('<img/>')[0].src = this;
          }catch(e){
            //console.log('image failed to preload')
          }

          // Alternatively you could use:
          // (new Image()).src = this;
      });
    }
      // Usage:

      preload(arrayOfImages);
    // } //if the container is visible on the page



}, {once : true});
// var basemapClass = document.getElementsByClassName('leaflet-layer')
// basemapClass[0].style.opacity = 1

var loaded
var authentication
var num1
var confirmphonebuttonclicked = 0
var requestPw = function(){

      //setTimeout(function(){
        document.getElementById('modal').style.display='block';
        // document.getElementById('enteredPw').click()
      //},10000)

      var checkPw = setInterval(function(){
        var firstFour = document.getElementById('enteredPw').value.substr(0, 4)
        var pwPlaceholder = firstFour

        if(pwPlaceholder.length == 4){
          // document.getElementById('login').style.borderColor= 'grey'
          // document.getElementById('login').disabled = false
          // document.getElementById('login').style.opacity='1';
        }
        if(pwPlaceholder.length < 4){
          // document.getElementById('login').style.borderColor= 'white'
          // document.getElementById('login').style.opacity='0.3';
         // document.getElementById('login').disabled = true
        }
      },200)

      // document.getElementById('login').onclick = function(e){
      document.getElementById('login').addEventListener('click',e =>{
        authentication = 'checking' //to avoid failed being stored, if first time fails. Number of fails is limited by Firebase!!!
        clearInterval(checkPw)
        document.getElementById('loginIcon').src = 'images/checkingPw.gif'
        document.getElementById('login').style.borderColor= 'white'

        e.preventDefault() // to avoid page reload on first load!
        var firstFour = document.getElementById('enteredPw').value.substr(0, 4)
        var pwPlaceholder = firstFour

        var checkDoneAndFirebasePW = setInterval(function(){

              openAppPwSuccesful()
            return done && authentication
          },50)

          var randomEmailId = Math.floor(Math.random() * 10);  // this is to prevent the situation where multiple users fail the login with the same account and it bolcks
          var email = 'md'+ randomEmailId + '@md.com' //I've added 10 different email address in Firebase (0-9) with same Pw
          //console.log(randomEmailId)

          var password = '00' + pwPlaceholder // 00 is added as Firebase only allows for a minimum of 6 digits pws

          firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) =>{
              //console.log('success',user)
              authentication = 'successful'

            })
            .catch((e) => {
              authentication = 'failed'
              var errorCode = e.code;
              var errorMessage = e.message;
              //console.log(errorMessage)
              //console.log(errorCode)


            })

          // const promise = firebase.auth().signInWithEmailAndPassword(email,password);
          //
          // promise.catch(e => console.log(e.message));
          //   //console.log(promise)
        var openAppPwSuccesful = function(){
              if(authentication == 'failed' && done == true){
                $.getScript({
                   cache:true,
                  url:'scripts/customIcons_v3.js'
                })  //map loads after this
                document.getElementById('AlertModalIOS').innerHTML = ''
                document.getElementById('AlertModalIOS').style.display = 'initial'
                document.getElementById("AlertModalIOS").style.fontFamily = 'Ubuntu'
                document.getElementById('login').disabled = true // to avoid that user clicks twice while waiting, in which case carto layer would load twice
                 //console.log('both')
                 localStorage.setItem('pwCorrect', true);
                 var phoneNumberNoprefix = document.getElementById('enteredPw').value.substr(4, 13)
                 if(phoneNumberNoprefix == ''){
                   phoneNumberNoprefix = 0123456789
                 }else{
                   localStorage.setItem('phoneNumber', phoneNumberNoprefix);
                 }
                 console.log('phonenumber',phoneNumberNoprefix)



                clearInterval(checkPw)
                clearInterval(checkDoneAndFirebasePW)
                document.getElementById('enteredPw').style.backgroundColor = '#39F70F' //green color

                // requestCartoData()

                setTimeout(function(){
                  location.reload()
                    // document.getElementById('modal').style.display='none';
                    // document.getElementById('pwForm').style.display='none';
                    // document.getElementById('AlertModalIOS').style.display = 'none'
                    // document.getElementById('initialscreen2options').style.display = 'initial'
                    // document.getElementById('talk').style.display = 'initial'
                    // document.getElementById('listen').style.display = 'initial'
                    // // location.reload() //to activate the sw so it can be used offline afterwards
                    // navigator.geolocation.watchPosition(findBuffer,error,watchPositionOptions);

                },3000)
                //in case first load is with url geoJSON -- not the best approach ever, but it works.
                if(urlContainsGeoJSON == true){
                  var activateLocalStorageLayer = setInterval(function(){
                    //console.('checking encodedgeojsonurl')
                    if(localStorageLayer != null){
                      try{
                        document.getElementById('myLayerButton').click()
                        clearInterval(activateLocalStorageLayer)
                      }catch(e){}

                    }
                  },500) // really don't know why this timeout, but keep it for now

                }

              }
              else if(authentication == 'failed'){
                clearInterval(checkDoneAndFirebasePW)
                document.getElementById('AlertModalIOS').innerHTML = '⚠️ </br></br>The app is temporarily </br> password protected'
                document.getElementById('AlertModalIOS').style.display = 'initial'
                document.getElementById("AlertModalIOS").style.fontFamily = 'Ubuntu'

                // console.log('none')

                document.getElementById('enteredPw').style.backgroundColor = 'red'
                document.getElementById('enteredPw').focus() //to maintain keyboard if pw wrong

                setTimeout(function(){
                  //requestPw()
                  document.getElementById('enteredPw').style.backgroundColor = 'white'
                  document.getElementById('loginIcon').src = 'images/ThumbsUpGreen.png'
                  document.getElementById('login').style.borderColor= 'grey'
                  // document.getElementById('login').style.borderColor = 'red'


                },500)
              }

            }
        // return loaded

    })//login
}//requesPW
