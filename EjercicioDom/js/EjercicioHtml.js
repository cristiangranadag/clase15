'use strict'

var lista = document.getElementById('lista');
var ListaDes =document.getElementById('ListaDes');

var fragmentoLis = document.createDocumentFragment();
var fragmentoLisDes = document.createDocumentFragment();

var fruta = new Array();
fruta = ["Manzana","Banano","Pera"];

fruta.forEach((dato,index)=>{
    var li = document.createElement('li');
    li.textContent = dato;
    fragmentoLis.appendChild(li)

    var opcion = document.createElement('option')
    opcion.textContent = dato;
    opcion.setAttribute('value',index);
    fragmentoLisDes.appendChild(opcion);
})

lista.appendChild(fragmentoLis)
ListaDes.appendChild(fragmentoLisDes);

setTimeout(() => {
    document.getElementById('lista').remove();
}, 3000);