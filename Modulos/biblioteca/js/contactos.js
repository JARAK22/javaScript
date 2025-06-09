export default class Contactos {
    constructor() {
        this.contactos = [];
    }

    agregar(identificador, nombre, apellido, correo, celular) {
        this.contactos.push({
            identificador: identificador,
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            celular: celular
        });
    }

    eliminar(identificador) {
        this.contactos = this.contactos.filter(contacto => contacto.identificador !== identificador);
    }

    modificar(identificador, nombre, apellido, correo, celular) {
        this.contactos = this.contactos.map(contacto => {
            if (contacto.identificador === identificador) {
                contacto.nombre = nombre;
                contacto.apellido = apellido;
                contacto.correo = correo;
                contacto.celular = celular;
            }
            return contacto;
        });
    }

    buscar(identificador) {
        return this.contactos.find(contacto => contacto.identificador === identificador);
    }

    getContactos() {
        return this.contactos;
    }
}   