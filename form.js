var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var telefono = document.getElementById("telefono");
var correo = document.getElementById("correo");
var contrasena = document.getElementById("contraseña");

function checkNombre(nombre) {
    if (/^[a-zA-ZÀ-ÿ\s]{4,30}$/.test(nombre)) {
        return true;
    } else if (nombre == ""){
        window.alert("El nombre no puede estar vacío.");
        return false;
    }else {
        window.alert("El nombre " + nombre + " es inválido.");
        return false;
    }
}

function checkApellido(apellido) {
    if (/^[a-zA-ZÀ-ÿ\s]{4,30}$/.test(apellido)) {
        return true;
    } else if (apellido == ""){
        window.alert("El apellido no puede estar vacío.");
        return false;
    } else {
        window.alert("El apellido " + apellido + " es inválido.");
        return false;
    }
}

function checkTelefono(telefono) {
    if (/^[0-9]{7}$/.test(telefono)) {
        return true;
    } else if (telefono == ""){
        alert("El teléfono no puede ser vacío.");
        return false;
    } else {
        alert("El telefono " + telefono + " es inválido.");
        return false;
    }
}

// /^\d[0-9]{7}$/
// /^?[0-9]{7}?[-\s\.]?$/

function checkCorreo(correo) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)) {
        return true;
    } else if (telefono == ""){
        alert("El correo no puede ser vacío.");
        return false;   
    } else {
        alert("La dirección de email " + correo + " es inválida.");
        return false;
    }
}

function checkContrasena(contrasena) {
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/.test(contrasena)) {
        return true;
    } else if (contrasena == ""){
        alert("La contraseña no puede ser vacía.");
        return false;
    } else {
        alert("La contraseña" + contrasena + " es inválida.");
        return false;
    }
}

module.exports={checkNombre, checkApellido, checkTelefono, checkCorreo, checkContrasena};