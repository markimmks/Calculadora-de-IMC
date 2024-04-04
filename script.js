const sexo = document.getElementsByName('sexo')
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const btnCalc = document.querySelector('#btnCalc').addEventListener('click', calcularImc)
const resultado = document.querySelector('#resultado')
const imcText = document.querySelector('#imcText')
const imgResultado  = document.querySelector('#img-resultado')

function calcularImc(e) {
    e.preventDefault()
    let alturaDigitada = altura.value
    let pesoDigitado = peso.value 
    const calculoImc = Number(pesoDigitado) / Number((alturaDigitada * alturaDigitada))
    let resultIMC = calculoImc.toFixed(1)
    
    //Mostrar IMC
    resultado.innerHTML = 'Seu IMC é'
    resultado.innerHTML += `<span id="res-imc">${resultIMC}</span>`
    
    //Validar Inputs Vazios
    if (peso.value.length == 0 || altura.value.length == 0) {
        alert('[ATENÇÃO] Os campos "Peso" e "Altura" não podem estar vazios. Corrija e tente novamente.')
        return
    }

    if(sexo[0].checked){
        //Homem
        if (resultIMC < 20) {
            imgResultado.setAttribute('src', './img/homem_abaixo_do_peso.svg')
            imcText.innerHTML = 'Abaixo do Peso'
            imcText.setAttribute('class', 'abaixo-peso')
            return
        }
        if (resultIMC <= 24.9) {
            imgResultado.setAttribute('src', './img/homem_peso_ideal.svg')
            imcText.innerHTML = 'Peso Ideal'
            imcText.setAttribute('class', 'peso-ideal')
            return
        }
        if (resultIMC <= 29.9) {
            imgResultado.setAttribute('src', './img/homem_sobrepeso.svg')
            imcText.innerHTML = 'Sobrepeso'
            imcText.setAttribute('class', 'sobrepeso')
            return
        }
        if (resultIMC <= 35.9) {
            imgResultado.setAttribute('src', './img/homem_obeso_1.svg')
            imcText.innerHTML = 'Obesidade Grau I'
            imcText.setAttribute('class', 'obeso-1')
            return
        }
        if (resultIMC <= 42) {
            imgResultado.setAttribute('src', './img/homem_obeso_2.svg')
            imcText.innerHTML = 'Obesidade Grau II'
            imcText.setAttribute('class', 'obeso-2')
            return
        }
        if (resultIMC >= 43) {
            imgResultado.setAttribute('src', './img/homem_obeso_3.svg')
            imcText.innerHTML = 'Obesidade Grau III'
            imcText.setAttribute('class', 'obeso-3')
            return
        }
    }
    
    if(sexo[1].checked){
        //Mulher
        if (resultIMC < 18.5) {
            imgResultado.setAttribute('src', './img/mulher_abaixo_do_peso.svg')
            imcText.innerHTML = 'Abaixo do Peso'
            imcText.setAttribute('class', 'abaixo-peso')
            return
        }
        if (resultIMC <= 23.9) {
            imgResultado.setAttribute('src', './img/mulher_peso_ideal.svg')
            imcText.innerHTML = 'Peso Ideal'
            imcText.setAttribute('class', 'peso-ideal')
            return
        }
        if (resultIMC <= 28.9) {
            imgResultado.setAttribute('src', './img/mulher_sobrepeso.svg')
            imcText.innerHTML = 'Sobrepeso'
            imcText.setAttribute('class', 'sobrepeso')
            return
        }
        if (resultIMC <= 34.9) {
            imgResultado.setAttribute('src', './img/mulher_obesa_1.svg')
            imcText.innerHTML = 'Obesidade Grau I'
            imcText.setAttribute('class', 'obeso-1')
            return
        }
        if (resultIMC <= 39.9) {
            imgResultado.setAttribute('src', './img/mulher_obesa_2.svg')
            imcText.innerHTML = 'Obesidade Grau II'
            imcText.setAttribute('class', 'obeso-2')
            return
        }
        if (resultIMC >= 40) {
            imgResultado.setAttribute('src', './img/mulher_obesa_3.svg')
            imcText.innerHTML = 'Obesidade Grau III'
            imcText.setAttribute('class', 'obeso-3')
            return
        }
    }
}