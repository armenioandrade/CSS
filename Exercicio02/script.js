function menuMedico() {
    apagarContexto()
    document.getElementById('mainMedico').style.display = 'block';
}

function menuPaciente() {
    apagarContexto()
    document.getElementById('mainPaciente').style.display = 'block';
}

function menuReceita() {
    apagarContexto()
    document.getElementById('mainReceita').style.display = 'block';
}

function resultadoMedico() {
    document.getElementById("resultadoMedico").style.display = 'block';

}

function apagarContexto() {
    document.getElementById('mainMedico').style.display = 'none';
    document.getElementById('mainPaciente').style.display = 'none';
    document.getElementById('mainReceita').style.display = 'none';
    document.getElementById("resultadoMedico").style.display = 'none';

}