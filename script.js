const nomeAmigoInput = document.getElementById('nomeAmigo');
const adicionarAmigoButton = document.getElementById('adicionarAmigo');
const listaAmigos = document.getElementById('listaAmigos');
const sortearAmigoButton = document.getElementById('sortearAmigo');
const amigoSorteadoDiv = document.getElementById('amigoSorteado');

let amigos = [];

adicionarAmigoButton.addEventListener('click', () => {
    const nomeAmigo = nomeAmigoInput.value.trim();
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }
    amigos.push(nomeAmigo);
    const li = document.createElement('li');
    li.textContent = nomeAmigo;
    listaAmigos.appendChild(li);
    nomeAmigoInput.value = '';
});

sortearAmigoButton.addEventListener('click', () => {
    if (amigos.length === 0) {
        alert('Adicione amigos à lista antes de sortear.');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    amigoSorteadoDiv.textContent = `Amigo sorteado: ${amigos[indiceSorteado]}`;
});