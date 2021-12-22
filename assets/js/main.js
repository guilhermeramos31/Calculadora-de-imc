const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
 e.preventDefault();
 const InputPeso = e.target.querySelector('#peso');
 const InputAltura = e.target.querySelector('#altura');

 const peso = Number(InputPeso.value);
 const altura = Number(InputAltura.value);
 if(!peso){
    setResultado('Peso invalido','erro', false);
    return;
 }
 if(!altura){
    setResultado('Altura invalido','erro', false);
    return;
 } 
 const IMC = calcIMC(peso, altura);
 let resultadoMsg = claIMC(IMC);
 let cor = nivel(IMC);
 setResultado(`Seu IMC é ${IMC} e voçe está com ${resultadoMsg}. `, cor);
 console.log(resultadoMsg);
 console.log('ok');
 console.log(IMC);
 console.log(peso,altura);
});

function criaP() { 
    const p= document.createElement('p');
    return p;
}

function setResultado (msg, className, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.classList.add(className);
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function calcIMC(peso, altura) {
    const imc = peso/altura**2;
    return imc.toFixed(2);
}

function claIMC(IMC){
    const classification = ['Abaixo do peso','Peso normal','Sobrepeso',
    'Obesidade grau I','Obesidade grau II','Obesidade grau III'];
    
    if(IMC >= 39.9 ){
        var mensagem = classification[5];
    }else if(IMC >= 34.9) {
        var mensagem = classification[4];
    } else if(IMC >= 29.9){
        var mensagem = classification[3];
    } else if(IMC >= 24.9){
        var mensagem = classification[2];
    } else if(IMC >= 18.5){
        var mensagem = classification[1];
    } else if(IMC < 18.5 ){
        var mensagem = classification[0];
    }
    var mensagem;
    return mensagem;
}

function nivel(IMC){
    if(IMC >29.9){
        var nivel='erro';
    } else if(IMC< 18.5){
       var nivel='amarelo';
    } else{
        var nivel='paragrafo-resultado';
    }
    var nivel;
    return nivel;
}