//desafío  - simulador interactivo

//VARIABLES 

let totalCompra = 0
let agregarAlCarrito = parseInt(prompt('Ingresa el produco que deseas comprar: \n1-Camiseta \n2-Gorro \n3-Taza \n4-Llavero'))
let seguirComprando = true

// CONDICIONAL

while (seguirComprando === true) {
    if (agregarAlCarrito === 1) {
        totalCompra = totalCompra + 700
    } else if (agregarAlCarrito === 2) {
        totalCompra = totalCompra + 300
    } else if (agregarAlCarrito === 3) {
        totalCompra = totalCompra + 200
    } else if (agregarAlCarrito === 4) {
        totalCompra = totalCompra + 100
    } else {
        agregarAlCarrito = parseInt(prompt('Opción incorrecta, vuelve a intentarlo: \n1-Camiseta \n2-Gorro \n3-Taza \n4-Llavero'))
        continue
    }

    decision = parseInt(prompt('¿Quisieras agregar otro producto? 1.si - 2.no'))
    if (decision === 1) {
        agregarAlCarrito = parseInt(prompt('Ingresa el produco que deseas comprar: 1-Camiseta 2-Gorro 3-Taza 4-Llavero'))
    } else if (decision === 2) {
        seguirComprando = false
    }
}

alert('El total de su compra es: $' + totalCompra + ' Pero te espera un increible descuento.')

function precioFinal(monto){
    let descuento = 0
    if (monto<=500){
        descuento = 5
    } else if (monto>500 && monto<=1500){
        descuento = 7
    }else if (monto>1500 && monto<=2000 ){
        descuento = 10
}else{
    descuento = 12
}

let montoDescuento = monto *(descuento/100)
monto = monto - montoDescuento
return monto
}

let precioUltimo = precioFinal(totalCompra)
alert ('El precio final de tu compra es: $' + precioUltimo)