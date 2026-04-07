/*
// MOSTRANDO UMA MENSAGEM NO CONSOLE
console.log("Salve rapaziada do canal, se increve ai!");

// CAXINHA DE ALERTA
//alert("TESTE PRA VER SE FUNCIONA!");

// CRIANDO VARIÁVEIS
var nome = "Luiz" // string ou texto
var numero = 7 // inteiro ou int
var salto = 2.10 // float ou real
var theBest = true; // bool ou lógico

//FUNÇÃO PARA MOSTRAR O VALOR DAS VARIÁVEIS
console.log(typeof(nome));

console.log("Seu nome é: " + nome)
console.log("Seu número é: " + numero)
console.log("Seu salto é: " + salto)
console.log("Você é o melhor? " + theBest)

nome = 10 
console.log(typeof(nome))

//OUTROS TIPOS DE VARIÁVEIS
var nulo = null; 
var indefinido = undefined
console.log(nulo)
console.log(indefinido)
*/

// OPERADORES ARITMÉTICOS
// +,-*,/,%,

/*
var a = 10 , b = 5;
console.log("soma:", a + b)
console.log("subtração:", a - b)
console.log("multiplicação: ", a * b)
console.log("divisão: ", a / b)
console.log("módulo: ", a % b)

// OPERADORES DE LOGICOS
// E, OU, NÃO
// &&, ||, !

var verdadeiro = true, mentira = false;
console.log("Verdadeiro E Mentira: ", verdadeiro && mentira)
console.log("Verdadeiro OU Mentira: ", verdadeiro || mentira)
console.log(verdadeiro && !mentira)

// OPERADORES DE RELACIONAIS
// >, <, >=, <=, ==, !=, ===, !==
var x = 65, y = 32; z = "65";
// VERIFICANDO APENAS O VALOR   
console.log("x > y: ", x > y)
console.log("x < y: ", x < y)
console.log("x >= y: ", x >= y)
console.log("x <= y: ", x <= y) 
console.log("x == y: ", x == y)
console.log("x != y: ", x != y)
// VERIFICANDO O VALOR E O TIPO
console.log("x == z: ", x == z) // compara o valor
console.log("x === z: ", x === z) // compara o valor e o tipo*/


/*var estaVivo = true;
// PRIMERA COMPARAÇÃO
var estaVivo = undefined

// primeira comparação
if(estaVivo == true){
    console.log("Parabéns, você está vivo")
}

// segunda comparação, caso a primeira dê errado
else if(estaVivo == undefined){
    console.log("Você não tá nada")
}

// entra aqui, caso todas as outras comparações deem errado
else{
    console.log("Infelizmente, você foi de F ☠️")
}

// SWITCH = ESCOLHA
var camisa = "Azul"

/*switch(camisa){
    case "azul":
        console.log("Você ganhou um voucher!")
    break
    case "Branca":
        console.log("voçe gangou um body splash da virgina ")
    break
    case "Vermelho":
        console.log("Você ganhou uma ferrari 3 portas")
    break
    default:
        console.log("camisa invalida e feia, va trocar")
        break
}


//COMENTEI TODA A PARTE DE DESVIOS

// PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR

prompt("digite seu nome: ")

var time = prompt("Me diga, pra quem voçe torce?")

console.log("Seu time é: " + time)*/


let a = 10
let b = 20
let c = 50

if(a + b < c){
    console.log("1")
}else if(a < b ||  b < c){
    console.log("2")
}else(a > b && b > c){
    console.log("3")
}