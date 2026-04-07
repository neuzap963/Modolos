import { celsiusAFahrenheit } from './utils.js';
import generarSaludo from './utils.js';
import { calcularAreaCuadrado, calcularAreaCirculo } from './utils.js';
import{validarPassword } from './utils.js';
import { incrementar, decrementar } from './utils.js';


// -------------EXERCICIO 1 -----------


const inputTemp = document.getElementById('temperatura');
const btnConvertir = document.getElementById('convertir');
const resultado = document.getElementById('resultado');

btnConvertir.addEventListener('click', () => {
  const celsius = parseFloat(inputTemp.value);

  if (isNaN(celsius)) {
    resultado.textContent = 'Por favor, introduce un número válido.';
    return;
  }

  const fahrenheit = celsiusAFahrenheit(celsius);
  resultado.textContent = `${celsius}°C = ${fahrenheit}°F`;
});


// ---------- EXERCÍCIO 2 ----------


const inputNombre = document.getElementById('nombre');
const selectIdioma = document.getElementById('idioma');
const btnSaludar = document.getElementById('saludar');
const resultadoSaludo = document.getElementById('resultadoSaludo');

btnSaludar.addEventListener('click', () => {
  const nombre = inputNombre.value.trim();
  const idioma = selectIdioma.value;

  if (nombre === '') {
    resultadoSaludo.textContent = 'Introduce un nombre.';
    return;
  }

  const saludo = generarSaludo(nombre, idioma);
  resultadoSaludo.textContent = saludo;
});


//----------------EXERCICIO 3 ---------------


// Cuadrado
const inputLado = document.getElementById('lado');
const btnCuadrado = document.getElementById('btnCuadrado');
const resultadoCuadrado = document.getElementById('resultadoCuadrado');

btnCuadrado.addEventListener('click', () => {
  const lado = parseFloat(inputLado.value);

  if (isNaN(lado)) {
    resultadoCuadrado.textContent = 'Introduce un número válido.';
    return;
  }

  const area = calcularAreaCuadrado(lado);
  resultadoCuadrado.textContent = `Área del cuadrado: ${area}`;
});


// Círculo
const inputRadio = document.getElementById('radio');
const btnCirculo = document.getElementById('btnCirculo');
const resultadoCirculo = document.getElementById('resultadoCirculo');

btnCirculo.addEventListener('click', () => {
  const radio = parseFloat(inputRadio.value);

  if (isNaN(radio)) {
    resultadoCirculo.textContent = 'Introduce un número válido.';
    return;
  }

  const area = calcularAreaCirculo(radio);
  resultadoCirculo.textContent = `Área del círculo: ${area.toFixed(2)}`;
});


// ---------- EXERCÍCIO 4 ----------


const inputPassword = document.getElementById('password');
const resultadoPassword = document.getElementById('resultadoPassword');

inputPassword.addEventListener('input', () => {
  const password = inputPassword.value;
  resultadoPassword.textContent = validarPassword(password);
});


// ---------- EXERCÍCIO 5 ----------


const btnDecrementar = document.getElementById('btnDecrementar');
const btnIncrementar = document.getElementById('btnIncrementar');
const valorContador = document.getElementById('valorContador');

let contador = 0;

btnIncrementar.addEventListener('click', () => {
  contador = incrementar(contador);
  valorContador.textContent = contador;
});

btnDecrementar.addEventListener('click', () => {
  contador = decrementar(contador);
  valorContador.textContent = contador;
});