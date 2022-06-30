export default() => {
    const container = document.createElement('div');
    const nome = "Erick";

    const pagina = `
    <div class="container" style="background-color: rgba(173, 216, 230, 0.125);">
    <div align="center" class="col-md-7" style="border: 1px solid darkblue; border-radius:2%; background-color: lightblue;" >
        <img src="https://lh3.googleusercontent.com/a-/AOh14GjkYHAu0uVkc277u_11QALuRqc4gvJMS9Mcpz7n=s96-c" name="perfil-picture" style="border-radius:50%">
        <h2 id="nome">Erick Ayres</h2>
    </div>

    <div class="row">
        <div id="profile" class="col-md-4" >
            <div>
                <form>
                    <div class="form-group row">
                    <label for="inputIdade" class="col-sm-2 col-form-label">Idade:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext" id="inputIdade" placeholder="Email" value="33 anos"> 
                    </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputAltura" class="col-sm-2 col-form-label">Altura:</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext" id="inputAltura" placeholder="Email" value="1,72"> 
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPeso" class="col-sm-2 col-form-label">Peso:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control-plaintext" id="inputPeso" placeholder="Email" value="120kg"> 
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputCNS" class="col-sm-2 col-form-label">CNS:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control-plaintext" id="inputCNS" placeholder="CNS" value="1815049"> 
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputSangue" class="col-sm-2 col-form-label">Tipo Sanguineo:</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext" id="inputSangue" placeholder="Email" value="O+"> 
                        </div>
                    </div>
                    <div class="form-group row">
                    <label for="InputBairro" class="col-sm-2 col-form-label">Bairro:</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext" id="inputBairro" placeholder="Senha" value="Jd.Joseli">
                    </div>
                    </div>
                    <div class="form-group row">
                        <label for="InputTelefone" class="col-sm-2 col-form-label">Telefone:</label>
                        <div class="col-sm-10">
                        <input type="text" class="form-control-plaintext" id="inputTelefone" placeholder="Senha" value="9 9707 1589">
                        </div>
                    </div>
 
                </form>
            </div>
        </div>
        <div id="ficha" class="col-md-4">
            <form>
            <div>
                <label class="col-sm-4 col-form-label">Você fuma?</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioFuma" id="inlineFumaS" value="Sim">
                    <label class="form-check-label" for="inlineFumaS">Sim</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioFuma" id="inlineFumaN" value="Não" checked>
                    <label class="form-check-label" for="inlineFumaN">Não</label>
                </div>
            </div>
            <div>
                <label class="col-sm-4 col-form-label">Você bebe?</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioBebe" id="inlineBebeS" value="Sim">
                    <label class="form-check-label" for="inlineBebeS">Sim</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioBebe" id="inlineBebeN" value="Não" checked>
                    <label class="form-check-label" for="inlineBebeN">Não</label>
                </div>
            </div>
            <div>
                <label class="col-sm-4 col-form-label">Faz Exercicios?</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioExercicio" id="inlineExercicioS" value="Sim" checked>
                    <label class="form-check-label" for="inlineExercicioS">Sim</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioExercicio" id="inlineExercicioN" value="Não ">
                    <label class="form-check-label" for="inlineExercicioN">Não</label>
                </div>
            </div>
            <div>
                <label class="col-sm-4 col-form-label">Já foi Operado?</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOperado" id="inlineOperadoS" value="Sim" checked>
                    <label class="form-check-label" for="inlineOperadoS">Sim</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOperado" id="inlineOperadoN" value="Não ">
                    <label class="form-check-label" for="inlineOperadoN">Não</label>
                </div>
            </div>
            <div>
                <label class="col-sm-4 col-form-label">Está com tosse?</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioGripe" id="inlineGripeS" value="Sim" checked>
                    <label class="form-check-label" for="inlineGripeS">Sim</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioGripe" id="inlineGripeN" value="Não ">
                    <label class="form-check-label" for="inlineGripeN">Não</label>
                </div>
            </div>
            <div>
                <label class="col-sm-4 col-form-label">Está com febre?</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineFebre" id="inlineFebreS" value="Sim">
                    <label class="form-check-label" for="inlineFebreS">Sim</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineFebre" id="inlineFebreN" value="Não"  checked>
                    <label class="form-check-label" for="inlineFebreN">Não</label>
                </div>
            </div>
            <div>
                <label class="col-sm-4 col-form-label">Está com enjôo?</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioEnjoo" id="inlineEnjooS" value="Sim">
                    <label class="form-check-label" for="inlineEnjooS">Sim</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioEnjoo" id="inlineEnjooN" value="Não" checked>
                    <label class="form-check-label" for="inlineEnjooN">Não</label>
                </div>
            </div>
            <div>
                <label class="col-sm-4 col-form-label">Alguma dor?</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioDor" id="inlineDorS" value="Sim">
                    <label class="form-check-label" for="inlineDorS">Sim</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioDor" id="inlineDorN" value="Não" checked>
                    <label class="form-check-label" for="inlineDorN">Não</label>
                </div>
            </div>
            </form>
        </div>
    </div>
    <div class="col-md-7" align="right">
        <button type="submit" class="btn btn-primary">Salvar</button>
    </div>
</div>
    `;

    container.innerHTML = pagina;

    return container;
}