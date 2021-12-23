
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
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("save_room_name");
function Send_msg()
{
    
   msg= document.getElementById("input_msg").value;
   firebase.database().ref(room_name).push({
       name_user:user_name,
       message:msg,
       like:0
   })

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
display_name=message_data["name_user"]
display_msg=message_data["message"]
display_like=message_data["like"]
display_name_with_tag = "<h4> "+display_name+" </h4><br> "
display_msg_with_tag = "<h4> "+display_msg+" </h4><br> "
display_like_with_tag = "<button id='"+firebase_message_id+"' onclick='like(this.id)' value='"+display_like+"'> <span class='glyphicon glyphicon-thumbs-up'></span>    "+display_like+"   </button><br> "
document.getElementById("output").innerHTML+=display_name_with_tag+display_msg_with_tag+display_like_with_tag;


      } });  }); }
getData();
function like(message_like) {
    number_like=document.getElementById(message_like).value
    updated_like=Number(number_like)+1;
    firebase.database().ref(room_name).child(message_like).update({
        like:updated_like
    });

}

