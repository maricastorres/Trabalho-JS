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
  let num = new Array()
  num = inputString.split(' ').map(str => str.trim())
  res = `${num.sort(function(a, b){
    return a - b
  })}`
  console.log(res)
  document.getElementById('pRes18').innerHTML = "<b>"+res+"</b>";
}

//Ex 19 -Dado o array [2, 5, 8, 11, 14], use filter para selecionar apenas os números maiores que 5 e depois map para multiplicá-los por 2. Mostre o resultado final.
function ex19_pt05(){
  const inputString = document.getElementById('txArray19').value
  let numeros19 = inputString.split(' ').map(str => Number (str.trim()))

  res = `<b>Maiores que 5 e multiplicados por 2:</b> ${numeros19.filter(num => num > 5).map(num => num * 2).join(', ')}`

  console.log(res)
  document.getElementById('pRes19').innerHTML=res
}
 // Ex 21 -  Escreva um programa para controlar uma fila de atendimento, deve guardar o nome da pessoa ao clicar no botão "entrar na fila" e inserir no final de uma fila. Quando a pessoa for atendida, deve clicar no botão "atender" que vai retirar o nome da pessoa que está no primeiro lugar na fila. Também guarde a data e hora que a pessoa entrou na fila (use Date.now() para obter essa informação . Veja como formatar a data usando Intl.DateTimeFormat).Quando ela for atendida (retirada da fila), deve calcular quanto tempo levou para ser atendida. Use vetores para armazenar as informações. Para inserir no final da fila use o método "push()" e para remover do início da fila use o método "shift()" . Crie um vetor para armazenar o nome e a hora (hora, minutos e segundos) que a pessoa entrou na fila. Em outro vetor armazene o nome, data e hora que pessoa entrou na fila, data e hora que foi atendida e quanto tempo demorou para ser atendida. Cada vez que uma pessoa entrar na fila ou for atendida deve exibir os dados armazenados nos dois vetores.



let fila = [] // Array Fila de espera
let histAtend = [] //Array histórico de atendimento
let atend = [] // Array para a pessoa em atendimento (conterá apenas 1 item)

// NOVA FUNÇÃO para formatar corretamente uma duração em milissegundos para HH:MM:SS
function formatarDuracao(ms) {
    if (ms < 0) ms = 0;
    // Cria uma data com base nos milissegundos e ajusta pelo fuso horário para garantir que a conversão para HH:MM:SS seja pura
    const data = new Date(ms);
    const fusoHorarioOffset = data.getTimezoneOffset() * 60000;
    const dataCorrigida = new Date(data.getTime() + fusoHorarioOffset);
    
    // Extrai horas, minutos e segundos e garante que tenham 2 dígitos
    const horas = String(dataCorrigida.getHours()).padStart(2, '0');
    const minutos = String(dataCorrigida.getMinutes()).padStart(2, '0');
    const segundos = String(dataCorrigida.getSeconds()).padStart(2, '0');
    
    return `${horas}:${minutos}:${segundos}`;
}


function tempo() {
    // 1. Obtendo o timeStamp e convertendo-o para um objeto Date
    const timeStamp = Date.now()
    const dataAtual = new Date(timeStamp)

    // 2. Usando os métodos 'toLocale' para formatar
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR') // Formata a DATA
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR') // Formata a HORA

    // Retorna a data, a hora e o timestamp puro para cálculos
    let tempoTotal = [dataFormatada, horaFormatada, timeStamp]

    return tempoTotal
}

function atualizarDisplayFila() {
    const divFila = document.getElementById("dvFila21")
    divFila.innerHTML = "" // Sempre limpa a exibição atual primeiro

    if (fila.length === 0) {
        // Se a fila estiver vazia, mostra a mensagem
        divFila.innerHTML = "<p>Nenhuma pessoa na fila de espera</p>"
    } else {
        // Se houver pessoas, cria a lista
        for (let i in fila) {
            // Exibe o nome, a data e a hora de entrada
            let res = document.createElement("p")
            res.innerHTML = `<b>${Number(i) + 1}. ${fila[i][0]}</b> - Entrada: ${fila[i][1]}, ${fila[i][2]}`
            divFila.appendChild(res)
        }
    }
}

// Fila de Espera
function ex21_pt06() {
    let nome = document.getElementById("txNome21").value // capturando o nome
    let nomeIsblank = nome.trim()
    
    if (nomeIsblank.length > 0) {
        let inicioEspera = tempo() // Pega a data, hora e o timeStamp do inicio de entrada na fila
        //Salva o timestamp (inicioEspera[2]) junto com a pessoa na fila
        let celula = [nome, inicioEspera[0], inicioEspera[1], inicioEspera[2]]
        fila.push(celula)
    } else {
        window.alert("Digite um nome válido")
    }
    document.querySelector("#txNome21").value = "" // Limpando o valor do input txNome21
    atualizarDisplayFila()
}

// Em Atendimento
function ex21_pt06_shift() {
    const paraAtendEl = document.getElementById("pRes21At")
    
    if (fila.length > 0) {
        if (paraAtendEl.innerHTML === "Nenhuma pessoa em Atendimento") {
            const inicioAtend = tempo() // Pega a data, hora e o timeStamp do inicio do atendimento
            const pessoaDaFila = fila.shift() // Pega a primeira pessoa da fila

            const nome = pessoaDaFila[0];
            const dataEntrada = pessoaDaFila[1];
            const horaEntrada = pessoaDaFila[2];
            const timestampEntrada = pessoaDaFila[3]; //Pega o timestamp de entrada individual da pessoa

            //Calcula o tempo de espera em milissegundos
            const tempoEsperaMs = inicioAtend[2] - timestampEntrada;
            
            // Adiciona todas as informações necessárias sobre a pessoa em atendimento
            atend.push([
                nome,           // 0
                dataEntrada,    // 1
                horaEntrada,    // 2
                inicioAtend[0], // 3 - dataInicioAtend
                inicioAtend[1], // 4 - horaInicioAtend
                inicioAtend[2], // 5 - timestampInicioAtend
                tempoEsperaMs   // 6 - tempo de espera em milissegundos
            ]);
            
            // Atualiza a tela para mostrar quem está em atendimento
            paraAtendEl.innerHTML = `<b>${nome}</b> - Início: ${inicioAtend[0]}, ${inicioAtend[1]}`
        } else {
            window.alert("Existe pessoa em atendimento")
        }
    } else {
        window.alert("Não há ninguém na fila.")
    }
    atualizarDisplayFila()
}

function ex21_pt06_hist() {
    if (atend.length > 0) {
        const fimAtend = tempo() // Pega a data, hora e o timeStamp do fim do atendimento
        const pessoaFinalizada = atend.shift(); // Remove a pessoa do estado "em atendimento"

        const timestampInicioAtend = pessoaFinalizada[5];
        const tempoEsperaMs = pessoaFinalizada[6];

        //Calcula a duração do atendimento em milissegundos
        const tempoAtendMs = fimAtend[2] - timestampInicioAtend;

        //Formata as durações usando a nova função
        const tempoEsperaFormatado = formatarDuracao(tempoEsperaMs);
        const tempoAtendFormatado = formatarDuracao(tempoAtendMs);
        
        // Adiciona ao histórico os dados corretos e formatados
        histAtend.push([
            pessoaFinalizada[0], // nome
            pessoaFinalizada[1], pessoaFinalizada[2], // Entrada na fila
            pessoaFinalizada[3], pessoaFinalizada[4], // Início do Atendimento
            fimAtend[0], fimAtend[1],                 // Fim do Atendimento
            tempoAtendFormatado,                      // Duração do Atendimento
            tempoEsperaFormatado                      // Tempo de espera
        ]);
        
        document.getElementById("dvHist21").innerHTML = ""
        for (let i in histAtend) {
            let res = document.createElement("p")
            res.innerHTML = `
                <b>${Number(i)+1}. ${histAtend[i][0]}</b> <br> 
                Entrada na Fila: ${histAtend[i][1]}, ${histAtend[i][2]} <br> 
                Início do Atendimento: ${histAtend[i][3]}, ${histAtend[i][4]} <br> 
                Fim do Atendimento: ${histAtend[i][5]}, ${histAtend[i][6]} <br> 
                Tempo de espera: ${histAtend[i][8]} <br>
                Duração do Atendimento: ${histAtend[i][7]}`
            document.getElementById("dvHist21").appendChild(res)
        }
        
        document.getElementById("pRes21At").innerHTML = "Nenhuma pessoa em Atendimento"
    } else {
        window.alert("Ninguém em atendimento para ser finalizado.")
    }
}

// nome, entrada: data e hora, inicio atendimento: data e hora, encerramento atendimento: data e hora, duração atendimento, tempo de espera

