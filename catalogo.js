(function(){

    // OBJETOS CON PROPIEDADES
    
    var proTabs={
    
        primer_ecabezado: document.getElementById('encabezado_opciones').firstElementChild,
        primer_contenido: document.getElementById('contenido_menu').firstElementChild,
    
        enlaces_encabezado: document.querySelectorAll('#encabezado_opciones li a'),
        li_encabezado: document.querySelectorAll('#encabezado_opciones li'),
        divs_contenido: document.querySelectorAll('#contenido_menu > div'),
    
        contenido_activo: null
        
    }
    
    // OBJETOS CON METODOS 
    
    var metTabs ={
    
        inicio: function(){
            proTabs.primer_ecabezado.className = 'active';
            proTabs.primer_contenido.className = 'active';
    
            for (var i = 0; i < proTabs.enlaces_encabezado.length; i++) {
                proTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
            }
        },
    
        evento: function(e){
            e.preventDefault();
    
            for (var i = 0; i < proTabs.li_encabezado.length; i++) {
                proTabs.li_encabezado[i].className= '';
                
            }
    
            for (var i = 0; i < proTabs.divs_contenido.length; i++) {
                proTabs.divs_contenido[i].className= '';
                
            }
    
            this.parentElement.className ='active';
        
            proTabs.contenido_activo = this.getAttribute('href');
            document.querySelector(proTabs.contenido_activo).className = 'active'
            document.querySelector(proTabs.contenido_activo).style.opacity = '0';
    
            setTimeout(function(){
                document.querySelector(proTabs.contenido_activo).style.opacity = '1';
    
            }, 100)
        }
    }
    
    metTabs.inicio();
    
    }())
    