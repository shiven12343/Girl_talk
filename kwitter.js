//ADD YOUR FIREBASE LINKS HERE
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

  
function addUser() {
    user_name = document.getElementById("user_name").value ;
    localStorage.setItem("user_name" , user_name);

    window.location = "kwitter_room.html";
}