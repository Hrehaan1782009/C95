function logout()
{
    window.location = "index.html";
}

function addRoom()
{
    
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);

    var firebaseConfig = {
        apiKey: "AIzaSyDGy_wp8shV1lfCbXgxjLj1ZzJ6Gq2fYkY",
        authDomain: "ui-chatapp.firebaseapp.com",
        projectId: "ui-chatapp",
        storageBucket: "ui-chatapp.appspot.com",
        messagingSenderId: "226361703881",
        appId: "1:226361703881:web:c5308a8a896398c791bc18",
        measurementId: "G-FM10DVG6NY"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
}