function gauss(a, b) {
  // Obtiene el número de ecuaciones
  var n = a.length;

  // Realiza el escalonamiento
  for (var i = 0; i < n; i++) {
    // Encuentra el elemento máximo en la columna actual
    var maxEl = Math.abs(a[i][i]),
      maxRow = i;
    for (var k = i + 1; k < n; k++) {
      if (Math.abs(a[k][i]) > maxEl) {
        maxEl = Math.abs(a[k][i]);
        maxRow = k;
      }
    }
    // Intercambia la fila actual con la fila que contiene el elemento máximo
    for (var k = i; k < n + 1; k++) {
      var tmp = a[maxRow][k];
      a[maxRow][k] = a[i][k];
      a[i][k] = tmp;
    }
    // Realiza la eliminación
    for (k = i + 1; k < n; k++) {
      var c = -a[k][i] / a[i][i];
      for (var j = i; j < n + 1; j++) {
        if (i === j) {
          a[k][j] = 0;
        } else {
          a[k][j] += c * a[i][j];
        }
      }
    }
  }

  // Realiza la sustitución hacia atrás
  var x = new Array(n);
  for (var i = n - 1; i > -1; i--) {
    x[i] = a[i][n] / a[i][i];
    for (var k = i - 1; k > -1; k--) {
      a[k][n] -= a[k][i] * x[i];
    }
  }

  // Devuelve el vector con las soluciones x
  return x;
}

let a;

function datos() {
  let a = [];

  //   // Itera 15 veces para obtener los valores de los elementos del arreglo
  for (let i = 1; i <= 20; i++) {
    // Agrega el valor del elemento con id "n[i]" como número flotante
    a.push(parseFloat(document.getElementById(`n${i}`).value));
  }

  // Reorganiza los elementos del arreglo en una matriz 4x5
  a = [
    [a[0], a[1], a[2], a[3], a[4]],
    [a[5], a[6], a[7], a[8], a[9]],
    [a[10], a[11], a[12], a[13], a[14]],
    [a[15], a[16], a[17], a[18], a[19]],
  ];

  // Imprime la matriz en la consola
  console.log(a);

  // Resuelve el sistema de ecuaciones utilizando el método de Gauss
  var result = gauss(a);

  // Imprime los resultados de x1, x2, x3 y x4 en la consola
  console.log(result);
  console.log(`x2 = ${result[0]}`);
  console.log(`x3 = ${result[1]}`);
  console.log(`x4 = ${result[2]}`);
  console.log(`x4 = ${result[3]}`);

  //  Actualiza los elementos HTML con los resultados de x1, x2, x3 y x4
  document.getElementById("x").innerHTML = `x = ${result[0]}`;
  document.getElementById("y").innerHTML = `y = ${result[1]}`;
  document.getElementById("z").innerHTML = `z = ${result[2]}`;
  document.getElementById("u").innerHTML = `u = ${result[3]}`;
}
