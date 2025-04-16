
const button = document.createElement('button');
button.textContent = 'Clique para ver uma mensagem aqui';
document.body.appendChild(button);

const messageContainer = document.createElement('div');
messageContainer.style.marginTop = '10px';
document.body.appendChild(messageContainer);

button.addEventListener('click', () => {
    messageContainer.textContent = '"Você não pode mudar o vento, mas pode ajustar as velas do barco para chegar onde quer."';
});