// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNsEZ7fNwcTgmfYq6hFvHUpbD6CydCNy0",
    authDomain: "let-chat-web-app-9422b.firebaseapp.com",
    projectId: "let-chat-web-app-9422b",
    storageBucket: "let-chat-web-app-9422b.appspot.com",
    messagingSenderId: "958832368213",
    appId: "1:958832368213:web:bb92e27da06d30cf67d2dc",
    measurementId: "G-ZRG8CYDM20"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


  function addRoom()
{
room_name= document.getElementById("room_name").value;

localStorage.setItem("room_name", room_name);

window.location="index.html";


}