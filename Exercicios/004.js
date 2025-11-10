function getExtension(filename) {

    let textArray = filename.split('.')

    console.log(textArray)

    if (textArray[textArray.length - 1] != '' && textArray.length > 1) return textArray[textArray.length - 1]
    else return "none"
}


console.log(getExtension('text'))


/*

Dada uma string representando o nome de um arquivo, retorne a extensão do arquivo.

A extensão é a parte do nome do arquivo que vem depois do último ponto ( .).
Se o nome do arquivo não contiver um ponto ou terminar com um ponto, retorne "none".
A extensão deve ser retornada tal como está, preservando maiúsculas e minúsculas.

*/