p//----------SOTCK DE PRODUCTOS----------//

let stockProductos = [
    {id: 1, nombre: "Camiseta con onda", cantidad: 1, desc: "Ilustraciones personalizadas, pintadas a mano", precio: 1000, img: './assets/camiseta01.jpg'},
    {id: 2, nombre: "Gorro canchero", cantidad: 1, desc: "Protejete del sol sin perder la facha", precio: 500, img: './assets/gorro02.jpg'},
    {id: 3, nombre: "Taza del ammor", cantidad: 1, desc: "Para el tesito o el cafecito", precio: 250, img: './assets/taza03.jpg'},
    {id: 4, nombre: "Llaverito quitapenas", cantidad: 1, desc: "Llevalo siempre con vos", precio: 150, img: './assets/llavero04.jpg'},
]
const contenedorProductos = document.getElementById('contenedor-productos')

stockProductos.forEach((producto) => { 
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="precioProducto>Precio: $ ${producto.precio}</p>
    <button id="agregar${prducto.id}" class="boton-agregar">Agregar<i class="fas fa-shopping-cart></i></button>
    `

    contenedorProductos.appendChild(div)
})