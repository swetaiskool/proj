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
    user_name = localStorage.getItem("user_name");
    document.getElementById("usernam").innerHTML = "Welcome " + user_name;
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       row = "<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'># "+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += rom;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function RedirectToRoomName(name)
{
      localStorage.setItem("room_name", name);
      window.local = "kwitter_page.html";
}
