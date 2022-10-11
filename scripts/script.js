//Stocks y precios de productos
// let stockPS4 = 5
// let precioPS4 = 400

// let stockXB = 5
// let precioXB = 390

// let stockWII = 3
// let precioWII = 200

// let stockNS = 2
// let precioNS = 450

// let stockPS2 = 0
// let precioPS2 = 200

//Funcion Constructora de productos
function productos (nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

}

let ps2 = new productos ("Playstation 2", 200, 1)
let ps4 = new productos ("Playstation 4", 400, 5)
let xb = new productos ("Xbox", 390, 5)
let wii = new productos ("Wii", 200, 3)
let ns = new productos ("Nintendo Switch", 450, 2) 

//Declaramos un array con los productos cargados
let lista_productos = [ps2, ps4, xb, wii, ns]

//Filtramos nuestro array de productos para que, si no hay stock, no lo muestre, y lo guardamos en un nuevo array
let lista_stock = lista_productos.filter((el) => el.stock > 0)

//Ultilizamos el metodo map para crear otro array pero con solo el nombre de los productos
let lista_nombres = lista_stock.map((el) => el.nombre)


//Variable de precio final
precioTotal = 0


//Declaramos la función suma
function suma(cant, precio){
   return cant*precio
}

//Pedimos el nombre del cliente
let nombre = prompt("Bienvenido a Playz, ingrese su nombre porfavor.")

//Mostramos el menú

alert("Hola" + " "+ nombre+". Esta es la lista de productos disponibles:\n -"+lista_nombres.join("\n -"))

//Pedimos el producto
let producto = prompt("Ingrese el nombre del producto que desea comprar:")

while (producto.toLowerCase() != "salir") {

    if (producto.toLowerCase() == "playstation 4"){
        let cantidadPS4 = prompt("Ingrese la cantidad de unidades que desea:")
        precioTotal = precioTotal + suma(cantidadPS4, ps4.precio)

    } else if (producto.toLowerCase() == "xbox one"){
        let cantidadXB = prompt("Ingrese cantidad de unidades que desea:")

        precioTotal = precioTotal + suma(cantidadXB, xb.precio)

    } else if (producto.toLowerCase() == "wii"){
        let cantidadWII = prompt("Ingrese cantidad de unidades que desea:")

        precioTotal = precioTotal + suma(cantidadWII, wii.precio)

    } else if (producto.toLowerCase() == "nintendo switch"){
        let cantidadNS = prompt("Ingrese cantidad de unidades que desea:")

        precioTotal = precioTotal + suma(cantidadNS, ns.precio)

    } else {
        alert("No tenemos stock de ese producto")
    }
    producto = prompt("Ingrese el nombre del producto que desea comprar:")
}
 alert("El precio total es de :"+ precioTotal)
