
var sobremostrar = document.getElementById('visible')   
var mostrarexp = document.getElementById('visible-experiencia1') 
var mostrarexp2 = document.getElementById('visible-experiencia2')
var formacao = document.getElementById('visible-formacao') 
var sobremimicone = document.querySelector('.sobremimicone') 
var experienciasicone = document.querySelector('.experienciasicone') 
var formacaoicone = document.querySelector('.formacaoicone') 

function mostrarSobre(){
    if(sobremostrar.style.display =="none"){
        sobremostrar.style.display ="block"
        sobremimicone.className ='sobremimicone fas fa-angle-right';
    }else{
        sobremostrar.style.display ="none";
        sobremimicone.className ='sobremimicone fas fa-angle-down';
    }
}
function carregaExpBlock(){
    mostrarexp.style.display ="block";
    mostrarexp2.style.display ="block";
    experienciasicone.className ='sobremimicone fas fa-angle-right';
}
function carregaExpNone(){
    mostrarexp.style.display ="none";
    mostrarexp2.style.display ="none";
    experienciasicone.className ='sobremimicone fas fa-angle-down';
}
function mostrarexperiencia(){
    if(mostrarexp.style.display =="none"){
        carregaExpBlock()
    }else{
        carregaExpNone()
        }
    }
function mostrarFormacao(){
    if(formacao.style.display =="none"){
        formacao.style.display ="block"
        formacaoicone.className ='sobremimicone fas fa-angle-right';
    }else{
        formacao.style.display ="none"
        formacaoicone.className ='sobremimicone fas fa-angle-down';
    }
}

