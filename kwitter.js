 function Enter(){
user=document.getElementById("Username").value;
localStorage.setItem("Name_of_the_user",user);
window.location="kwitter_room.html";
}