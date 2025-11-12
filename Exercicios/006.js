function verify(message, key, signature) {
    const letras = Array.from({ length: 26 }, (v, i) => String.fromCharCode(97 + i))

    let strTotal = message + key
    let soma = 0

    for (let i = 0; i < strTotal.length; i++) {
        for (let a = 0; a < letras.length; a++) {

            if (strTotal[i] == letras[a]) soma += (a + 1)
            else if (strTotal[i] == letras[a].toUpperCase()) soma += (a + 27)

        }
    }

    return soma == signature ? true : false
}

console.log(verify("foo", "bar", 57))



/*

Dada uma string de mensagem, uma string de chave secreta e um número de assinatura, determine se a assinatura é válida usando este método de codificação:

As letras na mensagem e na chave secreta têm os seguintes valores:
ater zvalores 1respectivamente 26.
Ater Zvalores 27respectivamente 52.
Todos os outros caracteres não têm valor.
Calcule a assinatura somando a mensagem com a soma da chave secreta.
Por exemplo, dadas a mensagem "foo"e a chave secreta "bar", a assinatura seria 57:

f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57
Verifique se a assinatura calculada corresponde à assinatura fornecida.

*/