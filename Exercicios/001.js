function buildMatrix(rows, cols) {
  let array = []
  for (let i = 0; i < rows; i++) {
    array[i] = []

    for (let a = 0; a < cols; a++) {
      array[i][a] = 0
    }
  }
  return array;
}

console.log(buildMatrix(1, 4))


/*
Dados dois números inteiros (um número de linhas e um número de colunas), retorne uma matriz (um array de arrays) preenchida com zeros ( 0) do tamanho fornecido.

Por exemplo, dados 2 e 3, retorne:

[
  [0, 0, 0],
  [0, 0, 0]
]
*/