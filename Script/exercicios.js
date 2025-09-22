// ****************************************************************************************
// Parte 01 - Declaração de Variáveis (let e const) (4 questões)
// ****************************************************************************************

// Ex01 - Declaração com let: Crie uma variável let idade e atribua sua idade. Depois, atribua um novo valor representando a idade daqui a 5 anos. Mostre os dois valores no console: “Minha idade hoje é <idade> e daqui a 5 anos será <nova_idade>”
function ex01_pt01() {
  let idade = Number(document.getElementById('txIdade').value)

  document.getElementById('pIdade').innerHTML = "Sua idade atual é: " + idade + " anos"

  idade = idade + 5

  document.getElementById('pIdade5').innerHTML = "Sua idade daqui a 5 anos será: <b>" + idade + " anos</b>"
}

// Ex02 -  Uso de const: 
// a. Declare uma constante PI com valor 3.14159. Tente atribuir outro valor a PI e veja o erro no console. Explique por que isso acontece.
function ex02a_pt01() {
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
function ex02b_pt01() {

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
function ex03_pt01() {

  let nome = document.getElementById('txNome').value
  let sobrenome = document.getElementById('txSobrenome').value
  let anoNasc = document.getElementById('txAnoNasc').value
  const nomeCompleto = nome + ' ' + sobrenome

  if (nome === '' || sobrenome === '' || anoNasc === '') {
    document.getElementById('pRes03').innerHTML = `Digite seu nome, sobrenome e ano de nascimento`
  } else {
    document.getElementById('pRes03').innerHTML = `Olá, meu nome é ${nomeCompleto} e eu nasci em ${anoNasc}.`
  }
}

// Ex04 - Diferença de escopo: REVER
// Declare uma variável let numero = 10 fora de um bloco {}. Dentro do bloco, declare novamente let numero = 20. Mostre o valor da variável dentro e fora do bloco com console.log.
let num04 = 10
console.log(num04)
function ex04_pt01() {
  num04 = 20
  document.getElementById('pRes04L').innerHTML = num04
  console.log(num04)
}
// ****************************************************************************************
// Parte 02 - Estruturas Condicionais (if, else if, else e operador ternário) (4 questões)
// ****************************************************************************************

// Ex05 - Verificação de Idade: Peça ao usuário (com prompt) sua idade.
// Se for menor que 12, mostre "Criança".
// Se estiver entre 12 e 17, mostre "Adolescente".
// Se for maior ou igual a 18, mostre "Adulto"..
function ex05_pt02() {
  let idade05 = document.getElementById('txIdade05').value
  let res

  idade05 >= 18 ? res = 'Adulto' : (idade05 < 12 ? res = 'Criança' : res = 'Adolescente');

  document.getElementById('pRes05').innerHTML = `Usuário é um(a) ${res}`
}

// Ex06 - Verificar se um número é par ou ímpar
function ex06_pt02() {
  let n1 = document.getElementById("txNum06").value
  let res
  if (n1 % 2 == 0) {
    res = `O número ${n1} é <b>par</b>`
  } else {
    res = `O número ${n1} é <b>ímpar</b>`
  }
  document.getElementById("pRes06").innerHTML = res
}

// Ex07 - Nota de aluno: Receba uma nota de 0 a 10. o >= 7: "Aprovado". o >= 5 e < 7: "Recuperação". o < 5: "Reprovado".
function ex07_pt02() {

  let nome = document.getElementById("txAluno07").value
  let nota = document.getElementById("txNum07").value
  if (nota >= 7) {
    document.getElementById("pRes07").innerHTML = `<p>Aluno: ${nome}</p><p>Situação: Aprovado</p><p>Nota: ${nota}</p>`
  } else if (nota >= 5 && nota < 7) {
    document.getElementById("pRes07").innerHTML = `<p>Aluno: ${nome}</p><p>Situação: Recuperação</p><p>Nota: ${nota}</p>`
  } else {
    document.getElementById("pRes07").innerHTML = `<p>Aluno: ${nome}</p><p>Situação: Reprovado</p><p>Nota: ${nota}</p>`
  }

}

// Ex08 - Operador Ternário: Receba um número via prompt e mostre no console: "Positivo" se maior que 0, "Negativo" se menor que 0, ou "Zero" caso contrário, usando apenas operador ternário.

function ex08_pt02() {
  let num08 = document.getElementById('txNum08').value
  let res

  num08 > 0 ? res = 'Positivo' : (num08 < 0 ? res = 'Negativo' : res = 'Zero');

  document.getElementById('pRes08').innerHTML = `O número inserido é ${res}`
}

// ****************************************************************************************
// Parte 3 – Laços de Repetição (for, while, for...in, for...of) (4 questões)
// ****************************************************************************************

//Ex 09 - Tabuada com for: Receba um número e mostre a tabuada de 1 a 10 usando for
function ex09_pt03() {
  let num = document.getElementById("txNum09").value
  let mult
  let res
  let para
  document.getElementById("pRes09").innerHTML = `Tabuada de ${num}:`
  for (i = 0; i <= 10; i++) {
    mult = num * i
    res = `${num} X ${i} = ${mult}`
    para = document.createElement("p")
    para.innerHTML = res
    document.getElementById("dvRes09").appendChild(para)
  }
}

//Ex 10 - Contagem Regressiva com while: Mostre no console a contagem regressiva de 10 até 1 com while.
function ex10_pt03() {
  let num = 10
  let para
  while (num > 0) {
    para = document.createElement("label")
    para.innerHTML = " " + num
    document.getElementById("dvRes10").appendChild(para)
    console.log(num)
    num = num - 1
  }
}

// Ex11 - Percorrendo Objetos com for...in: Crie um objeto pessoa com nome, idade e cidade. Use for...in para listar suas propriedades e valores.
function ex11_pt03() {
  const pessoa = {
    nome: document.getElementById('txNome11').value,
    idade: document.getElementById('txIdade11').value,
    cidade: document.getElementById('txCid11').value,
  };
  let txt = ''
  for (let p in pessoa) {
    para = document.createElement("label")
    para.innerHTML = `${p}: ${pessoa[p]} `
    document.getElementById("dvRes11").appendChild(para)
  }
  document.getElementById('pRes11').innerHTML = txt
}

// Ex12 - Percorrendo Arrays com for...of: Crie um array de frutas e use for...of para mostrar cada fruta no console.
function ex12_pt03() {
  let frutas = ["Abacaxi", "Manga", "Laranja", "Banana", "Melancia", "Melão"]
  for (let fruta of frutas) {
    para = document.createElement("label")
    para.innerHTML = " " + fruta
    document.getElementById("dvRes12").appendChild(para)
  }
}

// ****************************************************************************************
// Parte 4 – Objetos (3 questões)
// ****************************************************************************************

//Ex 13 - Criação de Objeto: Crie um objeto carro com propriedades marca, modelo e ano. Mostre todas as propriedades no console, usando uma instrução console.log para cada uma das propriedades.
function ex13_pt04() {
  const carro = {
    marca: document.getElementById("txMarca13").value,
    modelo: document.getElementById("txModelo13").value,
    ano: document.getElementById("txAno13").value
  }
  
  let resposta = `<b>Marca:</b> ${carro.marca}<br><b>Modelo:</b> ${carro.modelo}<br><b>Ano:</b> ${carro.ano}`

  console.log(resposta)
  document.getElementById("pRes13").innerHTML = resposta
}

//Ex 14 - Método em Objeto: Adicione ao objeto carro um método descricao() que retorne uma string: "Marca: <marca>, Modelo: <modelo>, Ano: <ano>". Chame esse método e mostre o resultado no console.
function ex14_pt04() {
  const carro = {
    marca: document.getElementById("txMarca14").value,
    modelo: document.getElementById("txModelo14").value,
    ano: document.getElementById("txAno14").value,
    descricao: function () {
      return `<b>Marca:</b> ${this.marca}<br><b>Modelo:</b> ${this.modelo}<br><b>Ano:</b> ${this.ano}`
    }
  }
  let resposta = carro.descricao()
  console.log(resposta)
  document.getElementById("pRes14").innerHTML = resposta
}

//Ex 15 - Manipulação de Propriedades: Crie um objeto livro com título e autor. Adicione dinamicamente a propriedade ano. Altere o título. Exclua a propriedade autor. Mostre o objeto atualizado no console.
let livro15 = {}
function ex15_pt04(){
  // 1. Cria o objeto livro15 dentro da função, para que ele seja quando a função for executada com o clique de botão. Inicializa a propriedade título vazia porque na parte 3 do exercício ela vai ser populada
  livro15 = {
    titulo: '',
    autor: document.getElementById("txAutor15").value
  }

  // 2. Adiciona dinamicamente a propriedade ano.
  let nova_chave = "ano"
  let ano = document.getElementById("txAno15").value
  livro15[nova_chave] = ano

  // 3. Altera o título.
  livro15.titulo = document.getElementById('txTitulo15').value

  let resposta = `<b>Título:</b> ${livro15.titulo}<br><b>Autor:</b> ${livro15.autor}<br><b>Ano:</b> ${livro15.ano}`

  //console.log(resposta)
  console.log("Objeto após acicionar o ano:", livro15);
  document.getElementById("pRes15").innerHTML = resposta
}
function ex15_pt04_del(){
  // A função de deletar deve ser executada após a de adicionar.
  // A variável livro15 precisa ser global para ser acessada aqui
  if (livro15) { // Verifica se o objeto existe antes de tentar manipulá-lo.
        delete livro15.autor;
    }

  let resposta = `<b>Título:</b> ${livro15.titulo}<br><b>Autor:</b> ${livro15.autor}<br><b>Ano:</b> ${livro15.ano}`

  //console.log(resposta)
  console.log("Objeto após excluir o autor:", livro15);
  document.getElementById("pRes15").innerHTML = resposta
}

//Ex 16 - Dobrar Valores (map): Dado o array [1, 2, 3, 4, 5], use map para criar um novo array com cada número dobrado.
function ex16_pt05(){
  const inputString = document.getElementById('txArray16').value;

  // 1. inputString.split(' ') para divide a string em um array de strings.
  // Por exemplo, "1, 2, 3" se torna ["1", " 2", " 3"].
  // 2. inputString.map() percorre cada item da lista e mapeia uma transformação, convertendo de string para valor numérico.
  // str.trim() remove espaços em branco extras
  let array = inputString.split(' ').map(str => Number(str.trim()))
  
  // .map() dobra cada número do array
  let a_dobro = array.map(a => a * 2);

  // Método .join(', ') foi usado para juntar os elementos do array com um separador de ", " (vírgula e espaço).
  res = `<b>Dobro:</b> ${a_dobro.join(', ')}`

  console.log(a_dobro); // Saída esperada: [2, 4, 6, 8, 10]
  document.getElementById('pRes16').innerHTML = res
}

//Ex 17 - Filtrar Números Pares (filter): Dado o array [10, 15, 20, 25, 30], use filter para criar um array apenas com números pares.
function verificaPar(num){
  if (num % 2 === 0){
    return num
  }    
}
function ex17_pt05(){
  const inputString = document.getElementById('txArray17').value;

  // 1. inputString.split(' ') divide a string em um array de strings. Por exemplo, "1, 2, 3" se torna ["1", " 2", " 3"].
  // 2. inputString.map() percorre cada item da lista e mapeia uma transformação, convertendo de string para valor numérico.
  // str.trim() remove espaços em branco extras
  let numeros17 = inputString.split(' ').map(str => Number(str.trim()))

  // Método .join(', ') foi usado para juntar os elementos do array com um separador de ", " (vírgula e espaço).
  res = `<b>Pares:</b> ${numeros17.filter(verificaPar).join(', ')}`

  console.log(res)
  document.getElementById('pRes17').innerHTML = res;
}


//Ex 18 - Ordenação (sort): Dado o array [5, 1, 9, 3, 7], ordene-o em ordem crescente usando sort.
function ex18_pt05(){
  const inputString = document.getElementById('txArray18').value;

  // inputString.split(' ') divide a string em um array de strings. Por exemplo, "1, 2, 3" se torna ["1", " 2", " 3"].
  // inputString.map() percorre cada item da lista e mapeia uma transformação, convertendo de string para valor numérico.
  // str.trim() remove espaços em branco extras
  let numeros18 = inputString.split(' ')
  let res = `<b>Não ordenado:</b> ${numeros18.join(', ')}`

  // método .sort() ordena o array de strings 
  numeros18.sort()

  // numeros18.map() percorre cada item da lista e mapeia uma transformação, convertendo de string para valor numérico.
  // str.trim() remove espaços em branco extras
  numeros18.map(str => Number(str.trim()))

  // Método .join(', ') foi usado para juntar os elementos do array numérico com um separador de ", " (vírgula e espaço).
  res = `<b>Ordenado:</b> ${numeros18.join(', ')}`

  console.log(res)
  document.getElementById('pRes18').innerHTML = res;
}