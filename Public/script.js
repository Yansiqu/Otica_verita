const produtosDestaque = [
    { id: 1, nome: 'Óculos Modelo 1', preco: 'R$ 199,99', imagem: 'oculos1.jpg' },
    { id: 2, nome: 'Óculos Modelo 2', preco: 'R$ 249,99', imagem: 'oculos2.jpg' },

];

function renderizarProdutosDestaque() {
    const container = document.querySelector('.products');
    produtosDestaque.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('product');
        produtoElement.innerHTML = `
            <img src="images/${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.preco}</p>
            <button onclick="redirecionarParaWhatsApp('${produto.nome}')">Comprar</button>
        `;
        container.appendChild(produtoElement);
    });
}

function redirecionarParaWhatsApp(produtoNome) {
    const numeroTelefone = '+556235844268'; 
    const mensagem = `Olá, gostaria de mais informações sobre o produto: ${produtoNome}`;
    const urlWhatsApp = `https://wa.me/${numeroTelefone}?text=${encodeURIComponent(mensagem)}`;
    window.location.href = urlWhatsApp;
}

document.addEventListener('DOMContentLoaded', renderizarProdutosDestaque);
