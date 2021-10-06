var registros = []
module.exports.registros = registros;

function agregarRegistro() {
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var telefono = document.getElementById('telefono').value
    var correo = document.getElementById('correo').value
    var contrasena = document.getElementById('contrasena').value
    registros.push({nombre,apellido,telefono,correo,contrasena})
    // console.log(registros);
    return registros
}
module.exports.agregarRegistro = agregarRegistro;

function ordenarArreglo(arreglo) {
    arreglo.sort(function (a, b) {
        if (a.apellido > b.apellido) {
          return 1;
        }
        if (a.apellido < b.apellido) {
          return -1;
        }
        return 0;
      });
      return arreglo;
}
module.exports.ordenarArreglo = ordenarArreglo;


function filtrarCorreo(arreglo) {
    const filtro = []

    arreglo.forEach(data => {
        if (data.correo.includes('gmail.com')) {
            filtro.push(data)
        }
    });
    return filtro
}
module.exports.filtrarCorreo = filtrarCorreo;