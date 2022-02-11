
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
      apiKey: "AIzaSyDddkI29HTgNpjsJvIkwH6Bc2L1hYpQiQ4",
      authDomain: "kwitter-d7833.firebaseapp.com",
      databaseURL: "https://kwitter-d7833-default-rtdb.firebaseio.com/",
      projectId: "kwitter-d7833",
      storageBucket: "kwitter-d7833.appspot.com",
      messagingSenderId: "1025027974355",
      appId: "1:1025027974355:web:d9d8807b639c13ef8d6026",
      measurementId: "G-8K4MC2GZ28"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function d(){
  userx= localStorage.getItem("Name_of_the_user");
  document.getElementById("welcome").innerHTML="Welcome "+userx+" !";
}

function add(){
rname=document.getElementById("roomname").value;
firebase.database().ref("/").child(rname).update({
  purpose:"Adding room name"
});
localStorage.setItem("roomname",rname);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("roomname"+Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
    document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(sad){
console.log(sad);
localStorage.setItem("roomname",sad);
window.location="kwitter_page.html";
}
function leave(){
  localStorage.removeItem("roomname");
  localStorage.removeItem("Name_of_the_user");
  window.location="index.html";
}
