//Exercicio 1

export function celsiusAFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}



// Exercício 2 (default export)


export default function generarSaludo(nombre, idioma) {
  switch (idioma) {
    case 'pt':
      return `Olá, ${nombre}`;
    case 'de':
      return `Hallo, ${nombre}`;
    case 'fr':
      return `Bonjour, ${nombre}`;
    default:
      return `Hola, ${nombre}`;
  }
}

//Exercicio 3 (calcular Q/C)

export function calcularAreaCuadrado(lado) {
  return lado * lado;
}

export function calcularAreaCirculo(radio) {
  return Math.PI * radio * radio;
}

//Exercicio 4 (Password)

export function validarPassword(password) {
  if (password.length >= 8) {
    return 'Seguridad: Fuerte';
  } else {
    return 'Seguridad: Débil';
  }
}

//Exercicio 5 (Contador com Limite)

export function incrementar(valorActual) {
  if (valorActual < 13) {
    return valorActual + 1;
  }
  return valorActual;
}

export function decrementar(valorActual) {
  if (valorActual > 0) {
    return valorActual - 1;
  }
  return valorActual;
}