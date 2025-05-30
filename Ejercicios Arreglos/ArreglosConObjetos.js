// menu banco sena
const prompt = require("prompt-sync")();

let cuentas = [];

let continuar = true;

while (continuar) {
    console.log("========================")
    console.log(`=== BANCO ADSO ===`);
    console.log(`1. Crear Cuenta`)
    console.log(`2. Consignar Cuenta`)
    console.log(`3. Retirar Cuenta`)
    console.log(`4. Consultar Cuenta por Codigo`)
    console.log(`6. Listar Cuentas`)
    console.log(`7. Salir`)
    console.log("========================")

    let opcion = prompt("Opcion: ");

    switch (opcion) {
        case "1":
            crearCuenta();
            break;
        case "2":
            consignarCuenta();
            break;
        case "3":
            retirarCuenta();
            break;
        case "4":
            consultarCuentaPorCodigo();
            break;
        case "6":
            listarCuentas();
            break;
        case "7":
            continuar = false;
            break;
        default:
            console.log("Opcion no valida");
            break;
    }
}

function crearCuenta() {
    let nombre = prompt("Nombre: ");
    let codigo = prompt("Codigo: ");
    let saldo = parseInt(prompt("Saldo: "));

    cuentas.push({
        nombre: nombre,
        codigo: codigo,
        saldo: saldo
    });
    console.log("========================")
    console.log("Cuenta creada con Exito");
    console.log(`Nombre: ${nombre}`);
    console.log(`Codigo: ${codigo}`);
    console.log(`Saldo: ${saldo}`);
    console.log("========================")
}

function consignarCuenta() {
    let codigo = prompt("Codigo de la cuenta a consignar: ");
    let cantidad = parseInt(prompt("Cantidad a consignar: "));

    let cuenta = buscarCuentaPorCodigo(codigo);

    if (cuenta) {
        cuenta.saldo += cantidad;

        console.log("========================")
        console.log("Cuenta consignada con exito");
        console.log(`Nombre: ${cuenta.nombre}`);
        console.log(`Codigo: ${cuenta.codigo}`);
        console.log(`Saldo: ${cuenta.saldo}`);
        console.log("========================")
    } else {
        console.log("Cuenta no encontrada");
    }
}

function retirarCuenta() {
    let codigo = prompt("Codigo de la cuenta a retirar: ");
    let cantidad = parseInt(prompt("Cantidad a retirar: "));

    let cuenta = buscarCuentaPorCodigo(codigo);

    if (cuenta) {
        cuenta.saldo -= cantidad;

        console.log("========================")
        console.log("Cuenta retirada con exito");
        console.log(`Nombre: ${cuenta.nombre}`);
        console.log(`Codigo: ${cuenta.codigo}`);
        console.log(`Saldo: ${cuenta.saldo}`);
        console.log("========================")
    } else {
        console.log("Cuenta no encontrada");
    }
}

function consultarCuentaPorCodigo() {
    let codigo = prompt("Codigo de la cuenta a consultar: ");

    let cuenta = buscarCuentaPorCodigo(codigo);

    if (cuenta) {
        console.log("========================")
        console.log("Cuenta consultada con exito");
        console.log(`Nombre: ${cuenta.nombre}`);
        console.log(`Codigo: ${cuenta.codigo}`);
        console.log(`Saldo: ${cuenta.saldo}`);
        console.log("========================")
    } else {
        console.log("Cuenta no encontrada");
    }
}

function listarCuentas() {
    console.log("========================")
    console.log("Cuentas listadas:");

    cuentas.forEach(cuenta => {
        console.log(`Nombre: ${cuenta.nombre}`)
        console.log(`Codigo: ${cuenta.codigo}`)
        console.log(`Saldo: ${cuenta.saldo}`)
    });
    console.log("========================")
}

function buscarCuentaPorCodigo(codigo) {
    let cuenta = cuentas.find(cuenta => cuenta.codigo === codigo);
    return cuenta;
}