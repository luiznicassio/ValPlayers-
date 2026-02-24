//Variaveis globais 
var lista = document.querySelector('#lista_jogadores');

async function carregarJogadores(){
    try{
        //faz a requisiçao ao servidor por rota GET
        const resposta = await fetch('http://localhost:3000/listaJogadores')
        //pega os dados resebidos pela requisiçao resposta
        const dados = await resposta.json();
        
        //lê todos dados recebidos e por meio de innerHtml mostra na pagina 
        for(let i = 0; i < dados.length; i++){
        lista.innerHTML += `
            <li class="jogador-item">
                <p href="" class="item_jogadores" data-id="${dados[i].id}">
                    <img class="foto-player" src="${dados[i].foto_player}" alt="foto">
                    <span class="nick-player">${dados[i].nick}</span>
                </p>
            </li>
        `
        }
    }
    catch(error){
        console.log( "Erro: -- " + error)
        lista.innerHTML = "<br>Servidor não conectado . . . . "
    }
            
}

//carrega a funçao carregarJogadores
carregarJogadores();

//lÊ os eventos de click dos items 
document.addEventListener('click', async (e) => {
    const item = e.target.closest('.item_jogadores');
    //esse codigo pega qualquer evento de click na pagina e se o item tiver a class .item_jogadores o if é essecutado se nao, nada acontese 
    if (item) {
        //pegando o dataset do item no htnml 
        const idJogador = item.dataset.id;

        //faz a requisiçao ao servidor por rota POST, e enviando o id do item 
        const resposta = await fetch('http://localhost:3000/perfilJogador', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: idJogador
            })
        });

        //pega os dados resebidos pela requisiçao resposta
        const dados = await resposta.json();

        //redireciona o usario por meio de url e adiona os dados pegos na requisiçao 
        window.location.href =`pages/player-perfil.html?id=${dados.id}&nick=${dados.nick}`;
    }
});