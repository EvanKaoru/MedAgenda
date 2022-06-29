export default() => {
    const container = document.createElement('div');

    const pagina = `
    
<Style>
    .card:hover {border: 1px dashed gray; background-color: lightblue;  cursor:pointer; }
</Style>

<body>
    <div class="container">
    <h3>Agendamentos</h3>
    <div class="row row-cols-2 row-cols-md-2 g-3">
        <div class="col" style="width: 18rem;">
        <div class="card" id="card_01">
            <img src="./img/undraw_Booking_re_gw4j.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Erick Ayres</h5>
              <p class="card-text"><p class="card-text">Situação: desde ontem. Dor: Pontada no peito. Alergia: Calmantes</p>
            </div>
          </div>
        </div>
        <div class="col" style="width: 18rem;">
          <div class="card" id="card_02">
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
          <div class="card" id="card_04">
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
            <div class="card" id="card_06">
              <img src="./img/undraw_Booking_re_gw4j.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Daniel Santos</h5>
                <p class="card-text">Situação: 4 dias. Dor: Perna direita latejando. Alergia: Não.</p>
              </div>
            </div>
        </div>
      </div>
    </div>

    `;

    container.innerHTML = pagina;

    return container;
}