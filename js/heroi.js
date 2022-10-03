const nomeHerois = ['Urhan', 'Ushan', 'Olozor', 'Azadium', 'Evelot', 'Skull Blood', 'Ald', 'Neldor', 'Bestina', 'Mitalar', 'Alabyran', 'Wizaro', 'Akkar', 'Beldroth', 'Aolis'];

const classes = ['Mago', 'Paladino', 'Viking', 'Anão', 'Elfo', 'Centauro', 'Hobbit', 'Gigante'];




var nomeFinal;
const btnGerar = document.querySelector('#btn');


function gerarNomes() {

    var positionNome = parseInt(Math.random() * (14 - 0) + 0);

    let nomeFinal = nomeHerois[positionNome];

    return nomeFinal;
}

function gerarClasse (){

    var positionClasse = parseInt(Math.random() * (8 - 0) + 0);

    let classeFinal = classes[positionClasse];

    return classeFinal;
}

function forca (){

    let valorForca = parseInt(Math.random()*100);

    return valorForca;
}

function agilidade (){
    
    let valorAgil = parseInt(Math.random()*100);

    return valorAgil;
}

function precisao (){
    
    let valorPrecisao = parseInt(Math.random()*100);

    return valorPrecisao;
}

function velocidade (){
    
    let valorVelo = parseInt(Math.random()*100);

    return valorVelo
}

function Inteligencia (){
    
    let valorInte = parseInt(Math.random()*100);

    return valorInte
}

function carisma (){
    
    let valorCarisma = parseInt(Math.random()*100);

    return valorCarisma
}

function astucia (){
    
    let valorAstucia = parseInt(Math.random()*100);

    return valorAstucia
}



// botao ------------------------------------------------------

btnGerar.addEventListener('click', function () {

    document.querySelector('#nomeHeroi').textContent = gerarNomes();
    document.querySelector('#classe').textContent = gerarClasse();
    
    document.querySelector('#forca').textContent = forca();
    document.querySelector('#agil').textContent = agilidade();
    document.querySelector('#precisao').textContent = precisao();
    document.querySelector('#velocidade').textContent = velocidade();
    document.querySelector('#inteligencia').textContent = Inteligencia();
    document.querySelector('#carisma').textContent = carisma();
    document.querySelector('#astu').textContent = astucia();


})