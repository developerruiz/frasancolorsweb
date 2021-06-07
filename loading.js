let pintura = document.querySelector('.loading')
let logoLoading = document.querySelector('.logoload')

logoLoading.style.animation = 'latido 2s infinite'

window.addEventListener('load', function () {

    this.setTimeout(() => {

        logoLoading.style.transition = '.5s ease-in'
        logoLoading.style.opacity = '0'

    }, 2000);

    this.setTimeout(() => {

        pintura.style.transition = '1s ease-in'
        pintura.style.marginTop = '-1200px'

    }, 3000);
})