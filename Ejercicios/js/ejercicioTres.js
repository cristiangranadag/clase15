'use strict'
// 3)   lea 10 números por teclado, 5 para un array y 5 para otro array distinto. Mostrar los 10 números en pantalla 
// mediante un solo array.


var vectorUno =[5]
var vectorDos = [5]
// var vectorTres = [10]; //Vector abreviado

var vectorTres = new Array(10); //Vector como objeto

for (let index = 0; index<10; index++) {    
   if(index<5){
       vectorUno[index] = Number(prompt('ingrese Número'))
   }
   else if(index>4){
       vectorDos[index] = Number(prompt('ingrese Número'))
   }
}

// console.log(vectorUno)
// console.log(vectorDos)

for (let index = 0; index<10; index++) {
   if(index<5){
      vectorTres[index] = vectorUno[index] 
   }
   else if(index>4){
       vectorTres[index] = vectorDos[index] 
   }
}

// vectorTres.forEach((num)=>{
//     document.write("<h2>" +num+ "</h2>" + "<br/>");
// })

for (let index = 0; index < 10; index++) {
   document.write("<h2>" +"Código " + index+ ": "+ vectorTres[index] +"</h2>" +"<br/>");
}  







 