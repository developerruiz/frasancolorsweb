let muroAncho = document.getElementById('muro_ancho')
let muroAlto = document.getElementById('muro_alto')
let resultado1 = null
let totalMuro = document.getElementById('calcular')

let btnCalcular = document.getElementById('resultadoMuro')

btnCalcular.addEventListener('click', function(){

    suma = parseFloat(muroAncho.value)+parseFloat(muroAlto.value)
    console.log(suma);
    
})   