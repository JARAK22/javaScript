import { readFile } from 'fs/promises';
import prompt from 'prompt-sync';

// en el rango
function enRango(num) {
    if (num >= 10 && num <= 50) {
        return "Esta en el rango"
    } else {
        return "Esta fuera del rango"
    }
}

// Calcular descuento
function calcularDescuento(precio) {
    if (precio > 1000) {
        return "Descuento de 20%"
    } else if (precio >= 500 && precio <= 1000) {
        return "Descuento de 10%"
    } else {
        return "Sin descuento"
    }
}

// Categoria IMC (Indice de masa corporal)
function categoriaIMC(IMC) {
    if (IMC < 18.5) {
        return "Peso muy bajo"
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        return "Peso normal"
    } else if (IMC >= 25 && IMC <= 29.9) {
        return "Sobrepeso"
    } else {
        return "Obesidad"
    }
}

// Nivel de riesgo
function nivelRiesgo(edad) {
    if (edad < 18) {
        return "Nivel bajo"
    } else if (edad >= 18 && edad <= 35) {
        return "Nivel medio"
    } else if (edad >= 36 && edad <= 55) {
        return "Nivel alto"
    } else {
        return "Nivel muy alto"
    }
}

// Año bisiesto
function anioBisiesto(anio) {
    if (anio % 4 === 0 && anio % 100 !== 0 || anio % 400 === 0) {
        return "Es un año bisiesto"
    } else {
        return "No es un año bisiesto"
    }
}

// Es elejible para un prestamo
function elegiblePrestamo(salario, puntajeCredito) {
    if (salario >= 3000000 && puntajeCredito >= 650) {
        return "Elegible para préstamo"
    } else {
        return "No elegible para préstamo"
    }
}

// Libros

const data = await readFile('./json/Libros.json', 'utf-8');
const libros = JSON.parse(data);

function consultarLibrosPorPalabraClave(palabra){
    let librosFiltrados = []
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].titulo.toLowerCase().includes(palabra.toLowerCase())){
            librosFiltrados.push(libros[i])
        }
    }
    return librosFiltrados
}

function consultarNumeroDePaginas(){
    let arrLibros = []
    for (let i = 0; i < libros.length; i++) {
        arrLibros.push({titulo: libros[i].titulo, paginas: libros[i].paginas})
    }
    return arrLibros
}

export {
    enRango,
    calcularDescuento,
    categoriaIMC,
    nivelRiesgo,
    anioBisiesto,
    elegiblePrestamo,
    consultarLibrosPorPalabraClave,
    consultarNumeroDePaginas
}