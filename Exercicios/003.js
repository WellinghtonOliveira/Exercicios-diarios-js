

function combinations(cards) {
  const n = 52; // total de cartas no baralho
  const k = cards; // número de cartas escolhidas

  // 1️⃣ Função para calcular fatorial
  function factorial(num) {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  // 2️⃣ Aplicar a fórmula: C(n, k) = n! / (k! * (n - k)!)
  const result = factorial(n) / (factorial(k) * factorial(n - k));

 
  // 3️⃣ Retornar o valor final
  return result;
}


console.log(combinations(10))

/*

Um baralho padrão de cartas tem 13 cartas únicas em cada naipe. Dado um número inteiro que representa a quantidade de cartas a serem escolhidas do baralho, retorne o número de combinações únicas de cartas que você pode escolher.

A ordem não importa. Selecionar a carta A e depois a carta B é o mesmo que selecionar a carta B e depois a carta A.
Por exemplo, dado 52, retorne 1. Há apenas uma combinação de 52 cartas para escolher de um baralho de 52 cartas. E dado 2, retorne 1326. Há 1326 combinações de cartas que você pode obter ao escolher 2 cartas do baralho.



*/