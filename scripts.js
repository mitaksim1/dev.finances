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

    // 3. Essa função vai trabalhar com a função innerHTMLTransaction(). Ela vai pegar as transações e coloca-las no HTML
    addTransaction(transaction, index) {
      // 3.1 Vamos criar a tag tr, assim podemos apagar o tr da variavel html abaixo
      const tr = document.createElement('tr');
      // 3.2 Adicionar a essa tag o conteudo da variavel html, para isso precisamos retornar esta constante cf. 3.3
      tr.innerHTML = DOM.innerHTMLTransaction(transaction);
      // 3.4 Agora precisar chamar este método cf. 3.5
      console.log(tr.innerHTML);
    },

    // 2. Essa função vai me permitir substituir os dados do HTML
    innerHTMLTransaction(transaction) {
        // 3.7 Podemos recuperar os dados do vetor transactions e substituir os valores no html

        // Lembrete: `` (template literals) nos permete usar variaveis dentro (interpolação) e nesse caso podemos usar um bloco de codigo html sem ter erros, que seria o caso com "" e ''
      const html = `
          <td class="description">${transaction.description}</td>
          <td class="expense">- ${transaction.amount}</td>
          <td class="date">${transaction.date}</td>
          <td>
            <img src="./assets/minus.svg" alt="Remover transação">
          </td>
      `
      // 3.3 Retornar html para poder recupera-la na funcão addTransaction
      return html;
    }
}

// 3.5 Chamando o método addTransaction() para que funcione
DOM.addTransaction(transactions[2]);
// 3.6 Agora que passamos o argumento que queremos recuperar, passamos o paramêtro transaction para a função innerHTMLtransaction(), assim teremos acesso à ela dentro da funçao cf. 3.7

// 2. e colocar la no HTML 