//----------SOTCK DE PRODUCTOS----------//

class producto {
    constructor(id, nombre, precio, img, desc = ' ') {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.img = img
        this.desc = desc
    }
}

let camiseta1 = new producto('01', 'Camiseta estampada', 700, './assets/camiseta01.jpg')
let gorro1 = new producto('02', 'Gorro con onda', 300, './assets/gorro02.jpg')
let taza1 = new producto('03', 'Taza a rayas', 200, './assets/taza03.jpg')
let llavero1 = new producto('04', 'Llavero fantasma', 100, './assets/llavero04.jpg')


articulos.push(camiseta1, gorro1, taza1, llavero1)

console.log(articulos)

