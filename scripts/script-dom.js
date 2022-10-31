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
let ps3 = new productos (7, "Playstation 3", 250, 4, "../img/fondo-cards.jpg", "Sony")

//Declaramos un array con los productos cargados
let lista_productos = [ps2, ps4, xb, wii, ns, sd, ps3]

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

//Traemos la ul donde vamos a cargar los productos
let listaCarrito = document.getElementById("lista_carrito")
//Creamos el array donde se va a almacenar los productos que eligamos
let carrito = []
cargarStorage()
renderCarrito()
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

//Funcion para acceder a los id de las cards
function agregarProducto(prod){
    if (prod.target.classList.contains("btn_cards")){
        let id = prod.target.getAttribute('id')
        //agregamos el id al array carrito
        carrito.push(id)
        renderCarrito()
    }
}

function renderCarrito(){
    listaCarrito.innerHTML = ``
    guardarStorage()
    /*Con los tres puntos, lo que haremos es trasnformar el array en una lista de argumentos, luego con el new estos argumentos pasan a formar parte de un objeto,
    y con el set los almacenamos en el nuevo array pero con la ventaja de que el SET solo tomas valores únicos, esto significa que si hay más de un número igual, 
    no lo va a tomar.
    En criollo: con los (...) sacamos los numeros de adentro del array, con el new lo trasnformamos en objeto, y con el set tomamos solo valores únicos.*/
    let carritoSinRepetir = [... new Set(carrito)]
    carritoSinRepetir.forEach((x)=>{ //=> con el id q nos llega, lo comparamos con el id de el array lista_stock, y lo guardamos en un NUEVO ARRAY(ya que el filter nos crea un nuevo array).     
        let item = lista_stock.filter((el)=>{ 
            return el.id == x
        })
        //creamos las cards de carrito
        let linea = document.createElement('li')
        //div contenedor
        let divCarrito = document.createElement('div')
        divCarrito.classList.add("item_carrito")
        //titulo
        let tituloCarrito = document.createElement('h4')
        tituloCarrito.innerText = `${item[0].nombre}`
        //img
        let imgCarrito = document.createElement('img')
        imgCarrito.classList.add("img_carrito")
        imgCarrito.setAttribute("src",item[0].img)
        //precio
        let precioCarrito = document.createElement('span')
        precioCarrito.classList.add("precio_carrito")
        precioCarrito.innerText = `$${item[0].precio}`
        //cantidad
        let cantCarrito = document.createElement('span')
        //precioCarrito.innerText =
        //button
        let btnCarrito = document.createElement('button')
        btnCarrito.innerText = `X`
        btnCarrito.classList.add("btn_carrito")
        btnCarrito.dataset.mark = x
        btnCarrito.addEventListener("click", borrarProducto)

        listaCarrito.classList.add("nav_carrito")
        divCarrito.append(imgCarrito)
        divCarrito.append(tituloCarrito)
        divCarrito.append(precioCarrito)
        divCarrito.append(btnCarrito)
        linea.append(divCarrito)
        listaCarrito.append(linea)

        //Guardamos los productos en el carrito
        
    })
}

function borrarProducto(e){
    let id = e.target.dataset.mark //=> Creamos un nuevo array, y usando el atributo q le creamos al btn, lo sacamos del nuevo array, y volvemos a renderizar el carrito
    carrito = carrito.filter((cartId)=>{
        return cartId != id;
    })
    renderCarrito()
}


//Creamos una funcion para guardar los productos en el local storage
function guardarStorage(){
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

//Creamos una funcion para cargar los productos del local storage
function cargarStorage(){
    if (localStorage.getItem("carrito") !=null ){  
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
}
