import Usuario from './pages/usuario.js';
import Agendamento from './pages/agendamento.js'

const main = document.querySelector('#root');

function init(){
    window.addEventListener("hashchange", ()=>{
        console.log(window.location.hash);
    })
}

window.addEventListener("load", ()=>{
   if(window.location.pathname == '/administracao.html') {
       main.appendChild(Agendamento());    
   }
    else {
        main.appendChild(Usuario());
    }
    init();
});
