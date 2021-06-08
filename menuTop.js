let ubicacionPrincipal  = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento_Actual = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento_Actual){
        document.getElementById('menu-desktop').style.top = '0';

    }
    else{
        document.getElementById('menu-desktop').style.top = '-80px';
    
    }
    ubicacionPrincipal = Desplazamiento_Actual;
}