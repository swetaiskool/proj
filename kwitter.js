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


function addUser()
{
    var user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
    });
}