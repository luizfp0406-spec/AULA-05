/*// VAMO Q VAMO !
console.log("VAMO Q VAMO !")

// LAÇOS DE REPETIÇÃO
// FOR = PARA
// for( variavel de controle
// i < 5 = duração de laço
// i++ = aumenta de 1 em 1 a variável de controle

for(var i = 0; i < 5; i++){
    console.log("Estou aqui no laço de repetição !");
}

console.log("Finalizei o loop !")


// while = ENQUANTO
var c = 1

//coloca a condição pra entrar no loop
while(c <= 10){
    console.log("oi, meu chapa !");
    //se nao tiver algo pra tirar do loop
    //ele fica aqui pra sempre
    c++
}
console.log("Finalizei o loop denovo !")


// array
var array = ["neymar", 10, true, 5.0]

// mostra todo o array
console.log(array)

// mostra um elemento especifico do array
console.log(array[2])

array[2] = "jogador"

// mostra o array atualizado
console.log(array)*/


// comentei tudo pra não dar erro no console, mas é só tirar os comentários pra ver o resultado de cada parte do código.

// lista de times de futebol
/*var times = ["Brasil", "Real madrid", "gama", "santos", "Paysandu"]

// independente do tamanho, com o .length
for (var i = 0; i < times.length; i++) {
    console.log("O time atual é:", times[i])
}

console.log("------------------");

// FOR ESPECIFICO DE ARRAY
// index - guarda o valor do indice
// in - usa o valor do indice pra mostrar o elemento
// times - define o array
for (var index in times) {
    console.log("Indice atual:", index)
    console.log("Valor do indice atual:", times[index])
}

// of - já sabe o valor do elemento
for (var index of times) {
    console.log(index)
}
    */


// FUNÇÕES PRA  INTERAGIR COM O ARRAY
var times = ["Maça", "pera", "banana"]

//mostra o array
console.log(Frutas);

//push - adiciona um elemento no final do array
Frutas.push("uva")

//mostra o array atualizado
console.log(Frutas);


// unshift - adiciona um elemento no começo do array
Frutas.unshift("melancia")

//mostra o array atualizado
console.log(Frutas);

// pra remover um elemento do array, tem o pop e o shift
// pop - remove o ultimo elemento do array
var frutatirada = Frutas.pop()
console.log("A fruta removida:", frutatirada)

//shift - remove o primeiro elemento do array
var exPrimeiraFruta = Frutas.shift()
console.log("Ex premeira fruta:", exPrimeiraFruta)


// descobrir o index de um elemento
var index = Frutas.indexOf("uva")
console.log("O index da uva é:", index)

//Descobrir se um elemento existe no array
console.log("Tem pitu:", Frutas.includes("pitu"))
console.log("tem Maçã:", Frutas.includes("Maçã"))

//ordenar o array
Frutas.sort()
console.log(Frutas)

// inverter a ordem do array
Frutas.reverse()
console.log(Frutas)

//convertendo o array pra string
//convertendo todo o array
console.log("Convertido:", Frutas.toString())

// juntar os elementos do array em uma string, usando um separador
console.log("Convertido:", Frutas.join(" - "))

// SLICE - COPIAR UMA PARTE DO ARRAY
// (de aonde começa, até onde vai, sem incluir o elemento do final)
var copiarparte = Frutas.slice(0, 2)
console.log("Copia:", copiarparte)

// SPLICE - REMOVER ELEMENTOS DO ARRAY
var removidos = Frutas.splice(1, 2)
console.log("Após remoção:", Frutas)

// PRA ADICIONAR
// (aonde começa, quantos elementos quer remover, elementos a adicionar)
Frutas.splice(1, 0, "Pitaya", "Malancia", "Morango")
console.log("Após adição:", Frutas)

// (de aonde começa, quantos elementos quer remover, elemento a adicionar)
frutas.splice(2, 1, "Arroz")
console.log("Após substituição:", Frutas)
