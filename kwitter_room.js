var firebaseConfig = {
    apiKey: "AIzaSyBKE95RUrsGqeQEDhA5e1rBzIwN6cDWLOw",
    authDomain: "kwitter-209dd.firebaseapp.com",
    databaseURL: "https://kwitter-209dd-default-rtdb.firebaseio.com",
    projectId: "kwitter-209dd",
    storageBucket: "kwitter-209dd.appspot.com",
    messagingSenderId: "744242466868",
    appId: "1:744242466868:web:0475ac56b56d1a02753a61"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("login_key")
document.getElementById("user_name").innerHTML = user_name


function addRoom() {
    input_room = document.getElementById("input_room").value;
    firebase.database().ref("/").child(input_room).update({
        purpose: "room created"
    });
}
localStorage.setItem("room_key" , input_room);
window.location="index.html"






function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML =
                ""; snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key;
                    Room_names = childKey;
                    //Start code

                    //End code
                });
        });
}
getData();