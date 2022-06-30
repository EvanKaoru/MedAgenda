export default() => {
    const container = document.createElement('div');

    const pagina = `
    <Style>
    .card:hover {border: 1px dashed gray; background-color: lightblue;  cursor:pointer }
    .agendado {background-color: rgba(173, 230, 202, 0.31);}
</Style>

<body>
    <div class="container">
    <div class="row row-cols-2 row-cols-md-2 g-3">
        <div class="col" style="width: 18rem; display: none;" id="a1">
          <div class="card" id="card_01">
            <img src="./img/undraw_Booking_re_gw4j.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Erick Ayres</h5>
              <p class="card-text"><p class="card-text">Situação: desde ontem. Dor: Pontada no peito. Alergia: Calmantes</p>
            </div>
          </div>
        </div>
        <div class="col" style="width: 18rem;">
          <div class="card agendado" id="card_02">
            <img src="./img/undraw_Booking_re_gw4j.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Thaís Thame</h5>
              <p class="card-text">Situação: Faz 7 dias que estou ruim. Dor: dor de cabeça frequente. Alergia: Nenhuma</p>
            </div>
          </div>
        </div>
        <div class="col" style="width: 18rem;">
          <div class="card" id="card_03">
            <img src="./img/undraw_Booking_re_gw4j.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Diones Batista</h5>
              <p class="card-text">Situação: Estou assim há 1 dias. Dor: Pontada no pulmão ao respirar. Alergia: Dipirona</p>
            </div>
          </div>
        </div>
        <div class="col" style="width: 18rem;">
          <div class="card agendado" id="card_04">
            <img src="./img/undraw_Booking_re_gw4j.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Pedro Serafino</h5>
              <p class="card-text">Situação: Estou assim há 3 dias. Dor: nenhuma. Alergia: Pó e tempo seco</p>
            </div>
          </div>
        </div>
        <div class="col" style="width: 18rem;">
            <div class="card" id="card_05">
              <img src="./img/undraw_Booking_re_gw4j.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">José Alberto</h5>
                <p class="card-text">Situação: Começou hoje. Dor: . Alergia: luxidral e ameriguante</p>
              </div>
            </div>
        </div>
        <div class="col" style="width: 18rem;">
            <div class="card agendado" id="card_06">
              <img src="./img/undraw_Booking_re_gw4j.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Daniel Santos</h5>
                <p class="card-text">Situação: 4 dias. Dor: Perna direita latejando. Alergia: Não.</p>
              </div>
            </div>
        </div>
      </div>
    </div>

  
  <!-- Modal -->
  <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Erick Ayres</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group row">
              <label> Data Agendamento: </label>
              <input type="date">
              <input type="time">
            </div>
          <div class="form-group row">
            <label> Médico: </label>
            <select id="medico">
              <option>Dr. Marcelo Gomes - Pediatria</option>
              <option>Dr. Fernando França - Psiquiatria</option>
              <option>Dr. Mario Gomes - Neurologista</option>
              <option>clinico geral</option>
            </select>
          </div>
          </form>
          <hr>
          <p>33 anos. 1,72m. 120kg<br>
          <b>CNS:</b>1815049<br>
          <b>Contato:</b>9 9707 1589</p>
          <hr>
          <p><b>Dor:</b> Pontada no peito</p>
          <p><b>Alergia:</b> Calmantes</p>
          <p><b>Remédios:</b> Losartana</p>
          <p><b>Tempo: </b> desde ontem</p>
          <hr>

          <div class="container">
          <div class="row">
            <div class="col">
            <p> Fumante: Não<br>
              Bebe: Não<br>
              Faz exercicios: Sim<br>
              Já foi operado: Sim<br></p>
            </div>
            <div class="col">
            <p>
              Está com tosse: Sim<br>
              Está com febre: Não<br>
              Teve enjoo: Não<br>
              Está com dor: Não<br></p>
            </div>
          </div>
          </div>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal" id="Fechar">Cancelar</button>
          <button type="button" class="btn btn-primary" onclick="execAgendamento()">Agendar</button>
        </div>
      </div>
    </div>
  </div>

  <script>
    const cardx = document.querySelector('#card_01');
    const Modal1 = new bootstrap.Modal(document.getElementById('exampleModalLong'), {});
    
    setTimeout(() => {
      document.querySelector('#a1').style.display = ''
    }, 1000);

    cardx.addEventListener("click", showDialog);
    function showDialog(){
      Modal1.show();
    }

    function execAgendamento(){
      setTimeout(()=>{},1000);
      alert('Agendamento realizado com sucesso');
      document.querySelector('#card_01').className = 'card agendado';
      Modal1.hide();
    }
  </script>

    `;

    container.innerHTML = pagina;

    return container;
}