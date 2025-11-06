function getWeekday(dateString) {
    const dataAtual = new Date(dateString)
    const indexDia = dataAtual.getDay() + 1

    const nomesDias = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    return nomesDias[indexDia]
}

console.log(getWeekday("2025-11-06"))

/*

Dada uma data em formato de string YYYY-MM-DD, retorne o dia da semana.

Os dias válidos para devolução são:

"Sunday"
"Monday"
"Tuesday"
"Wednesday"
"Thursday"
"Friday"
"Saturday"
Certifique-se de ignorar os fusos horários.

*/