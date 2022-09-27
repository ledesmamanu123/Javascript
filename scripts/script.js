//Stocks y precios de productos
let stockPS4 = 5
let precioPS4 = 400

let stockXB = 5
let precioXB = 390

let stockWII = 3
let precioWII = 200

let stockNS = 2
let precioNS = 450

let stockPS2 = 0
let precioPS2 = 200


//Variable de precio final
precioTotal = 0


//Declaramos la función suma
function suma(cant, precio){
   return cant*precio
}

//Pedimos el nombre del cliente
let nombre = prompt("Bienvenido a Playz, ingrese su nombre porfavor.")

//Mostramos el menú
alert("Hola" + " "+ nombre+". Esta es la lista de productos recomendados\n1) Playstation 4 ($400 USD)\n2) Xbox One ($390 USD)\n3) Wii ($200 USD)\n4) Nintendo Switch ($450USD)\n5) Playstation 2 (Sin Stock)\n\nSalir")

//Pedimos el producto
let producto = prompt("Ingrese el nombre del producto que desea comprar:")

while (producto.toLowerCase() != "salir") {

    if (producto.toLowerCase() == "playstation 4"){
        let cantidadPS4 = prompt("Ingrese la cantidad de unidades que desea:")
        if (cantidadPS4 > stockPS4){
            alert("El stock disponible es de "+stockPS4)
        }
        precioTotal = precioTotal + suma(cantidadPS4,precioPS4)

    } else if (producto.toLowerCase() == "xbox one"){
        let cantidadXB = prompt("Ingrese cantidad de unidades que desea:")
        if(cantidadXB > stockXB){
            alert("El stock disponible es de "+stockXB)
        }
        precioTotal = precioTotal + suma(cantidadXB, precioXB)

    } else if (producto.toLowerCase() == "wii"){
        let cantidadWII = prompt("Ingrese cantidad de unidades que desea:")
        if(cantidadWII > stockWII){
            alert("El stock disponible es de "+stockWII)
        }
        precioTotal = precioTotal + suma(cantidadWII, precioWII)

    } else if (producto.toLowerCase() == "nintendo switch"){
        let cantidadNS = prompt("Ingrese cantidad de unidades que desea:")
        if(cantidadNS > stockNS){
            alert("El stock disponible es de "+stockNS)
        }
        precioTotal = precioTotal + suma(cantidadNS, precioNS)

    } else if (producto.toLowerCase() == "playstation 2"){
        let cantidadPS2 = prompt("Ingrese cantidad de unidades que desea:")
        if(cantidadPS2 > stockPS2){
            alert("El stock disponible es de "+stockPS2)
        }
        precioTotal = precioTotal + suma(cantidadPS2, precioPS2)
    } else {
        alert("No tenemos stock de ese producto")
    }
    producto = prompt("Ingrese el nombre del producto que desea comprar:")
}
 alert("El precio total es de :"+ precioTotal)
