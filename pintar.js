let rojo = document.getElementById('rojo')
let naranja = document.getElementById('naranja');
let verde = document.getElementById('verde');
let purpura = document.getElementById('purpura');
let azul = document.getElementById('azul');

let fondo = document.getElementById('fondo_color');

  rojo.addEventListener('click',function(){
      fondo.style.backgroundImage = "url(img/fondo-rojo.jpg)";
      fondo.style.transition = ".5s 8ase-in";
      
  });
  naranja.addEventListener('click', function(){
      fondo.style.backgroundImage = "url(img/fondo-naranja.jpg)";
      fondo.style.transition = ".5s 8ase-in";
  });
  verde.addEventListener('click', function(){
    fondo.style.backgroundImage = "url(img/fondo-verde.jpg)";
    fondo.style.transition = ".5s 8ase-in";
});

purpura.addEventListener('click', function(){
    fondo.style.backgroundImage = "url(img/fondo-purpura.jpg)"
    fondo.style.transition = ".8s ease-in"
})
azul.addEventListener('click', function(){
    fondo.style.backgroundImage = "url(img/fondo-azul.jpg)"
    fondo.style.transition = ".8s ease-in"
})