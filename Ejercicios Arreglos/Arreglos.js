const prompt = require('prompt-sync')(); // Para leer datos en consola (Node.js)

// Ingreso de numeros
function ingresarNumerosArr() {
    let numeros = [];
    while (true) {
        console.log("ingresa la opcion S para ingresar otro numero o N para salir")
        let opcion = prompt("Opcion: ");
        if (opcion.toLowerCase() === "s"){
            console.log("Ingresa un numero");
            let numero = parseInt(prompt("Numero: "));
            numeros.push(numero);
        } else {
            break;
        }
    }
    return numeros
}

// Ingreso de palabras
function ingresarPalabrasArr() {
    let palabras = [];
    while (true) {
        console.log("ingresa la opcion S para ingresar otra palabra o N para salir")
        let opcion = prompt("Opcion: ");
        if (opcion.toLowerCase() === "s"){
            console.log("Ingresa una palabra");
            let palabra = prompt("Palabra: ");
            palabras.push(palabra);
        } else {
            break;
        }
    }
    return palabras
}

// Primer ejercicio
function mejorValor(min, max) {
    let zMejor = 0, xMayor = 0, yMayor = 0
    for (let index = 0; index < 100; index++) {
        let x = Math.floor(Math.random() * (max - min + 1)) + min;
        let y = Math.floor(Math.random() * (max - min + 1)) + min;
        let z = (x * x + y * y);
        if (z > zMejor){
            zMejor = z
            xMayor = x
            yMayor = y
        }
    }
    return (`Z = X² + Y² = ${zMejor} = ${xMayor}² + ${yMayor}²`)
}
console.log("================")
console.log("Mejor Valor de Z")
console.log(mejorValor(-5, 5))
console.log("================\n")

// Segundo ejercicio
function generadorContrasena() {
    let mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let minus = 'abcdefghijklmnopqrstuvwxyz';
    let digitos = '0123456789';
    let simbolos = '@#$%&()=?Â¿*+[]{}';   
    let array = [mayus, minus, digitos, simbolos]
    let password = ""
    for (let i = 0; i < array.length; i ++){
        let pAleatorio = array[i][Math.floor(Math.random() * array[i].length)];
        let sAleatorio = array[i][Math.floor(Math.random() * array[i].length)];
        password += pAleatorio + sAleatorio
    }
    return password
    
}
console.log("========================")
console.log("Generador de contraseñas")
console.log(generadorContrasena())
console.log("========================\n")

// Tercer ejercicio
function areaCirculo(r) {
    return (Math.PI * Math.pow(r, 2)).toFixed(2)
}
console.log("=======================================")
console.log("Area de un circulo")
let radio = prompt("Ingresa el radio de un circulo: ")
console.log(areaCirculo(radio))
console.log("=======================================\n")

// Cuarto ejercicio
function cantidadVocales(str) {
    let vocalesEncontradas = 0
    let vocales = ["a", "e", "i", "o", "u"]

    for (let i = 0; i < str.length; i ++){
        for (let j = 0; j < vocales.length; j ++){
            if (str[i].toLowerCase() == vocales[j]) {
                vocalesEncontradas ++
            }
        }
    }
    
    return vocalesEncontradas
}
console.log("===================")
console.log("Cantidad de vocales")
let palabra = prompt("Ingresa una palabra: ")
console.log(cantidadVocales(palabra))
console.log("===================\n")

// Quinto ejercicio
function numerosPares(arr) {
    let numerosParesCant = 0

    for (let i = 0; i < arr.length; i ++){
        if (arr[i] % 2 == 0){
            numerosParesCant ++
        }
    }
    
    return `hay ${numerosParesCant} numeros pares`
}
console.log("============================")
console.log("Numerors pares de un arreglo")
console.log(numerosPares(ingresarNumerosArr()))
console.log("============================\n")

// Sexto ejercicio
function sumaArreglo(arr) {
    let sumaValores = 0

    for (let i = 0; i < arr.length; i ++){
        sumaValores += arr[i]
    }
    
    return sumaValores
}
console.log("=============================")
console.log("Suma de valores de un arreglo")
console.log(sumaArreglo(ingresarNumerosArr()))
console.log("=============================\n")

// Septimo ejercicio
function mayorValor(arr) {
    let mayor = -Infinity

    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > mayor){
            mayor = arr[i]
        }
    }
    
    return mayor
}
console.log("=========================")
console.log("Mayor valor de un arreglo")
console.log(mayorValor(ingresarNumerosArr()))
console.log("=========================\n")

// Octavo ejercicio
function cantidadPalabras(str) {
    let palabras = 1

    for (let i = 0; i < str.length; i ++){
        if (str[i] == " "){
            palabras ++
        }
    }
    
    return palabras
}
console.log("=================")
console.log("Cantidad palabras")
let palabras = prompt("Ingresa una cadena de palabras: ")
console.log(cantidadPalabras(palabras))
console.log("=================\n")

// Noveno ejercicio
function invertidoArr(arr) {
    let invertido = []

    for (let i = arr.length -1; i >= 0; i--) {
        invertido.push(arr[i])
    }
    return invertido
}
console.log("===============")
console.log("Array invertido")
console.log(invertidoArr(ingresarNumerosArr()))
console.log("===============\n")

// Decimo ejercicio
function duplicados(arr) {
    let sinDuplicar = [arr[0]]
    for (let i = 0; i < arr.length; i++) {
      let existe = true
        for (let j = 0; j < sinDuplicar.length; j++) {
            if (arr[i] == sinDuplicar[j]) {
                existe = false
            }
        }
        if (existe){
          sinDuplicar.push(arr[i])
        }
    }
    return sinDuplicar
}
console.log("===================")
console.log("Eliminar duplicados")
console.log(duplicados(ingresarNumerosArr()))
console.log("===================\n")

// Onceavo ejercicio
function nombresMayusculas(arr) {
    let arrMayuscula = []
    for (let i = 0; i < arr.length; i++) {
        arrMayuscula.push(arr[i].toUpperCase())
    }
    return arrMayuscula
}
console.log("==================")
console.log("Nombres mayusculas")
console.log(nombresMayusculas(ingresarPalabrasArr()))
console.log("==================\n")

// Doceavo ejercicio
function valorIndex(arr, valor) {
    let posicion = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            posicion = i
        }
    }
    return posicion
}
console.log("=========================")
console.log("Valor index de un arreglo")
console.log(valorIndex(ingresarNumerosArr(), parseInt(prompt("Ingresa el valor a buscar: "))))
console.log("=========================")

// Treceavo ejercicio
function remplazarValor(arr, valor, remplazo) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            arr[i] = remplazo
        }
    }
    return arr
}
console.log("==============================")
console.log("Remplazo por valor de un array")
console.log(remplazarValor(ingresarNumerosArr(), parseInt(prompt("Ingresa el valor a remplazar: ")), parseInt(prompt("Ingresa el valor a remplazar por: "))))
console.log("==============================\n")

// Catorceavo ejercicio
function promedioArr(arr) {
    let promedio = 0
    let suma = 0
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]
    }
    promedio = suma / arr.length 
    return promedio 
}
console.log("====================")
console.log("Promedio de un array")
console.log(promedioArr(ingresarNumerosArr()))
console.log("====================\n")

// Quinceavo ejercicio 
let votosTotales = 0;
let votosUno = 0;
let votosDos = 0;
let votosTres = 0;
let votosBlanco = 0;

const maxVotantes = 50;
const clavePresidente = "1234";

console.log("=== MENU ELECCIONES 2025 ===");

while (votosTotales < maxVotantes) {
    console.log(`
1. Candidato Uno
2. Candidato Dos
3. Candidato Tres
4. Voto en Blanco
5. Cerrar elecciones (clave)
    `);

    let opcion = prompt("Seleccione una opción: ");

    if (opcion === "1") {
        votosUno++;
        votosTotales++;
    } else if (opcion === "2") {
        votosDos++;
        votosTotales++;
    } else if (opcion === "3") {
        votosTres++;
        votosTotales++;
    } else if (opcion === "4") {
        votosBlanco++;
        votosTotales++;
    } else if (opcion === "5") {
        let clave = prompt("Ingrese la clave para cerrar elecciones: ");
        if (clave === clavePresidente) {
            console.log("? Elecciones cerradas por el presidente de mesa.");
            break;
        } else {
            console.log("? Clave incorrecta. Continúan las votaciones.");
        }
    } else {
        console.log("?? Opción no válida. Intente de nuevo.");
    }

    console.log(`Votos registrados: ${votosTotales}/${maxVotantes}`);
}
console.log("==========================")
console.log("=== RESULTADOS FINALES ===");
console.log(`Personas que votaron: ${votosTotales}`);
console.log(`Candidato Uno: ${votosUno} votos`);
console.log(`Candidato Dos: ${votosDos} votos`);
console.log(`Candidato Tres: ${votosTres} votos`);
console.log(`Votos en Blanco: ${votosBlanco}`);
console.log("==========================")