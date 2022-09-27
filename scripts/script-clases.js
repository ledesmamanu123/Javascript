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

