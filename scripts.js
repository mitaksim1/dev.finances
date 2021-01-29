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
