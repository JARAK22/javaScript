import { Alcancia } from "./Alcancia.js";

const alcancia = new Alcancia();

let docientos = document.getElementById("docientos");
let quinientos = document.getElementById("quinientos");
let mil = document.getElementById("mil");
let resultado = document.getElementById("resultado");

let agregar = document.getElementById("agregar");
agregar.addEventListener("click", () => {
  let docientosValor = parseInt(docientos.value);
  let quinientosValor = parseInt(quinientos.value);
  let milValor = parseInt(mil.value);

  if (isNaN(docientosValor) || isNaN(quinientosValor) || isNaN(milValor)) {
    resultado.value = "Ingrese valores numéricos";
  } else {
    alcancia.setDocientos(docientosValor);
    alcancia.setQuinientos(quinientosValor);
    alcancia.setMil(milValor);
    resultado.value = `
    Docientos: ${alcancia.getDocientos()}
    Quinientos: ${alcancia.getQuinientos()}
    Mil: ${alcancia.getMil()}
    `;
  }
});

let calcular = document.getElementById("calcular");
calcular.addEventListener("click", () => {
  resultado.value = `Total: ${alcancia.calcularTotal()}`;
});

let docientosCantidad = document.getElementById("docientosCantidad");
docientosCantidad.addEventListener("click", () => {
  resultado.value = `Cantidad de 200: ${alcancia.getDocientos() * 200}`;
});

let quinientosCantidad = document.getElementById("quinientosCantidad");
quinientosCantidad.addEventListener("click", () => {
  resultado.value = `Cantidad de 500: ${alcancia.getQuinientos() * 500}`;
});

let milCantidad = document.getElementById("milCantidad");
milCantidad.addEventListener("click", () => {
  resultado.value = `Cantidad de 1000: ${alcancia.getMil() * 1000}`;
});

let vaciar = document.getElementById("vaciar");
vaciar.addEventListener("click", () => {
  alcancia.vaciar();
  resultado.value = "";
});