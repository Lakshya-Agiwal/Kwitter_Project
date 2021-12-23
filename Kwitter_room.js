

const firebaseConfig = {

    apiKey: "AIzaSyDJw9QSIDzeBRR0FphJRz3x1o76toIEUFY",
  
    authDomain: "kwitter-project-2c0d6.firebaseapp.com",

    databaseURL: "https://kwitter-project-2c0d6-default-rtdb.firebaseio.com",

    projectId: "kwitter-project-2c0d6",
  
    storageBucket: "kwitter-project-2c0d6.appspot.com",
  
    messagingSenderId: "561753444436",
  
    appId: "1:561753444436:web:ab82e1032364356d519dc1",
 };
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name"); 
  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location=("index.html");
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("room name -" + Room_names);
       row = "<div id='"+ Room_names+"' class='room_name' onclick='redirect(this.id)'>"+Room_names+"</div><hr>";   
       document.getElementById("output").innerHTML += row;
});
});

}

      
      
getData();
function room_adder()
{
      room_name = document.getElementById("New_room").value;
      localStorage.setItem("room_name" , room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"addingroom",
      })
Window.location="Kwitter_page.html";

}
function redirect(name){
      localStorage.setItem("save_room_name" , name);
      window.location=("kwitter_page.html");
}
