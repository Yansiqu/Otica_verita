
async function carregarProdutos() {
    try {
        const response = await fetch('produtos.json'); 
        const produtos = await response.json(); 
        exibirProdutos(produtos); 
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error); 
    }
}


function exibirProdutos(produtos) {
    const container = document.getElementById('produtos-container');

    produtos.forEach(produto => {
        const produtoItem = document.createElement('div');
        produtoItem.className = 'produto-item';
        produtoItem.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco}</p>
            <button onclick="comprarProduto('${encodeURIComponent(produto.nome)}')">Comprar</button>
        `;
        container.appendChild(produtoItem);
    });
}

function comprarProduto(nomeProduto) {
    const telefone = '6235844268'; 
    const mensagem = `Olá, estou interessado no produto: ${decodeURIComponent(nomeProduto)}`;
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    window.location.href = url;
}


window.onload = carregarProdutos;
