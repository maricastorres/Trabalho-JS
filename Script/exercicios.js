// Parte 01 - Declaração de Variáveis (let e const) (4 questões)

// Ex01 - Declaração com let: Crie uma variável let idade e atribua sua idade. Depois, atribua um novo valor representando a idade daqui a 5 anos. Mostre os dois valores no console: “Minha idade hoje é <idade> e daqui a 5 anos será <nova_idade>”

function ex01_pt01(){
    let idade = Number(document.getElementById('txIdade').value)
    
    document.getElementById('pIdade').innerHTML = "Sua idade atual é: " + idade + " anos"

    idade = idade+5

    document.getElementById('pIdade5').innerHTML = "Sua idade daqui a 5 anos será: <b>" + idade + " anos</b>"
}

// Ex02 -  Uso de const: 
// a. Declare uma constante PI com valor 3.14159. Tente atribuir outro valor a PI e veja o erro no console. Explique por que isso acontece.
function ex02a_pt01(){
    const pi = 3.14159

    try {
        // Simula um erro intencional
        pi = document.getElementById('txErroPi').value
      } catch (error) {

    // Seleciona o elemento HTML onde a mensagem de erro será exibida
    const elementoErro = document.getElementById("pRes02");

    // Verifica se o elemento foi encontrado e então exibe a mensagem
    if (elementoErro) {
      elementoErro.innerText = "Erro: " + error.message; // Insere a mensagem no elemento HTML
    }
  }
}

// b. Declare uma constante SemanasDoAno sem atribuir valor. Na linha seguinte atribua o valor 52. O que ocorre?
function ex02b_pt01(){

  const semanaDoAno = ''

    try {
        // Simula um erro intencional
        semanaDoAno = 52
      } catch (error) {

    // Seleciona o elemento HTML onde a mensagem de erro será exibida
    const elementoErro = document.getElementById("pRes02b");

    // Verifica se o elemento foi encontrado e então exibe a mensagem
    if (elementoErro) {
      elementoErro.innerText = "Erro: " + error.message; // Insere a mensagem no elemento HTML
    }
  }
}

// Ex03 - Concatenação de Strings: 
// Crie três variáveis (let nome, let sobrenome, let anoNascimento) e mostre no  console a frase: "Olá, meu nome é <nome completo> e eu nasci em <anoNascimento>". <nome  completo> deve ser a concatenação de nome e sobrenome.


function ex03_pt01(){

  let nome = document.getElementById('txNome').value
  let sobrenome = document.getElementById('txSobrenome').value
  let anoNasc = document.getElementById('txAnoNasc').value
  const nomeCompleto = nome + ' ' + sobrenome

  if(nome === '' || sobrenome === '' || anoNasc === ''){
    document.getElementById('pRes03').innerHTML = `Digite seu nome, sobrenome e ano de nascimento`
  }else{
    document.getElementById('pRes03').innerHTML = `Olá, meu nome é ${nomeCompleto} e eu nasci em ${anoNasc}.`
  }
}

// Ex04 - Diferença de escopo: REVER
// Declare uma variável let numero = 10 fora de um bloco {}. Dentro do bloco, declare novamente let numero = 20. Mostre o valor da variável dentro e fora do bloco com console.log.

let num04 = 10
console.log(num04)
function ex04_pt01(){
  num04 = 20
  document.getElementById('pRes04L').innerHTML = num04
  console.log(num04)
}
// **************************************************************
// Parte 02 - Estruturas Condicionais (if, else if, else e operador ternário) (4 questões)

// Ex05 - Verificação de Idade: Peça ao usuário (com prompt) sua idade.
// Se for menor que 12, mostre "Criança".
// Se estiver entre 12 e 17, mostre "Adolescente".
// Se for maior ou igual a 18, mostre "Adulto"..

function ex05_pt02(){
  let idade = document.getElementById('txIdade05').value
  let res

  idade >= 18 ? res ='Adulto' : (idade < 12 ? res = 'Criança' : res ='Adolescente');

  document.getElementById('pRes05').innerHTML = `Usuário é um(a) ${res}`
}
