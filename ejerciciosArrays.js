// Encontrar el nombre de una sociedad secreta segun los datos de los nombres para cada integrante
// secretName(["Felipe", "Fer", "Zabdiel"]) -> FFZ
// secretName(['Phoebe', 'Ross', 'Chandler', 'Joey', 'Monica', 'Rachel']) -> CJMPRR
// secretName(['Harry', 'Ron', 'Hermione']) -> HHR

function sociedadSecreta(nombres) {
    let sociedadSecreta = "";
  
    for (let i = 0; i < nombres.length; i++) {
      sociedadSecreta += nombres[i][0];
    }
  
    return sociedadSecreta;
  }
  var nombres = ["Felipe", "Fer", "Zabdiel"];
console.log(sociedadSecreta(nombres)); 






// Crear una funcion que tome 2 parametros, (numero, longitud) y regrse un array de longitud cantidad de numeros multiplos del numero por parametro
// arrayMultiplos(2, 10) -> [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// arrayMultiplos(17, 6) -> [17, 34, 51, 68, 85, 102]

function arrayMultiplos(numero, longitud) {
  let resultado = [];

  for (let i = 1; resultado.length < longitud; i++) {
    if (i % numero === 0) {
      resultado.push(i);
    }
  }

  return resultado;
}

console.log(arrayMultiplos(2,10))




// Escrbir una funcion que descubra si el array es dominante positivo
// Un array es positivo dominante cuando la mayoria de sus elementos son positivos -> [1, -2, 55, 10]
// positiveDom([-1, -3, -5, 4, 6767]) -> false

function positiveDom(array) {
  let positivos = 0;
  let negativos = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      positivos++;
    } else if (array[i] < 0) {
      negativos++;
    }
  }

  return positivos > negativos;
}

console.log(positiveDom([-1,-3,-5,4,6767]))

// Promedio antipode
// Dado un array, devolver un array de menor longitud de acuerdo a los siguentes pasos:
// - Dividir el array en 2 partes iguales*. Si no son iguales, eliminar el elemento en medio para obtener 2 arrays iguales
// - Sumar cada numero de la primera parte con los numeros inversos de la segunda parte
// [1,2,3] [5,22,6] -> 1 + 6, 2 + 22, 3 + 5 -> [7, 24, 8]
// function sumarArrays(arr1, arr2) {
  function sumarArrays(arr1, arr2) {
    const resultado = [];
  
    for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
      resultado.push(arr1[i] + arr2[arr2.length - 1 - i]);
    }
  
    return resultado;
  }
const arr1 = [1,2,3];
const arr2 = [5,22,6];
const resultado = sumarArrays(arr1,arr2);
console.log(resultado)