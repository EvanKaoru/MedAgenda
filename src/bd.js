import {db} from "./config.js";

function addUsuario(dado){
    db.collection('tarefa').add({
        tarefa: dado
    });
}


const form = document.querySelector('form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let tarefa = document.querySelector('[name=tarefa]').value;
                addUsuario(tarefa);
                form.reset();
            })