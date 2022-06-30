export default() => {
    const container = document.createElement('div');

    const pagina = `
    <Style>
        .card:hover {border: 1px dashed gray; background-color: lightblue;  cursor:pointer }
    </Style>
</head>

<body>
    <div class="container">
    <div class="row row-cols-2 row-cols-md-2 g-3">
        <div class="col" style="width: 16rem;" id="a1">
          <div class="card" id="card_01">
            <img src="./img/undraw_No_data_re_kwbl.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Dr. Fernando França</h5>
              <p class="card-text"><p class="card-text">07/07/2022 às 11:22</p>
            </div>
          </div>
        </div>
        <div class="col" style="width: 16rem;">
          <div class="card agendado" id="card_02">
            <img src="./img/undraw_No_data_re_kwbl.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Dr. Mario Gomes</h5>
              <p class="card-text">18/06/2022 às 14:32</p>
            </div>
          </div>
        </div>
        <div class="col" style="width: 16rem;">
          <div class="card" id="card_03">
            <img src="./img/undraw_No_data_re_kwbl.png" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Clinico geral</h5>
              <p class="card-text">18/06/2022 às 10:30</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    `;

    container.innerHTML = pagina;

    return container;
}