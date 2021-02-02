// Objeto que possui duas propriedades (métodos) uma para abrir o modal e outra para fecha-lo.
const Modal = {
  open() {
    // Abrir modal
    // Adicionar a class active ao modal
    document.querySelector(".modal-overlay").classList.add("active");
  },
  close() {
    // Fechar Modal
    // Remover a class activ do modal
    document.querySelector(".modal-overlay").classList.remove("active");
  },
};

// Para recuperar os valores da tabela que criamos no html, precisamos estoca-los num vetor, no nosso caso um vetor de objetos [{}]
const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50001 /* quando lidamos com valores nao colocamos as cifras e virgulas, iremos formata-los depois */,
    date: "23/01/2021",
  },
  {
    id: 2,
    description: "Website",
    amount: 500000,
    date: "24/01/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "23/01/2021",
  },
  {
    id: 4,
    description: "App",
    amount: 200000,
    date: "23/01/2021",
  },
];

// Esse sinal de = nao devemos falar igual, mas sim atribuindo para evitar confusoes com o sinal de = matematico que significa igualdade
const Transaction = {
  // Quais funcionalidades eu quero pra este objeto?

  /* 8. Colocamos um return "cheguei" so pra testar se conseguimos recuperar os valores no método updateBalance. */
  // 1. Somar as entradas
  incomes() {
    return "cheguei"
  },

  // 2. Somar as saidas
  expenses() {
    return "cheguei"
  },

  // 3. Total = entradas - saidas
  total() {
    return "cheguei"
  },
};

// 1. Eu preciso pegar as transações do objeto aqui no Javascript. Uma outra forma de escrever esse passo :
// Substituir os dados do HTML com os dados do JS
const DOM = {
  // 3.8 Getting tbody tag
  transactionsContainer: document.querySelector("#data-table tbody"),
  // 3. Essa função vai trabalhar com a função innerHTMLTransaction(). Ela vaipegar as transações e coloca-las no HTML
  addTransaction(transaction, index) {
    // 3.1 Vamos criar a tag tr, assim podemos apagar o tr da variavel htmlabaixo
    const tr = document.createElement("tr");
    // 3.2 Adicionar a essa tag o conteudo da variavel html, para issoprecisamos    retornar esta constante cf. 3.3
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);
    // 3.4 Agora precisar chamar este método cf. 3.5

    // 3.9 Agora que recuperamos a tag tbody, podemos "colar" o que criamosdentro   dela
    DOM.transactionsContainer.appendChild(tr);
  },

  // 2. Essa função vai me permitir substituir os dados do HTML
  innerHTMLTransaction(transaction) {
    // 5. Gerando as cores das transaçoes se é positiva ou negativa
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    // 6. Formatando os valores
    const amount = Utils.formatCurrency(transaction.amount);

    // 3.7 Podemos recuperar os dados do vetor transactions e substituir os valores no html

    // Lembrete: `` (template literals) nos permete usar variaveis dentro (interpolação) e nesse caso podemos usar um bloco de codigo html sem ter erros, que seria o caso com "" e ''
    // 6.6 Agora que o amount recebe o numero formatado de formatCurrency mudamos a cahamada de obtençao dos valores
    const html = `
          <td class="description">${transaction.description}</td>
          <td class="${CSSclass}">${amount}</td>
          <td class="date">${transaction.date}</td>
          <td>
            <img src="./assets/minus.svg" alt="Remover transação">
          </td>
      `;
    // 3.3 Retornar html para poder recupera-la na funcão addTransaction
    return html;
  },

  // 7. Dinamisando os valores das cards
  updateBalance() {
    // 7.1 Buscar os elementos que contém os valores, pra isso temos que definir uma classe para os mesmos. cf. index.html 7.1
    document
      .querySelector('.incomeDisplay')
      .innerHTML = Transaction.incomes();
    // 7.2 Para poder testar, temos que chamar essa funçao como fizemos pro transactions(). 

    // 7.3 Fazer a mesma coisa para as outras Cards
    document
      .querySelector('.expenseDisplay')
      .innerHTML = Transaction.expenses();

      document
      .querySelector('.totalDisplay')
      .innerHTML = Transaction.total();

    // 7.4 cf. Transaction() 
  }
};

// 6.
const Utils = {
  formatCurrency(value) {
    // console.log(value);
    // 6.1 Se o numero for menor que 0, adicionamos um sinal negativo, senao nao colocamos nada
    const signal = Number(value) < 0 ? "-" : "";

    // 6.2 Transformamos o value em uma string pra poder utilisar a funçao replace() que pega em primeiro parâmetro PARA O QUE queremos mudar e em segundo O QUE QUEREMOS mudar
    // Regex : as duas barras // delimitam a expressao
    // \D : é o que queremos que o Regex faça, significa "procure so os numeros"
    value = String(value).replace(/\D/g, "");

    // 6.3 Re transformamos o valor em numero e dividimos por 100
    // Isso vai formatar o numero dando o valor com a virgula
    value = Number(value) / 100;

    // 6.4 Transformar esse valor em moeda
    // toLocaleString: primeiro parametro em que lugar do mundo estou, segundo podemos passar um objeto com as opçoes que queremos
    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
    // 6.5 cf innerHTMLTransaction 6.6

    return signal + value;
  },
};

// 4. Para mostrar todos os dados do vetor, fazemos um loop e passamos como argumento à chamada da funçao
transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction);
});

// 7.2 Executando updateBalance()
DOM.updateBalance();