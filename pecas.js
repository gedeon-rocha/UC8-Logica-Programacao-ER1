let peso = 100;

if (peso >= 100) {
    console.log("Peso permitido! Continue com o cadastro.");
}else {
    console.log("Peso inválido! A peça não possui o peso permitido.");
}

let listaPecas = ["amortecedor", "radiador", "pastilha", "vibraquim", "disco", "correira", "lampada", "bateria", "freio"];

if (listaPecas.length < 10) {
    console.log("Ainda há espaço para incluir mais peças!");
} else {
    console.log("Quantidade excedida! Não há mais espaço para incluir peças");
}
//console.log(`Última peça inserida: ${listaPecas[8]}`); - IMPRIMIU: Última peça inserida: freio
// let numero    35 + 35 -> 70         / number
// let texto    "35" + "35" -> 3535   / string

let nomePecas = "Vela";

if (nomePecas.length > 3) {
    console.log("O nome da peça é válido. Você pode continuar com o cadastro.");
} else {
    console.log("Nome inválido. O nome da peça deve possuir mais de três caracteres.")    
}
console.log("A última peça inserida foi: " + listaPecas[8]);