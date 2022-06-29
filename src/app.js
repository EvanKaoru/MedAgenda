import {app, auth, provider, db} from "./config.js";

const btnLogin = document.querySelector('#btnLogin');

//Events

btnLogin.addEventListener("click",doGoogleLogin);

//Wait Function Events.
  auth.onAuthStateChanged((user)=>{
   if(user){
      // alert('Logado com sucesso');
    //    console.log("Nome: " + user.displayName);
    //    console.log("E-mail: " + user.email);
    //    console.log("Phone: " + user.phoneNumber);
    //    console.log("ImgUrl: " + user.photoURL);
    //    console.log("ID: " + user.userId);
    //    console.log("Provider: " + user.providerId);
    //    console.log("Anonimo: " + user.isAnonymous);
    //    console.log(user)

       //window.location.replace('inicio.html');
       //console.log(window.location)   
   }
  })

//Functions
function doGoogleLogin(){
    auth.signInWithPopup(provider).then(res=>{
        // showUserInfo(res.user);
        if(res.user.email == "erick.w.aires@gmail.com"){
            window.location.replace("administracao.html");
        }
        else {
            window.location.replace("inicio.html");
        }
        document.cookie = "logged=true";
    });
}