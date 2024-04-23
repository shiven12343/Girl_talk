
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA-onwDmHNMoSiQXct3rBYJQBsC6CqptnA",
      authDomain: "shefs-kwitter.firebaseapp.com",
      databaseURL: "https://shefs-kwitter-default-rtdb.firebaseio.com",
      projectId: "shefs-kwitter",
      storageBucket: "shefs-kwitter.appspot.com",
      messagingSenderId: "555671773674",
      appId: "1:555671773674:web:87e1d06748bf90edcf5293"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name+ "!";
function addRoom(){
      room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html"
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}

