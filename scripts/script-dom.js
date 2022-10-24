//Funcion Constructora de productos
function productos (id, nombre, precio, stock, img, marca){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
    this.marca = marca;

}

let ps2 = new productos (1, "Playstation 2", 200, 1, "../img/fondo-cards.jpg", "Sony")
let ps4 = new productos (2, "Playstation 4", 400, 5, "../img/fondo-cards-ps4.jpg", "Sony")
let xb = new productos (3, "Xbox", 390, 5, "../img/fondo-cards-xb.jpg", "Microsoft")
let wii = new productos (4, "Wii", 200, 3, "../img/fondo-cards-wii.jpg", "Nintendo")
let ns = new productos (5, "Nintendo Switch", 450, 2, "../img/fondo-cards-ns.jpg", "Nintendo")
let sd = new productos (6, "Steam Deck", 350, 10, "../img/fondo-cards-sd.jpg", "Valve")

//Declaramos un array con los productos cargados
let lista_productos = [ps2, ps4, xb, wii, ns, sd]

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

//Traemos la seccion de consolas para trabajar sobre ella
let seccion_consolas = document.getElementById("consolas")

//Creamos el array donde se va a almacenar los productos que eligamos
let carrito = []

for (const x of lista_stock) {
    //creamos las cards
    let card = document.createElement("div")
    card.innerHTML = 
    `<img src ="${x.img}" alt ="img consola" class= "img_cards"></img>
    <h2>${x.nombre}</h2>
    <p>Precio: ${x.precio}</p>
    <p>Stock disponible:${x.stock}</p>
    <button id ="${x.id}" class ="btn_cards">Agregar</button>`
    card.className = "card_consolas"
    seccion_consolas.append(card)
}

//Agregamos un evento de escucha
seccion_consolas.addEventListener("click", agregarProducto)

function agregarProducto(prod){
    if (prod.target.classList.contains("btn_cards")){
        let id = prod.target.getAttribute('id')
        console.log(id)
    }
    
}