// OTRA FORMA DE CREAR CARDS

//Traemos la seccion donde se van a armar las cards
let catalogo = document.getElementById("catalogo")
//declaramos el array donde se van a almacenar los productos del carrito
let cart = []
//Traemos la ul donde vamos a guardar los productos
let lista_cart = document.getElementById("lista_cart")
//Traemos el button para vaciar el carrito
let btn_vaciar = document.getElementById("btn_vaciar")
btn_vaciar.addEventListener("click", borrarTodo)
//Treamos el elemento del total
let precioTotal = document.getElementById("total")


//declaramos la funcion contructora
function Productos_dos(id, nombre, stock, precio) {
    this.id = id,
    this.nombre = nombre,
    this.stock = stock,
    this.precio = precio
}

//cargamos los productos
let sGalaxy = new Productos_dos(1,"Samsung Galaxy",10,1200)
let motoG4 = new Productos_dos(2,"Motorola G4", 9,600)
let motoX = new Productos_dos(3,"Motorola X",4 ,700)
let iphone14 = new Productos_dos(4,"Iphone 14",8,1500)
let motoE4 = new Productos_dos(5, "Motorola E4", 3, 700)

//declaramos un array con los productos cargados
let arrayProductos = [sGalaxy, motoG4, motoX, iphone14, motoE4]

arrayProductos.forEach((prod) => {
    //creamos la card
    let card = document.createElement("div")
    card.classList.add('card-body')
    //Titulo
    let card_titulo = document.createElement("h4")
    card_titulo.classList.add('card-titulo')
    card_titulo.innerText = `${prod.nombre}`
    //Precio
    let card_precio = document.createElement("p")
    card_precio.classList.add('card-precio')
    card_precio.innerText = `$${prod.precio}`
    //Stock
    let card_stock = document.createElement("p")
    card_stock.innerText = `Stock disponible: ${prod.stock}`
    //Boton
    let card_button = document.createElement("button")
    card_button.classList.add('card-btn')
    card_button.innerText = "Comprar"
    card_button.setAttribute("id",prod.id)
    card_button.addEventListener("click", AgregarAlCarrito)

    card.append(card_titulo)
    card.append(card_precio)
    card.append(card_stock)
    card.append(card_button)

    //Inyectamos nuestra card en nuestro catalogo
    catalogo.append(card)
})

loadCartFromStorage()
renderCart()

function AgregarAlCarrito(e){
    // Con el metodo push, vamos a agregar un valor al array
    cart.push(e.target.getAttribute('id'))
    renderCart()
}

//Con esta funcion lo unico q vamos a hacer es mostrar los prductos en el carrito
function renderCart(){
    saveCartToStorage()
    lista_cart.innerHTML = ""
        //Creamos un array donde se nos guarden, los elementos pero sin repetir
        let CartSinRepetidos = [...new Set(cart)] /* Los 3 puntos, nos sacan el contenido de cualquier objeto o array, con el SET sacamos los elementos del array sin repetirlos, y los guarda en un objeto, por eso el uso NEW */

        //iteramos el cart sin repetidos, y comparamos con un filter el id para luego retornar todo en una variable
        CartSinRepetidos.forEach((prod)=>{
            let items = arrayProductos.filter((element)=>{
                return element.id === parseInt(prod)
            })
            let cantidad = cart.reduce((total, id)=>{
                     // condicional |    true   | false   ==> asi se escribe un if pero de forma corta            
                return id === prod ? total += 1 : total 
            }, 0) //el 0 es donde arranca el reduce

            //Creamos los elementos para mostrarlos en el html
            let linea = document.createElement('li')
            linea.innerText = `${cantidad} x ${items[0].nombre} - $${items[0].precio}`

            let btn_cart = document.createElement('button')
            btn_cart.innerText = `X`
            btn_cart.dataset.item = prod //==> dataset se utiliza para poner un atributo unico al elemento
            btn_cart.addEventListener("click", buttonBorrar)

            linea.append(btn_cart)
            lista_cart.append(linea)


            precioTotal.innerText = calculoPrecioTotal()
        })
}

function buttonBorrar(event){
    let id = event.target.dataset.item
    cart = cart.filter((cartId)=> {  //CREAMOS UN NUEVO ARRAY PERO SIN EL ID Q LE MANDAMOS
        return cartId != id
    })
    renderCart()
}

function borrarTodo(){
    cart = []
    lista_cart.innerHTML = ""
    precioTotal.innerText = 0
}

function calculoPrecioTotal(){
    return cart.reduce((total, itemId)=>{ 
        let items = arrayProductos.filter((elemento)=>{
            return elemento.id === parseInt(itemId)
        })
        return total + items[0].precio
    }, 0)
}

//Guardamos el carrito en el localStorage
function saveCartToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
}

//Cargamos el carrito guardado
function loadCartFromStorage(){
    if(localStorage.getItem('cart') != null){
        cart = JSON.parse(localStorage.getItem('cart'))
    }
}