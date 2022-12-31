
//Traemos la seccion de consolas para trabajar sobre ella
let seccion_consolas = document.getElementById("consolas")

let carrito = []

let listaProductos = []
//Usamos la informacion desde data.json
fetch('../data/data.json')
.then((response)=>response.json())
.then((data)=> render(data))
.catch((data)=>console.log(data))

//Traemos la ul donde vamos a cargar los productos
let listaCarrito = document.getElementById("lista_carrito")

//Creamos el array donde se va a almacenar los productos que eligamos


function render(datos){
    seccion_consolas.innerHTML = ""

    for (const prod of datos) {

        let card = document.createElement('div')
        card.classList.add("card_consolas")
        //img
        let imgCard =  document.createElement('img')
        imgCard.classList.add("img_cards")
        imgCard.setAttribute("src",prod.img)
        //titulo
        let tituloCard = document.createElement('h2')
        tituloCard.classList.add("titulo_cards")
        tituloCard.innerText = `${prod.nombre}`
        //precio
        let precioCard = document.createElement('span')
        precioCard.innerText = `${prod.precio}`
        //btn
        let btnCard = document.createElement('button')
        btnCard.classList.add("btn_cards")
        btnCard.setAttribute("id",prod.id)
        btnCard.innerText = `Agregar`
        btnCard.addEventListener('click',agregarProducto)

        card.append(imgCard)
        card.append(tituloCard)
        card.append(precioCard)
        card.append(btnCard)

        seccion_consolas.append(card)

        listaProductos.push(prod)
    }
    renderCarrito()
}

//Funcion para acceder a los id de las cards
function agregarProducto(prod){
        let id = prod.target.getAttribute('id')
        //agregamos el id al array carrito
        carrito.push(id)
        renderCarrito()

        //Cada vez q pusheamos un nuevo producto al array de carrito, ejecutamos un toastify
        Toastify({
            text: "Agregado correctamente",
            className: "info",
            gravity: "bottom",
            duration: 1500,
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
          }).showToast();
}

console.log(carrito)
cargarStorage()

function renderCarrito(){
    guardarStorage()
    listaCarrito.innerHTML = ``

    /*Con los tres puntos, lo que haremos es trasnformar el array en una lista de argumentos, luego con el new estos argumentos pasan a formar parte de un objeto,
    y con el set los almacenamos en el nuevo array pero con la ventaja de que el SET solo tomas valores únicos, esto significa que si hay más de un número igual, 
    no lo va a tomar.
    En criollo: con los (...) sacamos los numeros de adentro del array, con el new lo trasnformamos en objeto, y con el set tomamos solo valores únicos.*/
    let carritoSinRepetir = [... new Set(carrito)]
    console.log(carritoSinRepetir)
    carritoSinRepetir.forEach( (x) => { //=> con el id q nos llega, lo comparamos con el id de el array lista_productos, y lo guardamos en un NUEVO ARRAY(ya que el filter nos crea un nuevo array).
        
        //Obtenemos el id que necesitamos de la lista de productos
        let item = listaProductos.filter((prod)=>{
            return prod.id === parseInt(x);
        })
        console.log(item)
        const cantidad = carrito.reduce((acum, id) => {  //Con un reduce, a cada objeto lo 
            return id === x ? acum += 1 : acum
        },0)
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
        cantCarrito.innerText = `${cantidad}`
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
        divCarrito.append(cantCarrito)
        divCarrito.append(btnCarrito)
        linea.append(divCarrito)

        listaCarrito.append(linea)
    })
}

function borrarProducto(e){
    let id = e.target.dataset.mark //=> Creamos un nuevo array, y usando el atributo q le creamos al btn, lo sacamos del nuevo array, y volvemos a renderizar el carrito
    carrito = carrito.filter((cartId)=>{
        return cartId != id;
    })
    renderCarrito()
    Toastify({
        text: "Eliminado",
        className: "info",
        gravity: "bottom",
        duration: 1500,
        style: {
          background: "#BB0000",
        }
      }).showToast();
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

/*ACTUALIZCIÓN FINAL DEL PROYECTO
    El error de cargar los productos del carrito que estaban alojados en el localStorage, se resolvio del la siguiente manera:
    Cuando el fetch carga los datos, como es una petición asíncrona, el código js sigue su curso, sin tener los datos cargados. Entonces cuando 
    ejecutamos la funcion renderCarrito() fuera de render(), empieza a comparar el carrito que trae desde el localStorage con la listaProductos que
    todavia no cargo, por esto el array item[] que se genera usando el .filter sobre listaProductos[] está indefinido. Y no puede renderizar los 
    productos del carrito. 

    Para resolver este problema, lo que hicimos fue, llamar a la funcion renderCarrito() cuando los productos ya estaban pusheados en el array de listaProductos[].
    por eso lo ejecutamos dentro de la funcion render(). Para que primero cargue los productos y despues ejecute la función.

    Gracias Samuu!!
*/