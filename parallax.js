(function (){
    // Objeto con propiedades

var propParallax = {

    seccion: document.querySelector('.parallax'),
    recorrido: null ,
    limite: null
}

// objeto con metodos 

var metParallax = {

    inicio: function(){

        window.addEventListener('scroll', metParallax.scrollParallax);
    },

    scrollParallax: function(){
        propParallax.recorrido = window.pageYOffset;
        propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

        if(  propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite){

            propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 50 + 'px'  
        }
        else{
            propParallax.seccion.style.backgroundPositionY = 0 ;
        }
    }


}


metParallax.inicio();
}())