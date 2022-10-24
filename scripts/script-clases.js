// VARIABLES: son un espacio q reservamos en la memoria para poder usarlo.

/*Tenemos palabras reservadas para declarar una variable:
 var (esta en desuso)
 let  (es la que se usa actualmente) "nombredevariable"
 const (son variables constantes) "nombredevariable"
 */

/*
js es case sensitive, son distintas las variables con mayus y sin mayus.

nombreVARIABLE "no son iguales" nombrevariable

*/

let variableUno
let fecha

//ASIGNACION DE VALOR

variableUno = "Messi"
//tipo de variable texto = "string"

fecha = 2022
//tipo de variable de numero = "number"

//INICIALIZACION DE LA VARIABLE
const altura = 1.69

//Significa que declaramos y asignamos el valor a la variable.


//let v const 
/* let nos permite declarar variables que su valor puede cambiar, y 
 el valor de const deberia ser constante. */



 let numeroA = 5
 let numeroB = 13

 let resultado = numeroA + numeroB

 //Mostramos las variables con console.log()

 console.log("el resultado es",resultado)

 let texto = "Hola"
 let texto2 = "mundo"

 // " " se usa para dar un espacio entre texto
 let textoResu = texto + " " + texto2

 console.log(textoResu)

 //si se suma texto con numero, se concatenan

 let union = numeroA + texto

 console.log(union)


 let numeroText = "3"

 let numeroConTexto = numeroText + numeroA

 console.log(numeroConTexto)

 //la RESTA de texto con numeros nos da el error de Nan (Not a Number)

 /* prompt se utiliza para mostrar una ventana emergente con un input */

 let numeroIngresado = prompt("Ingrese dato: ")

 console.log(numeroIngresado)

 //ALERT es para mostrar informacion
 alert("Bienvenido al himalaya")


 //3 productos -> mostrarlos -> comprar -> cantidad -> mostrar precio final

 let prod1 = "mesa"
 let precio1 = 120
 
 let prod2 = "silla"
 let precio2 = 100

 alert("Acepte si quiere comprar: "+prod1+" y "+prod2)

 let cant1 = prompt("Ingrese la cantidad de "+prod1+" que desea comprar:")
 let cant2 = prompt("Ingrese la cantidad de "+prod2+" que desea comprar:")

 let preciofinal1 = cant1 *precio1
 let preciofinal2 = cant2 * precio2

 let preciofinal = preciofinal1 + preciofinal2

 alert("El monto total es: "+preciofinal)




 // ARRAYS CLASE N°6

let listaNumeros = [1, 15, "coder"]
let listaCadenas = ["hola", "Mundo", 21, 5, 10]
//recorrer un array
for (let i = 0; i <= 2; i++){
    console.log(listaNumeros[i])
}

let nombre = prompt ("Ingrese nombre:")

//Agregar un dato nuevo al array al final
listaNumeros.push(nombre)

//Agregar un dato al principio 
listaNumeros.unshift(nombre)


//SACAR ELEMENTOS DEL ARRAY

//sacar el ultimo elemento del array
listaNumeros.pop()

//sacar el primer elemento del array 
listaNumeros.shift()


//PUEDO SACAR LOS DATOS DEL ARRAY Y MOVERLOS A OTRO LADO

let primerElemento = listaNumeros.shift()

let primerDato = primerElemento

//PODEMOS GENERAR UN STRING DE LOS ELEMENTOS DE UN ARRAY SEPARADOS POR EL VALOR QUE LE PONGAMOS

console.log (listaNumeros.join(","))

//PODEMOS JUNTAR 2 STRINGS Y CONVERTIRLAS EN 1

let arrayCompleto = listaNumeros.concat(listaCadenas)
//si queremos mas de uno lo separamos con ,

//PODEMOS ELIMINAR ELEMENTOS ESPECIFICOS DE UN ARRAY

//primer parametro, es indicar el indice de donde queremos empezar
//segundo elemento son los elementos que queremos eliminar conteniendo el indice

listaCadenas.splice(1,3)
// listaCadenas = ["hola", 10]



//PODEMOS COPIAR UNA PARTE DEL ARRAY Y CREAR UNO NUEVO

//primer parametro, indicar el indice
//segundo parametro, son los elementos que queremos copiar, no toma el ultimo
let nombres = ["perez", "vero", "manu", "fer", "pri"]

let nuevoArray = nombres.slice(1,4)
//nuevoArray = ["vero", "manu", "fer"]



//FUNCIONES DE ORDEN SUPERIOR
// la funcion de orden superior es la que recibe o devuelve una funcion

function porCadaUno(array, fn){
    for(const elemento of array){
        fn(elemento)
    }
}

//le mandamos el array y la funcion

porCadaUno([1,2,3,4], console.log)

//ForEach, itera sobre el array y le aplica la funcion a los elementos

let numeros = [1,2,3,4,5,6]

numeros.forEach((num) =>{
    console.log(num)
})

//num es la variable que usamos para iterar sobre el array, igual que elemento
//en la funcion de porCadaUno


//METODO FIND
/*
El metodo find recibe una funcion de comparación por parametro.
 o sea, recorre un array completo, compara lo que le pedimos, y nos lo 
 devuelve. 
 Se puede implementar como busqueda de productos

*/ 


//Definimos un array(consolas) que tiene 3 objetos, con 2 valores.
let consolas = [
    {nombre: "Playstation 2", precio:5000},
    {nombre: "Xbox One", precio:10000},
    {nombre: "Playstation 4", precio:15000},
]

let resultadoConsola = prompt("Ingrese el nombre de la consola:")
let buscar = consolas.find((elemento) => elemento.nombre === resultadoConsola)


//METODO FILTER, muy util para todooo
/*
El metodo fliter es parecio al find, solo que el filter te retorna TODOS
los elementos que correspondan con el parametro.
*/

//Definimos el array(ropa), que tiene varios elementos.
let ropa = [
    {nombre:"Pantalon B" , precio:3000 },
    {nombre:"Pantalon White", precio: 1500},
    {nombre:"Remera suave" ,precio: 2600},
    {nombre:"Short de playa" ,precio: 2200},
]

let ropaIngreso = prompt ("Ingrese la ropa que quiere: ")
let resultadoRopa = ropa.filter((el)=> el.nombre.includes("Pantalon"))

//Nos va a devolver TODOS los objetos que incluyan la palabra "Pantalon" en
//la propiedad nombre.
console.log(resultadoRopa)



//METODO SORT
//Con el metodo sort podemos ordenar un array de menor a mayor o viceversa
//Se puede usar para, por ej, ordenar por precio de menor a mayor


//NUMEROS
const numerosSort = [40, 1, 5, 200]
numerosSort.sort((a, b) => a -b); // [1, 5, 40, 200]
numerosSort.sort((a, b) => b -a); // [200, 40, 5, 1]


//STRINGS
const items = [
    //Si las primeras letras son iguales, pasa a la 2da.
    { nombre: "Pedro", edad: 20},
    { nombre: "Juan", edad: 19},
    { nombre: "Agustin", edad:44},
    { nombre: "Zorman", edad: 37}
]
items.sort((a,b) =>{
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }

    // si a es igual b
    return 0;
})




// DOM: Estructura del documento html que se usa en JS

// existen varios metodos para traer elementos del html al js, los más 
// comúnes son: 
// GetElementById --> trae un elemento por el ID
// GetElementsByClassName --> trae elementos que usan la misma class
// GetElementsByTagName --> trae elementos usando el nombre de la etiqueta, casi ni se usa

//Podemos crearlos también:
// createElement --> agregamos el elemento que querramos.

// let card = document.createElement("div") --> le creamos un div

// card.innerHTML = "<h2>Subtitulo</h2>" --> al div que creamos le agregamos un h2

// Con el siguiente comando podemos AGREGAR un elemento hijo a nuestro elemento padre.

// traemos nuestro elemento padre: 
let catalago = document.GetElementById("catalogo")

// le agregamos la card que creamos
catalogo.append(card)


//Después tenemos metodos para cambiar el texto, o agregar codigo en el html
innerText --> //cambiamos el texto que se encuentre en el nodo(etiqueta)
innerHTML --> //podemos agregar lineas de codigo al html, por ej, elemento.innerHTML = "<h2>Esto se añadio por js</h2>"

//Podremos modificar o agregarle clases a un nodo 
//HTML:
<div id = "container" > esto es una caja </div>

//JS:
let cajaUno = document.GetElementById("container")

cajaUno.innerHTML = "<h2>Agregamos subtitulo/h2>"
cajaUno.className = "juegos"

//HTML:
//<div id = "container" class = "juegos" > esto es una caja <h2>Agregamos subtitulo</h2> </div>

//SI SE TIENE MÁS DE UN ELEMENTO EN UN NODO, SE PUEDE ACCEDER A ÉL ASÍ:

//HTML: 
{/* <div>
    <div class = "card"></div>
    <div class = "card"></div>
    <div class = "card"></div>
</div> */}

//Si nosotros solo queremos cambiar UNA card de las TRES que hay, usamos nuestra variable como array.

//JS:
let container = container.GetElementsByClassName("card")

container[1].className = "card-js"

// ESTO SIGNIFICA QUE AGARRAMOS LA 2DA CARD Y LE CAMBIAMOS EL NOMBRE DE CLASE.
// si queremos usar la primera ponemos 0

