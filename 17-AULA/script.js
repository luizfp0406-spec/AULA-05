console.log("SIM");

// CALLBACK
// FUNÇÃO PRINCIPAL


// FUNÇÃO DE CALLBACK
function Finalizar() {
    console.log("Acabei");
}


//FUNÇÃO PRINCIPAL
function processar(callback){
    console.log(" Iniciando o processamento das informações...");
    callback()
}

//Executo a função principal e passo a função de callback como argumento
processar(Finalizar)

// CALLBACK COM FUNÇÃO ANÔNIMA
function execultarTarefa(callback){
    console.log(" Iniciando a execução da tarefa...");
    // executa uma função com delay
    setTimeout(callback, 3000)
}

execultarTarefa(() => {
    console.log("Acabou a tarefa");
})

// CALLBACK COM COMDIÇÃO SIMPLES
function verificarNumero(nota, callback){
    if (nota >= 7) {
    callback()
    }
}

function aprovado(){
    console.log("Congratulations, voçê é o milior");
}   

verificarNumero(8, aprovado)

//verificação com dois callbacks
// se deu certo
function login(){
    console.log("Parabens, logado com sucesso");
}
// se deu errado
function loginErro(){
    console.log("Usuario ou senha errados, tente novamente");
}

function validarSenha(senha, sucesso, erro){
    // verificar a senha e se tiver correta chama o callback de sucesso, se tiver errada chama o callback de erro
    if (senha === "123456") {
        sucesso()
    }
    // Se deu erro, chma o outri callback
    else {
        erro()
    }
}
console.log("------------------------------");
// execultar os testes
// com senha errada
validarSenha("7", loginCorreto, loginErrado)

console.log("------------------------------");
// com senha correta
validarSenha("1234", loginCorreto, loginErrado)

