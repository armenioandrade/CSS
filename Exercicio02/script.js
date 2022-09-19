function menuMedico(){
    apagarContexto()
    document.getElementById('mainMedico').style.display = 'block';
    console.log('menumedico')
}

function menuPaciente(){
    apagarContexto()
    document.getElementById('mainPaciente').style.display = 'block';   
    console.log('menupaciente')
}

function menuReceita(){
    apagarContexto()
    document.getElementById('mainReceita').style.display = 'block';   
    console.log('menupaciente')
}

function apagarContexto(){
    document.getElementById('mainMedico').style.display = 'none';
    document.getElementById('mainPaciente').style.display = 'none';
    document.getElementById('mainReceita').style.display = 'none';
    //document.getElementById('mainHome').style.display = 'none';
    
}
