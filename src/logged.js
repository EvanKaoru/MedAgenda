import {app, auth, provider} from "./config.js";

const btnLogoff = document.querySelector('#btnLogoff');

btnLogoff.addEventListener("click",doGoogleLogoff);

function doGoogleLogoff(){
    auth.signOut().then(()=>{
        window.location.replace('index.html')
    });
}