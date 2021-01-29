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
      date: '23/01/2021',
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
    // 2. Essa função vai me permitir substituir os dados do HTML
    innerHTMLTransaction() {
        // Lembrete: `` (template literals) nos permete usar variaveis dentro (interpolação) e nesse caso podemos usar um bloco de codigo html sem ter erros, que seria o caso com "" e ''
      const html = `
        <tr>
          <td class="description">Luz</td>
          <td class="expense">- R$ 500,00</td>
          <td class="date">23/01/2021</td>
          <td>
            <img src="./assets/minus.svg" alt="Remover transação">
          </td>
        </tr>
      `
    }
}

// 2. e colocar la no HTML 
