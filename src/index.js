import Usuario from './pages/usuario.js';

const main = document.querySelector('#root');

function init(){
    window.addEventListener("hashchange", ()=>{
        console.log(window.location.hash);
    })
}

window.addEventListener("load", ()=>{
    main.appendChild(Usuario());
    init();
});
