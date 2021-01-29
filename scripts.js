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

  