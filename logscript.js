
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAUc8aTYhkk_Vl-3j9p37IJmgxxLoa7fmM",
    authDomain: "elitmus-game.firebaseapp.com",
    projectId: "elitmus-game",
    storageBucket: "elitmus-game.appspot.com",
    messagingSenderId: "49199503587",
    appId: "1:49199503587:web:9e6026a13c69edd2364dd6",
    measurementId: "G-463MLWLH2W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const auth= getAuth()

  //console.log(app);

  document.getElementById("login").addEventListener("click", function() {
    var email =  document.getElementById("email").value;
    var password = document.getElementById("passwords").value;
    if(email=="admin@gmail.com" && password=="123456"){
      window.location.href = "admin.html";
    }
    else{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      alert(user.email+" Login successfully!!!");
      window.location.href = "instructionspage.html";
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });		
  }  		  
});





  