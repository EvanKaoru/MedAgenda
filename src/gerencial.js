import {app, auth, provider} from "./config.js";

const btnLogoff = document.querySelector('#btnLogoff');
const btnConsulta = document.querySelector('#btnConsulta');
const btnClose = document.querySelector('#btnClose');
const btnOK = document.querySelector('#btnOK');
const myModal = new bootstrap.Modal(document.getElementById('exampleModalLong'), {});

btnLogoff.addEventListener("click",doGoogleLogoff);
btnConsulta.addEventListener("click",doAgendaConsulta);
btnClose.addEventListener("click", doClose);
btnOK.addEventListener("click", doSave);

function doGoogleLogoff(){
    auth.signOut().then(()=>{
        window.location.replace('index.html')
    });
}

function doAgendaConsulta(){
    myModal.show();
}

function doClose(){
    myModal.hide();
}

function doSave(){
    myModal.hide();
    alert("Solicitação de consulta salva com sucesso. Aguarde o agendamento;");
}
