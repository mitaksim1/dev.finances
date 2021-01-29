// Objeto que possui duas propriedades (métodos) uma para abrir o modal e outra para fecha-lo.
const Modal = {
    open(){
      // Abrir modal
      // Adicionar a class active ao modal
      document
        .querySelector('.modal-overlay')
        .classList.add('active')
    },
    close() {
      // Fechar Modal
      // Remover a class activ do modal
      document
        .querySelector('.modal-overlay')
        .classList.remove('active')
    }
}

// Para recuperar os valores da tabela que criamos no html, precisamos estoca-los num vetor, no nosso caso um vetor de objetos [{}]
const transactions = [
    {
      id: 1,
      description: 'Luz',
      amount: -50000, /* quando lidamos com valores nao colocamos as cifras e virgulas, iremos formata-los depois */
      date: '23/01/2021',
    },
    {
      id: 2,
      description: 'Website',
      amount: 500000, 
      date: '24/01/2021',
    },
    {
      id: 3,
      description: 'Internet',
      amount: -20000, 
      date: '23/01/2021',
    },
    {
      id: 4,
      description: 'App',
      amount: 200000, 
      date: '23/01/2021',
    },
];

// Esse sinal de = nao devemos falar igual, mas sim atribuindo para evitar confusoes com o sinal de = matematico que significa igualdade
const Transaction = {
    // Quais funcionalidades eu quero pra este objeto?

    // 1. Somar as entradas
    incomes() {

    },

    // 2. Somar as saidas
    expenses() {

    },

    // Total = entradas - saidas 
    tota() {

    }
}

// 1. Eu preciso pegar as transações do objeto aqui no Javascript. Uma outra forma de escrever esse passo :
  // Substituir os dados do HTML com os dados do JS
  const DOM = {
    // 3.8 Getting tbody tag 
    transactionsContainer: document.querySelector('#data-table tbody'),

    // 3. Essa função vai trabalhar com a função innerHTMLTransaction(). Ela vai pegar as transações e coloca-las no HTML
    addTransaction(transaction, index) {
      // 3.1 Vamos criar a tag tr, assim podemos apagar o tr da variavel html abaixo
      const tr = document.createElement('tr');
      // 3.2 Adicionar a essa tag o conteudo da variavel html, para isso precisamos retornar esta constante cf. 3.3
      tr.innerHTML = DOM.innerHTMLTransaction(transaction);
      // 3.4 Agora precisar chamar este método cf. 3.5
      
      // 3.9 Agora que recuperamos a tag tbody, podemos "colar" o que criamos dentro dela
      DOM.transactionsContainer.appendChild(tr);
    },

    // 2. Essa função vai me permitir substituir os dados do HTML
    innerHTMLTransaction(transaction) {
        // 5. Gerando as cores das transaçoes se é positiva ou negativa
        const CSSclass = transaction.amount > 0 ? "income" : "expense";

        // 3.7 Podemos recuperar os dados do vetor transactions e substituir os valores no html

        // Lembrete: `` (template literals) nos permete usar variaveis dentro (interpolação) e nesse caso podemos usar um bloco de codigo html sem ter erros, que seria o caso com "" e ''
      const html = `
          <td class="description">${transaction.description}</td>
          <td class="${CSSclass}">${transaction.amount}</td>
          <td class="date">${transaction.date}</td>
          <td>
            <img src="./assets/minus.svg" alt="Remover transação">
          </td>
      `
      // 3.3 Retornar html para poder recupera-la na funcão addTransaction
      return html;
    }
}

// 4. Para mostrar todos os dados do vetor, fazemos um loop e passamos como argumento à chamada da funçao
transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction);
})