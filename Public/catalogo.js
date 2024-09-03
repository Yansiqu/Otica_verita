const produtos = [
    { id: 1, nome: 'Óculos Modelo 1', preco: 'R$ 199,99', imagem: 'images/oculos1.jpg' },
    { id: 2, nome: 'Óculos Modelo 2', preco: 'R$ 249,99', imagem: 'images/oculos2.jpg' },
   
];

function renderizarProdutos() {
    const container = document.querySelector('.products');
    produtos.forEach(produto => {
        const produtoElement = document.createElement('div');
        produtoElement.classList.add('product');
        produtoElement.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>${produto.preco}</p>
            <a href="https://api.whatsapp.com/send?phone=+556235844268&text=Quero%20comprar%20o%20produto%20${encodeURIComponent(produto.nome)}" class="buy-button">Comprar</a>
        `;
        container.appendChild(produtoElement);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProdutos);

