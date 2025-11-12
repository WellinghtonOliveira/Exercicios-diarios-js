

function generateSignature(name, title, company) {
    let primeiraLetra = name.slice(0, 1).toUppercase()

    const pre = [
        {"A-I": ">>"},
        {"J-R": "--"},
        {"S-Z": "::"}
    ]

    for (let i = 0; i < pre.length; i++) {
        
    }


    return name;
}


console.log(generateSignature("Quinn Waverly", "Founder and CEO", "TechCo"))


/*

Dadas as strings referentes ao nome, cargo e empresa de uma pessoa, retorne uma assinatura de e-mail como uma única string, seguindo as seguintes regras:

O nome deve aparecer primeiro, precedido por um prefixo que depende da primeira letra do nome. Para nomes que começam com (sem distinção entre maiúsculas e minúsculas):
A-IUsar >>como prefixo.
J-RUsar --como prefixo.
S-ZUsar ::como prefixo.
Uma vírgula e um espaço ( , ) devem seguir o nome.
O título e a empresa devem vir após a vírgula e o espaço, separados por vírgula " at "e espaços ao redor.
Por exemplo, dados "Quinn Waverly", "Founder and CEO", e "TechCo"retorne "--Quinn Waverly, Founder and CEO at TechCo".

*/