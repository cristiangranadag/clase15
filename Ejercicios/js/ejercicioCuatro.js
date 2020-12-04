// 4)	Desarrollar un algoritmo que lea 10 números e imprimir solamente los números positivos. (se imprime dentro 
// del ciclo, si el usuario ingresa un número positivo se imprime, sino ingresa un número positivo, no se imprime nada 
// y se pide el número siguiente)

var vectorUno = new Array(5)
var vectorDos = new Array(5)

for (let i = 0; i < vectorUno.length; i++) {
    vectorUno[i] = Number(prompt('Ingrese Número '+i))
}

for (let i = 0; i < vectorDos.length; i++) {
    vectorDos[i] = vectorUno[i] * 2;
}

for (let i = 0; i < vectorDos.length; i++) {
    document.write("<br/>"+vectorDos[i] +"<br/>")
}