 let nome = document.getElementById("lista-amigos").value
 let idade = document.getElementById("lista-sorteio").value;
 let amigos = [];

function adicionar () {

    const inputAmigo = document.getElementById('nome-amigo');
    const nome = inputAmigo.value.trim();
    amigos.push(nome);

}
  