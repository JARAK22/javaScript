// Primer ejercicio
function parImpar(){
  const num = parseInt(document.getElementById("numParImpar").value);
  const res = num % 2 === 0 ? "par" : "impar";
  document.getElementById("resParImpar").innerText = `El número es ${res}`;
}

// Segundo ejercicio
function verificarVotacion() {
  const edad = parseInt(document.getElementById("edadVotar").value);
  const tieneCedula = document.getElementById("tieneCedula").value === "si";
  const cedulaInscrita = document.getElementById("cedulaInscrita").value === "si";

  if (edad >= 18 && tieneCedula && cedulaInscrita) {
    document.getElementById("resVotar").textContent = "✅ Puede votar";
  } else {
    document.getElementById("resVotar").textContent = "❌ No puede votar";
  }
}

// Tercer ejercicio
function diaSemana(){
  let diasArr = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
  const dia = parseInt(document.getElementById("diaSemana").value);
  if (dia > 0 && dia <= 7){
    for (let i = 1; i <= dia; i ++){
      if (dia == i){
        return document.getElementById("resDia").innerText = diasArr[i - 1];
      }
    }
  }else {
    return document.getElementById("resDia").innerText = "Numero fuera de rango"
  }
}

// Cuarto ejercicio
function entradas(){
  const edad = parseInt(document.getElementById("edadEntrada").value);
  let precio;

  if (edad <= 5 || edad >= 60) {
    precio = 0;
  } else if (edad >= 6 && edad <= 17) {
    precio = 5000;
  } else {
    precio = 10000;
  }

  document.getElementById("resEntrada").innerText = `Precio: $${precio}`;
}

// Quinto ejercicio
function impuestoSalario() {
  const salario = parseFloat(document.getElementById("salario").value);

  let tazaImpuesto = 0;
  if (salario < 1000000) {
    tazaImpuesto = salario * 0.01;
    return document.getElementById("resImpuesto").innerText = "su impuesto a pagar es de " + tazaImpuesto.toFixed(2)
  } else if (salario >= 1000000 && salario <= 2000000) {
    tazaImpuesto = salario * 0.03;
    return document.getElementById("resImpuesto").innerText = "su impuesto a pagar es de " + tazaImpuesto.toFixed(2)
  } else if (salario > 2000000 && salario <= 4000000) {
    tazaImpuesto = salario * 0.05;
    return document.getElementById("resImpuesto").innerText = "su impuesto a pagar es de " + tazaImpuesto.toFixed(2)
  } else if (salario > 4000000 && salario <= 10000000) {
    tazaImpuesto = salario * 0.07;
    return document.getElementById("resImpuesto").innerText = "su impuesto a pagar es de " + tazaImpuesto.toFixed(2)
  } else {
    tazaImpuesto = salario * 0.1;
    return document.getElementById("resImpuesto").innerText = "su impuesto a pagar es de " + tazaImpuesto.toFixed(2)
  }
}

// Sexto ejercicio
function multiplosDeTres(){
  const a = parseInt(document.getElementById("multi3a").value);
  const b = parseInt(document.getElementById("multi3b").value);

  let inicio = 0
  let final = 0

  if (a > b){
    inicio = b
    final = a
  }else{
    inicio = a
    final = b
  }
  let resultado = ""
  for(let i = inicio; i <= final; i++){
    if(i % 3 == 0){
      resultado += `${i} es múltiplo de 3<br>`;
    }
  }
  document.getElementById("resMulti3").innerHTML = resultado || "No hay múltiplos de 3 en ese rango.";
}

// Septimo ejercicio
function primo(){
  const numPrimo = parseInt(document.getElementById("numPrimo").value);
  if (numPrimo < 2) return document.getElementById("resPrimo").innerText = "No es primo";
  for (let i = 2; i < numPrimo; i++){
    if (numPrimo % i == 0){
      return document.getElementById("resPrimo").innerText = "No es primo";
    }
  }
  return document.getElementById("resPrimo").innerText = "Es primo";
}

// Octavo ejercicio
function tablaMultiplicar(){
  let mostrar = ""
  for (let i = 5; i <= 9; i ++){
    for (let j = 0; j <= 10; j ++){
      let result = 0
      result = i * j
      mostrar += `${i} * ${j} = ${result}<br>`
    }
  }
  document.getElementById("resTablaMultiplicar").innerHTML = mostrar
}

// Noveno ejercicio
function numEntreUnoVeinte(){
  const numRepite = parseInt(document.getElementById("numRepeat").value)
  const strRepetir = document.getElementById("textoRepeat").value
  let resultado = ""
  for (let i = 0; i < numRepite; i ++){
    resultado += `${strRepetir}<br>`;
  }
  return document.getElementById("resNumEntreUnoVeinte").innerHTML = resultado;
}

// Decimo ejercicio
function factorial(num){
  if (num == 1){
    return 1
  }else{
    return num * factorial(num - 1)
  }
}
function factorialHandler() {
  const numFactorial = parseInt(document.getElementById("numFactorial").value);
  if (isNaN(numFactorial) || numFactorial < 0) {
    document.getElementById("resFactorial").innerHTML = "Por favor ingresa un número entero positivo.";
    return;
  }

  const resultado = factorial(numFactorial);
  document.getElementById("resFactorial").innerHTML = `El factorial de ${numFactorial} es ${resultado}.`;
}

// Onceavo ejercicio
function paresPromedioImpares(num1, num2){
  const aParImpar = parseInt(document.getElementById("parImp1").value);
  const bParImpar = parseInt(document.getElementById("parImp2").value);

  let inicio = Math.min(aParImpar, bParImpar);
  let final = Math.max(aParImpar, bParImpar);
  let sumaImpar = 0, contador = 0, sumaPares = 0
  
  for(let i = inicio; i <= final; i++){
    if(i % 2 == 0){
      sumaPares += i 
    }else {
      contador += 1 
      sumaImpar += i
    }
  }
  return document.getElementById("resParesImpares").innerHTML = `Suma pares: ${sumaPares}, Promedio impares: ${sumaImpar / contador}`
}

// Doceavo ejercicio
function hashFunction(){
  const numHash = parseInt(document.getElementById("numHash").value);
  let hash = "", resultado = ""
  for (let i = 0; i < numHash; i ++){
    hash += "# "
    resultado += `${hash}<br>`;
  }
  return document.getElementById("resHash").innerHTML = resultado;
}
