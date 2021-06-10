const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

const fetchData = async () => {
    try {
        const res = await fetch('colores.json')
        const data = await res.json()
        // console.log(data);
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {
    // console.log(data)
    data.forEach(producto => {
        // console.log(producto);
        // templateCard.querySelector('span').

        templateCard.querySelector('h5').textContent = producto.name
        templateCard.querySelector('p').textContent = producto.hexa
        templateCard.querySelector('span').textContent = producto.hexa



        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });
    items.appendChild(fragment)
}