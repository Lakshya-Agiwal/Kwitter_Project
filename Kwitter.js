var name1 = "";
function login()
{
    name1 = document.getElementById("input_log").value;
     localStorage.setItem("user_name" , name1);
     window.location=("kwitter_room.html");
}
