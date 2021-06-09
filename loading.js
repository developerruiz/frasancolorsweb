let pintura = document.querySelector('.loading')
let logoLoading = document.querySelector('.logoload')

// logoLoading.style.animation = 'latido 2s infinite'

window.addEventListener('load', function () {

    this.setTimeout(() => {

        logoLoading.style.transition = '.5s ease-in'
        logoLoading.style.opacity = '0'

    }, 2000);

    this.setTimeout(() => {

        pintura.style.transition = '1s ease-in'
        pintura.style.marginTop = '-2500px'
        

    }, 3000);

    this.setTimeout(() => {

        pintura.style.display = 'none'
        // pintura.style.marginTop = '-1500px'
    }, 4000);
})