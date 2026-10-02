let amigos = [];
let campoListaAmigos = document.getElementById('lista-amigos');
let campoListaSorteio = document.getElementById('lista-sorteio');

function adicionar() {
    let campoNome = document.getElementById('nome-amigo');
    let nome = campoNome.value.trim();
    if (nome === "") {return;}
    amigos.push(nome);
    campoListaAmigos.textContent = amigos.join(', ');
    campoNome.value = '';
}

function sortear() {
    if (amigos.length < 2) { alert('Adicione pelo menos 2 amigos!'); return;}
    let indice = Math.floor(Math.random() * amigos.length);
    let nomeSorteado = amigos[indice];
    console.log("Índice:", indice, "| Nome sorteado:", nomeSorteado);
    campoListaSorteio.textContent = nomeSorteado;
}

function reiniciar() {
    amigos = [];
    campoListaAmigos.textContent = '';
    campoListaSorteio.textContent = '';
    document.getElementById('nome-amigo').value = '';
}