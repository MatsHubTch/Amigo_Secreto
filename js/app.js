 let amigos = [];

function adicionar() {
   
    nomeamigo = document.getElementById('nome-amigo');
   nome = nomeamigo.value.trim(); 
   if (nome === "") return; 
    console.log(nome);
    amigos.push(nome);

    console.log(amigos); 
    let campoListaAmigos = document.getElementById('lista-amigos');
    campoListaAmigos.textContent = amigos.join(', ');

    nomeamigo.value = '';
}

function sortear() {

 if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos!');
        return;

}

amigos.sort(() => Math.random() - 0.5);
 let sorteado;
  sorteado = amigos[0];
}