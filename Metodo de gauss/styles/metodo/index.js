function gauss(a, b) {
  var n = a.length;
  for (var i = 0; i < n; i++) {
    var maxEl = Math.abs(a[i][i]),
      maxRow = i;
    for (var k = i + 1; k < n; k++) {
      if (Math.abs(a[k][i]) > maxEl) {
        maxEl = Math.abs(a[k][i]);
        maxRow = k;
      }
    }
    for (var k = i; k < n + 1; k++) {
      var tmp = a[maxRow][k];
      a[maxRow][k] = a[i][k];
      a[i][k] = tmp;
    }
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
  var x = new Array(n);
  for (var i = n - 1; i > -1; i--) {
    x[i] = a[i][n] / a[i][i];
    for (var k = i - 1; k > -1; k--) {
      a[k][n] -= a[k][i] * x[i];
    }
  }
  return x;
}

//Ejemplo de uso
var a = [
  [4, 3, 2, 1, 10],
  [5, 4, 3, 2, 20],
  [1, 2, 3, 4, 30],
  [1, 2, 1, 2, 20],
];
var result = gauss(a);
console.log("x1 = " + result[0]);
console.log("x2 = " + result[1]);
console.log("x3 = " + result[2]);
console.log("x4 = " + result[3]);
