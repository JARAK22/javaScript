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
    return (`Z = XÂ² + YÂ² = ${zMejor} = ${xMayor}Â² + ${yMayor}Â²`)
}
console.log(mejorValor(-5, 5))

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
console.log(generadorContrasena())

// Tercer ejercicio
function areaCirculo(r) {
    return (Math.PI * Math.pow(r, 2)).toFixed(2)
}
console.log(areaCirculo(2))

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
console.log(cantidadVocales("Jaider"))

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
console.log(numerosPares([2,3,6,8,9,10,23]))

// Sexto ejercicio
function sumaArreglo(arr) {
    let sumaValores = 0

    for (let i = 0; i < arr.length; i ++){
        sumaValores += arr[i]
    }
    
    return sumaValores
}
console.log(sumaArreglo([2,3,6,8,9,10,23]))

// Septimo ejercicio
function sumaArreglo(arr) {
    let mayor = -Infinity

    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > mayor){
            mayor = arr[i]
        }
    }
    
    return mayor
}
console.log(sumaArreglo([2,3,6,8,9,10,23]))

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
console.log(cantidadPalabras("Jaider Andres Cifuentes hola mundo"))

// Noveno ejercicio
function invertidoArr(arr) {
    let invertido = []

    for (let i = arr.length -1; i >= 0; i--) {
        invertido.push(arr[i])
    }
    return invertido
}
console.log(invertidoArr([1,2,3,4,5,6,7,8,9]))

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
console.log(duplicados([1,2,2,4,5,6,1,6,9,3]))

// Onceavo ejercicio
function nombresMayusculas(arr) {
    let arrMayuscula = []
    for (let i = 0; i < arr.length; i++) {
        arrMayuscula.push(arr[i].toUpperCase())
    }
    return arrMayuscula
}
console.log(nombresMayusculas(["jaider", "andres", "juan", "camilo"]))

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
console.log(valorIndex(["jaider", "andres", "juan", "camilo"], "juan"))

// Treceavo ejercicio
function valorIndex(arr, valor, remplazo) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            arr[i] = remplazo
        }
    }
    return arr
}
console.log(valorIndex(["jaider", "andres", "juan", "camilo"], "juan", "cifuentes"))

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
console.log(promedioArr([1,2,3,4,5,6,7,8,9]))

// Quinceavo ejercicio 
const prompt = require('prompt-sync')(); // Para leer datos en consola (Node.js)

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

console.log("\n=== RESULTADOS FINALES ===");
console.log(`Personas que votaron: ${votosTotales}`);
console.log(`Candidato Uno: ${votosUno} votos`);
console.log(`Candidato Dos: ${votosDos} votos`);
console.log(`Candidato Tres: ${votosTres} votos`);
console.log(`Votos en Blanco: ${votosBlanco}`);
