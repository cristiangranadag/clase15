var vectorUno = new Array(5)
var vectorDos = new Array(5)

var vectorEjm = ["Camilo", "Juan", "Elver", "Olga"]

for (let i = 0; i < vectorEjm.length; i++) {
    document.write("<br/>"+"Los datos " + i + " - " + vectorEjm[i])
    vectorEjm[i]
}
document.write("<br><br>"+"--------- ForEach----------- " + "<br/><br/>")

// vectorEjm.forEach((nombre) => {
//     document.write("Los datos " + nombre + "<br/>")
// })

vectorEjm.forEach((nombre, index) => {
    document.write("Los datos "+ index + " - " + nombre + "<br/>")
})