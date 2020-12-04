const lista = document.getElementById('lista')
// console.log(lista)

// const li = document.createElement('li')
// li.textContent = 'primer elemento'

// lista.appendChild(li)

const arrayElement = ['primer elemento', 'segundo', 'tercero']

// arrayElement.forEach(item => {
//     // console.log(item)
//     const li = document.createElement('li')
//     li.textContent = item
//     lista.appendChild(li)
// })

arrayElement.forEach(item => {
    lista.innerHTML += `<li>${item}</li>`
})