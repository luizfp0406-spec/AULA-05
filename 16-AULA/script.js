const { log } = require("node:console");

console.log("Salve o tricolor paulista");

// FUNÇÕES
// Só executa

function teste() {
    console.log("Funcionou aqui");
}
teste()

console.log("teste");

// COMO PARAMETRO
function teste2(parametro) {
    console.log("O parametro é: " , parametro);
}
teste2("Arroz")

// com retorno
function media(n1, n2) {
    var resultado = (n1 + n2)
    return resultado
}

console.log("A média é: " , media(3,4))

// Gurda o valor do retorn em uma variavel
var mediaFinal = media(8, 6)
console.log("A média final é: " , mediaFinal)

// FUNÇÃO ANÔNIMA
// É uma função que nao tem nome e seu retorno e gurdado em uma variavel

var mensagem = function(){
    console.log("OI, MEU CHAPA");
}
// Mostra o texto da função
console.log(mensagem);

// Apenas gurda o texto da função, não executa a função
mensagem

// Executa a função
mensagem()


// ARROW FUNCTION - FUNÇÃO DE SETA

const multiplicar = (X, Y) => {
    return X * Y;
}
console.log("Sua multiplicação deu: " , multiplicar(7, 6));

//mais menor ainda
//quando só tem uma linha de return pode ser omitido e fica uma linha só
const dobro = numero => numero * 2

console.log("O dobro é: " , dobro(4));