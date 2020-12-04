const lista = document.getElementById('lista')

const arrayItem = ["item 1", "item 2", "item 3"];

const fragment = document.createDocumentFragment()
// const fragment = new DocumentFragment()

arrayItem.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item
    // fragment.appendChild(li)
    // console.log(fragment)

    const chilNode = fragment.firstChild
    console.log(item, chilNode)

    // fragment.appendChild(li)
    fragment.insertBefore(li, chilNode)
})

lista.appendChild(fragment)