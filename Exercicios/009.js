

function isValidMessage(message, validator) {
  const words = message.split(" ");
  if (words.length !== validator.length) return false;

  for (let i = 0; i < words.length; i++) {
    if (words[i][0].toLowerCase() !== validator[i].toLowerCase()) {
      return false;
    }
  }

  return true;
}

console.log(isValidMessage("hello world", "hw"))


/*

Dada uma string de mensagem e uma string de validação, determine se a mensagem é válida.

Uma mensagem é válida se cada palavra na mensagem começar com a letra correspondente na sequência de validação, nessa ordem.
As letras não diferenciam maiúsculas de minúsculas.
As palavras na mensagem são separadas por espaços simples.

*/