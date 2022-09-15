let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

let sliderWidth = document.querySelector('.slider').clientWidth;

document.querySelector('.slider--width').style.width = 
    `${sliderWidth * totalSlides}px`;

document.querySelector('.slider--controls').style.width = 
    `${sliderWidth}px`;
document.querySelector('.slider--controls').style.height = 
    `${document.querySelector('.slider').clientHeight}px`;


function goPrev(){
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();
}
function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMargin();

}

function updateMargin(){
    let sliderWidth = document.querySelector('.slider').clientWidth;
    let newMargin = (currentSlide * sliderWidth);
    document.querySelector('.slider--width').style.marginLeft = 
    `-${newMargin}px`;
}
setInterval(goNext,4000);



function saiba1(){
    minhajanela = window.open("espec.html");
}
function saiba2(){
    minhajanela = window.open("horarios.html");
}

function especialidades(){
    minhajanela = window.open("espec.html");
}

function profissionais(){
    minhajanela = window.open("prof.html");
}

function noticias(){
    minhajanela = window.open("https://www.coffito.gov.br/nsite/");
}
function contatos(){
    minhajanela =window.open("contato.html");
}
function agendar(){
    minhajanela = window.open("agenda.html");
}


