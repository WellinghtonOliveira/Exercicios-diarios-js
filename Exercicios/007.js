function shiftArray(arr, n) {
  const len = arr.length;
  if (len === 0) return arr; // caso array vazio

  // Normaliza o deslocamento (pra não ultrapassar o tamanho)
  n = n % len;

  // Se for positivo, desloca pra esquerda
  if (n > 0) {
    return arr.slice(n).concat(arr.slice(0, n));
  }

  // Se for negativo, desloca pra direita
  if (n < 0) {
    return arr.slice(n).concat(arr.slice(0, n));
  }

  // Se n for 0, retorna igual
  return arr;
}


console.log(shiftArray([1, 2, 3], 1))











/*

Dado um array e um número inteiro que representa quantas posições o array deve ser deslocado, retorne o array deslocado.

Um número inteiro positivo desloca a matriz para a esquerda.
Um número inteiro negativo desloca a matriz para a direita.
O deslocamento percorre toda a matriz.
Por exemplo, dados [1, 2, 3]e 1, desloque o array 1 para a esquerda, retornando [2, 3, 1].



*/