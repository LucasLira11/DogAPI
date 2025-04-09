const imagens = [];

document.getElementById('formIncluir')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const imageUrl = document.getElementById('imageUrl').value;
    if (imageUrl) {
        imagens.push(imageUrl);
        document.getElementById('mensagem').textContent = 'Imagem adicionada com sucesso!';
        document.getElementById('formIncluir').reset();
    }
});

function listarImagens() {
    const listaImagens = document.getElementById('listaImagens');
    listaImagens.innerHTML = '';

    if (imagens.length === 0) {
        fetch('https://dog.ceo/api/breeds/image/random/5')
            .then(response => response.json())
            .then(data => {
                data.message.forEach(url => {
                    const img = document.createElement('img');
                    img.src = url;
                    img.alt = 'Imagem de um cão';
                    img.style.width = '200px';
                    listaImagens.appendChild(img);
                });
            })
            .catch(error => console.error('Erro ao buscar imagens:', error));
    } else {
        imagens.forEach(url => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = 'Imagem de um cão';
            img.style.width = '200px';
            listaImagens.appendChild(img);
        });
    }
}
