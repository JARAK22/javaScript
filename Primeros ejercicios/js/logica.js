// primer ejercicio
function calPrecioTotal() {
  let precio = parseInt(document.getElementById("precio").value)
  let iva = parseInt(document.getElementById("iva").value)

  if (precio && iva) {
    let totalPrecio = precio + (precio * iva) / 100
    document.getElementById("totalPre").innerHTML =
      "El precio total a pagar es de: " + "$" + totalPrecio
  } else {
    alert("Por favor llena ambos campos.")
  }
}

// Segundo ejercicio
function perimetoCuadrado() {
  let ladoCuadrado = parseInt(document.getElementById("LCuadrado").value)
  if (ladoCuadrado) {
    let area = ladoCuadrado * ladoCuadrado
    let perimetro = ladoCuadrado * 4
    document.getElementById("pCuadrado").innerHTML =
      "El perimetro del cuadrado es: " + perimetro
    document.getElementById("aCuadrado").innerHTML =
      "El area del cuadrado es: " + area
  } else {
    alert("Por favor llena ambos campos.")
  }
}

// Tercer ejercicico
function nombreUsuario() {
  let nombre = document.getElementById("usurio").value
  if (nombre) {
    document.getElementById("textNombre").innerHTML = "Hola " + nombre + "!"
  } else {
    alert("Por favor llena ambos campos.")
  }
}

// Cuarto ejercicio
function valorMedio() {
  let num1 = parseInt(document.getElementById("numero1").value)
  let num2 = parseInt(document.getElementById("numero2").value)
  let num3 = parseInt(document.getElementById("numero3").value)
  if (num1 && num2 && num3) {
    /*if (num1 > num2 && num1 < num3) {
      document.getElementById("numeroMedio").innerHTML =
        "El valor del medio es: " + num1
    } else if (num2 > num1 && num2 < num3) {
      document.getElementById("numeroMedio").innerHTML =
        "El valor del medio es: " + num2
    }else {
      document.getElementById("numeroMedio").innerHTML =
      "El valor del medio es: " + num3
    }*/
    let media = (num1 + num2 + num3) / 3;
    document.getElementById("numeroMedio").innerHTML =
        "La media de los tres numeros es: " + media
  } else {
    alert("Por favor llena ambos campos.")
  }
}

// Quinto ejercicicio
function consumoCombustible() {
  let kilometros = parseInt(document.getElementById("km").value)
  let gasolina = parseInt(document.getElementById("litros").value)
  if (kilometros && gasolina) {
    let totalCosumo = gasolina / kilometros;
    document.getElementById("consumido").innerHTML = "El consumo de combustible por kilómetros es de: " + totalCosumo
  } else {
    alert("Por favor llena ambos campos.")
  }
}

// Sexto ejercicio
function convertirHM() {
  let horas = parseInt(document.getElementById("seconsH").value)
  let minutos = parseInt(document.getElementById("seconsM").value)
  if (horas && minutos) {
    let segundosHoras = horas * 60 * 60;
    let segundosMinutos = minutos * 60;
    document.getElementById("sHoras").innerHTML = "Horas a segundos: " + segundosHoras + " Segundos";
    document.getElementById("sMinutos").innerHTML = "Minutos a segundos: " + segundosMinutos + " Segundos";
  } else {
    alert("Por favor llena ambos campos.")
  }
}

// Septimo ejercicio
function decenasUnidades() {
  let numero = parseInt(document.getElementById("numero").value)
  if (numero) {
    let decenas = Math.floor(numero / 10);
    let unidades = numero % 10;
    document.getElementById("decenas").innerHTML = `${decenas} decenas`
    document.getElementById("unidades").innerHTML = `${unidades} decenas`
  } else {
    alert("Por favor llena ambos campos.")
  }
}

// Octavo ejercicio
function cantidadIgredientes() {
  let personas = parseInt(document.getElementById("personas").value)
  if (personas) {
    let papaGramos = personas * 200;
    let cebollasGramos = (300 / 1000) * papaGramos;
    let huevos = papaGramos / 1000 * 5;
    document.getElementById("tortaPapa").innerHTML = `Se necesitan ${papaGramos} gramos de papa, ${huevos} huevos y ${cebollasGramos} gramos de cebolla`;
  } else {
    alert("Por favor llena ambos campos.")
  }
}

// Noveno ejercicio
function cambioVariable() {
  let input1 = document.getElementById("valor1");
  let input2 = document.getElementById("valor2");

  // Valores como números
  let valor1 = parseInt(input1.value);
  let valor2 = parseInt(input2.value);

  if (!isNaN(valor1) && !isNaN(valor2)) {
    // Intercambio de valores
    let temporal = valor1;
    input1.value = valor2;
    input2.value = temporal;
  } else {
    alert("Por favor llena ambos campos con números.");
  }
}

// Decimo ejercicio
function parImpar() {
  let numParImpar = parseInt(document.getElementById("parImpar").value);

  // Valores como números
  if (!isNaN(numParImpar)) {
    // Intercambio de valores
    let resultado = numParImpar % 2 === 0;
    document.getElementById("resultadoParImpar").innerHTML = `${numParImpar} es ${resultado}`
  } else {
    alert("Por favor llena ambos campos con números.");
  }
}