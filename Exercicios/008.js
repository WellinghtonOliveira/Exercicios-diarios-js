function daysUntilWeekend(dateString) {
  const date = new Date(dateString)
  const day = date.getUTCDay() // garante que não usa timezone local

  // 0 = domingo, 6 = sábado
  if (day === 0 || day === 6) {
    return "It's the weekend!"
  }

  const daysLeft = 6 - day
  const label = daysLeft === 1 ? "day" : "days"

  return `${daysLeft} ${label} until the weekend.`
}


console.log(daysUntilWeekend("2025-11-16"))


/*

Dada uma data no formato "YYYY-MM-DD", retorne o número de dias restantes até o fim de semana.

O fim de semana começa no sábado.
Se a data fornecida for sábado ou domingo, retorne "It's the weekend!".
Caso contrário, retorne "X days until the weekend.", onde Xé o número de dias até sábado.
Se Xfor 1, use "day"(singular) em vez de "days"(plural).
Certifique-se de que o cálculo ignore seu fuso horário local.

*/