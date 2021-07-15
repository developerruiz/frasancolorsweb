// INPUT
let muroAlto = document.getElementById('muro_alto')
let muroAncho = document.getElementById('muro_ancho')
let ventanaAlto = document.getElementById('ventana_alto')
let ventanaAncho = document.getElementById('ventana_ancho')
let puertaAlto = document.getElementById ('puerta_alto')
let puertaAncho = document.getElementById('puerta_ancho')
// TOTAL
let totalMuro = document.getElementById('resultado_muro')
let totalVentana = document.getElementById('resultado_ventana')
let totalPuerta = document.getElementById('resultado_puerta')

let botonAgregar =  document.getElementById('agregar')
let btnCalcular = document.getElementById('resultadoMuro')
 
let metrosPremium = 11
let metrosSuprema = 10
let metrosEstelar = 10


cubetaCuatrolitros = metrosPremium.value * 4

btnCalcular.addEventListener('click', function(){
    sumaMuro = parseFloat(muroAncho.value)+parseFloat(muroAlto.value)
    console.log(totalMuro.innerHTML = `<p>${sumaMuro}m2</p>`);

    sumaVentana = parseFloat(ventanaAncho.value)+parseFloat(ventanaAlto.value)
    console.log(totalVentana.innerHTML = `<p>${sumaVentana}m2</p>`);

    sumaPuerta = parseFloat(puertaAncho.value)+parseFloat(puertaAlto.value)
    console.log(totalPuerta.innerHTML = `<p>${sumaPuerta}m2</p>`);

    totalTotal = sumaPuerta + sumaVentana - sumaMuro
    console.log(totalTotal + "m2");


    // cubetaSuprema = parseFloat(totalTotal)/parseFloat(metrosSuprema)
    // console.log(Math.round(cubetaSuprema));

    // cubetaEstelar = parseFloat(totalTotal)/parseFloat(metrosEstelar)
    // console.log(Math.round(cubetaEstelar));

})  

var newDiv = document.createElement("div");
var newContent = document.createTextNode("Hola!¿Qué tal?");
newDiv.appendChild(newContent); //añade texto al div creado.

botonAgregar.addEventListener('click', () =>{
    console.log(newDiv);
})

    // suma = parseFloat(muroAncho.value)+parseFloat(muroAlto.value)
    // console.log(suma);

