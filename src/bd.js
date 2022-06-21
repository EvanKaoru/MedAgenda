
// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
//import { firestore } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js";
//import { auth } from 'https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js';

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDDB2D3AluTkM350MjKblE2kJN-Ue-IqJo",
    authDomain: "med-agenda.firebaseapp.com",
    databaseURL: "https://med-agenda-default-rtdb.firebaseio.com",
    projectId: "med-agenda",
    storageBucket: "med-agenda.appspot.com",
    messagingSenderId: "585468508353",
    appId: "1:585468508353:web:9ee70cde437df6079dfc40"
  };

  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
   const app = firebase.initializeApp(firebaseConfig);
   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

   setTimeout(function(){
  //  auth.signInWithPopup(provider);
   },3000);

   auth.onAuthStateChanged((val)=>{
    if(val){
        alert('Logado com sucesso');
        console.log(val);
    }
   })