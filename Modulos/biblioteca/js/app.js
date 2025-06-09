import Contactos from './contactos.js';

let txtIdentificador, txtNombre, txtApellido, txtCorreo, txtCelular;
let tblContactos = document.getElementById('tblContactos');

let contacto = new Contactos();

let btnAgregar = document.getElementById('btnAgregar');
btnAgregar.addEventListener('click', agregarContacto);

let btnEliminar = document.getElementById('btnEliminar');
btnEliminar.addEventListener('click', eliminarContacto);

let btnModificar = document.getElementById('btnModificar');
btnModificar.addEventListener('click', modificarContacto);

let btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click', buscarContacto);  

function agregarContacto() {
    if (validarCampos()) {
        console.log("Saliendo de validar")
        contacto.agregar(txtIdentificador, txtNombre, txtApellido, txtCorreo, txtCelular);
        console.log(contacto);
        mostrarContactos();
    }
}

function eliminarContacto() {
    if (txtIdentificador !== "") {
        let identificador = document.getElementById('txtIdentificador').value;
        contacto.eliminar(identificador);
        mostrarContactos();
    }
}

function modificarContacto() {
    if (validarCampos()) {
        let identificador = document.getElementById('txtIdentificador').value;
        let nombre = document.getElementById('txtNombre').value;
        let apellido = document.getElementById('txtApellido').value;
        let correo = document.getElementById('txtCorreo').value;
        let celular = document.getElementById('txtCelular').value;
        contacto.modificar(identificador, nombre, apellido, correo, celular);
        mostrarContactos();
    }
}

function buscarContacto() {
    if (txtIdentificador !== "") {
        let identificador = document.getElementById('txtIdentificador').value;
        let cont = contacto.buscar(identificador);
        if (cont) {
            mostrarContactos();
        }
    }
}


function mostrarContactos() {
    tblContactos.innerHTML = "";
    document.getElementById('txtIdentificador').value = "";
    document.getElementById('txtNombre').value = "";
    document.getElementById('txtApellido').value = "";
    document.getElementById('txtCorreo').value = "";
    document.getElementById('txtCelular').value = "";
    console.log(txtNombre)
    console.log(contacto.getContactos());
    contacto.getContactos().forEach(contacto => {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${contacto.identificador}</td>
                        <td>${contacto.nombre}</td>
                        <td>${contacto.apellido}</td>
                        <td>${contacto.correo}</td>
                        <td>${contacto.celular}</td>`;
        tblContactos.appendChild(tr);
    });
}

function validarCampos() {
    txtIdentificador = document.getElementById('txtIdentificador').value;
    txtNombre = document.getElementById('txtNombre').value;
    txtApellido = document.getElementById('txtApellido').value;
    txtCorreo = document.getElementById('txtCorreo').value;
    txtCelular = document.getElementById('txtCelular').value;

    if (txtIdentificador === "" || txtNombre === "" || txtApellido === "" || txtCorreo === "" || txtCelular === "") {
        alert("Debes rellenar todos los campos");
        return false;
    }
    return true;
}   