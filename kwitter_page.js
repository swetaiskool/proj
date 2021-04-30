//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyARFu70cBeWz6UAOZmoaMr6iPVulVV6aUA",
      authDomain: "project-21983123791284.firebaseapp.com",
      databaseURL: "https://project-21983123791284-default-rtdb.firebaseio.com",
      projectId: "project-21983123791284",
      storageBucket: "project-21983123791284.appspot.com",
      messagingSenderId: "852695419715",
      appId: "1:852695419715:web:6d892fa64707421677bdf6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function send()
    {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
document.getElementById("msg").value = "";

    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
