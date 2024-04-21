if(localStorage.getItem('pwCorrect')){
    document.getElementById('modal').style.display='none'
    document.getElementById('askthemap').innerHTML = 'Loading...'

  }else{
    document.getElementById('modal').style.display='initial'
  }
  
  var firebaseKey;
  var firebaseConfig;
  var phoneNumber
  var isFirstTime; //var to store if the site is visited for the first time

  
  var sharetarget = false
  var manualupload = true
  var homescreenorwhatsapplaunch
  var checkfields = setInterval(function(){
    var valueEnteredName = document.getElementById('enteredName').value
    // var valueEnteredPhone = document.getElementById('enteredPhone').value
    var valueEnteredPw = document.getElementById('enteredPw').value
  
    if(valueEnteredName != '' && valueEnteredPw != ''){
      document.getElementById('login').style.opacity='1';
      document.getElementById('login').disabled = false;
      document.getElementById('login').style.borderColor= 'grey'
      // clearInterval(checkfields)
    }else{
      document.getElementById('login').style.opacity='0.4';
      document.getElementById('login').disabled = true;
      // document.getElementById('login').style.borderColor= 'white'
    }
    
  },300)
  var firstLoad = function() { //fucntion to determine if the site is visited for first time
    // changeLanguage()
    console.log('FIRST LOAD CALLED')
    console.log('sharetarget',sharetarget)
    document.getElementById('login').style.opacity='0.4';
    document.getElementById('login').disabled = true;
  
      if(localStorage.getItem('pwCorrect')){
  
  
      }else if(typeof window.localStorage !== "undefined" && !localStorage.getItem('visited')) {
        console.log('visited but no pw')
  
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
          console.log('no pw correct')
      }
      return isFirstTime;
  }
  window.onload = firstLoad;  /// to launch the root function XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXS
  var done = false
  if(!localStorage.getItem('pwCorrect')){
    var findFirebaseCredentials = setInterval(function() {
        console.log('firebase initialise')
          if (firebaseKey != null) {
              try {
                  firebase.initializeApp(firebaseConfig);
                //console.log('Firebase initialized')
                  clearInterval(findFirebaseCredentials)
              } catch (e) {
                // console.log('firebase not initialized!!')
              }
          }
      }, 500)
  }

  
  setTimeout(function(){
    document.getElementById('loginInfo').style.opacity = '1'
    document.getElementById('loginInfo').disabled = false
    document.getElementById('loginKey').style.opacity = '1'
    document.getElementById('loginKey').disabled = false
    clearInterval(findFirebaseCredentials)

  
  },2900)
  

  document.getElementById('loginKey').onclick = function(e){

    e.preventDefault() //to avoid reload
      document.getElementById('loginKey').disabled = true
    document.getElementById('loginKey').style.display = 'none'
    document.getElementById('loginInfo').style.display = 'none'

    document.getElementById('loginKey').style.backgroundColor = '#D5D6D5'
    document.getElementById('enteredPw').style.display = 'initial';
    document.getElementById('enteredName').style.display = 'initial';
  
    document.getElementById('login').style.display = 'initial';
  
    initialiseMap() //map initialised but not shown

  
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

  }
  
  var initialiseMap = function(){
    document.body.style.backgroundColor = "black";
    setTimeout(function(){
        if (document.readyState === 'complete' && localStorage.getItem('pwCorrect')) {
        phoneNumber = localStorage.getItem('phoneNumber');
        //console.('phonenumber', phoneNumber)
  
      document.getElementById('homepage').style.display = 'initial'
  }
  },100)
  
  
  
  document.getElementById("map").style.opacity = 0;
  
      document.getElementById("map").style.display = "initial";
  
    document.getElementById("app-css").disabled = false
  
        document.getElementById("map").style.display = "block";
      
  
        done = true
        return done && phoneNumber
      // });
  }
  
  document.onreadystatechange = function () {
    var state = document.readyState
    //console.(state,'state')
    if (document.readyState === 'complete' && localStorage.getItem('pwCorrect')) {

      setTimeout(function(){
        // requestCartoData()
      },1000)
    }
  }
  
  var loaded
  var authentication
  var num1
  var confirmphonebuttonclicked = 0
  var requestPw = function(){
          document.getElementById('modal').style.display='block';
  
  
        var checkPw = setInterval(function(){
          var firstFour = document.getElementById('enteredPw').value.substr(0, 4)
          var pwPlaceholder = firstFour
  
          if(pwPlaceholder.length == 4){
  
          }
          if(pwPlaceholder.length < 4){
  
          }
        },200)
  
        document.getElementById('login').addEventListener('click',e =>{
          authentication = 'checking' //to avoid failed being stored, if first time fails. Number of fails is limited by Firebase!!!
          clearInterval(checkPw)
          document.getElementById('loginIcon').src = 'images/checkingPw.gif'
  
          e.preventDefault() // to avoid page reload on first load!
          var EmailPlaceholder = document.getElementById('enteredName').value
          var pwPlaceholder = document.getElementById('enteredPw').value
  
          var checkDoneAndFirebasePW = setInterval(function(){
  
                openAppPwSuccesful()
              return done && authentication
            },50)
  
            var randomEmailId = Math.floor(Math.random() * 10);  // this is to prevent the situation where multiple users fail the login with the same account and it bolcks

            var email = EmailPlaceholder
            var password = pwPlaceholder // 00 is added as Firebase only allows for a minimum of 6 digits pws

            firebase.auth().signInWithEmailAndPassword(email, password)
              .then((user) =>{
                //console.log('success',user)
                authentication = 'successful'
  
              })
              .catch((e) => {
                authentication = 'failed'
                var errorCode = e.code;
                var errorMessage = e.message;
              })
  
          var openAppPwSuccesful = function(){
                if(authentication == 'successful' && done == true){
                    try{
                        $.getScript({
                           cache:false,
                          url:'scripts/searchGD.js'
                        }),
                        $.getScript({
                           cache:false,
                          url:'scripts/cartoLayer.js',
  
                        })
                      }catch(e){
                      }

                  // document.getElementById('login').style.borderColor= 'white'
                  valueEnteredName = document.getElementById('enteredName').value
                //   valueEnteredPhone = document.getElementById('enteredPhone').value
                  localStorage.setItem('username', valueEnteredName);
                //   localStorage.setItem('phone', valueEnteredPhone);
   
  
                  clearInterval(checkfields)
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
  
                  setTimeout(function(){
                    location.reload()
     
                  },3000)
  
  
                }
                else if(authentication == 'failed'){
                  clearInterval(checkDoneAndFirebasePW)
  
  
                  document.getElementById('enteredPw').style.backgroundColor = 'red'
                  document.getElementById('enteredPw').focus() //to maintain keyboard if pw wrong
  
                  setTimeout(function(){
                    document.getElementById('enteredPw').style.backgroundColor = 'white'
                    document.getElementById('loginIcon').src = 'images/ThumbsUp.png'
                    document.getElementById('login').style.borderColor= 'grey'
  
  
                  },500)
                }
  
              }
          // return loaded
  
      })//login
  }//requesPW
  