//variaveis globais 
const params = new URLSearchParams(window.location.search);
var perfil = document.querySelector('.dados');
var titulos = document.querySelector('.conquistas');
const id = params.get('id');    
const nick = params.get('nick');
const fotoPlayer = document.querySelector('.foto-player');

//funçao para culcular a idade de um jogador baseado na sua data de nascimento 
function calculoIdade(datanasc){
    const hoje = new Date();
    const nasc = new Date(datanasc)
    let idade = hoje.getFullYear() - nasc.getFullYear();
    const m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) {
        idade--;
    }
  return idade;
}


//Buscar daos do jogador no servidor 
async function dadosJogador(){
 try{
    //faz a requiseçao ao servidor 
    const resposta = await fetch('http://localhost:3000/perfilJogador',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
    })
    //Pega os dados resebidos pela requisiçao 
    const dados = await resposta.json();

    //ativa a funçao calcular idade
    const jogadorIdade =  calculoIdade(dados.nascimento);

    //CRIANDO A PAGINA 
    perfil.innerHTML = `
      
                <div class="foto-player">
                    <img src="../${dados.foto_player}" alt="">
                </div>
                <div class="dados-player">
                    <h2 id="dados-nick">${dados.nick}</h2>
                    <h2 id="dados-nome"  style="margin-top: 10px;">${dados.nome}</h2>
                    <img src="../img/bandeiras/${dados.nacionalidade}.png" id="nacionalidade" alt="${dados.nacionalidade}" title="${dados.nacionalidade}"  style="margin-top: 10px;" >

                    <div class="dados-info">
                        Idade: <strong>${jogadorIdade} anos</strong>
                    </div>

                    <div class="dados-info">
                        Time atual: 
                        <div id="time_atual">
                            <img src="../img/times/${dados.Time.logo_url}" alt=""><p  title="${dados.Time.nome}">${dados.Time.tag}</p>
                        </div>
                    </div>

                    <!--  
                    comentario
                    <div id="achievements">
                        <p>Conquistas:</p>
                        <div>1 x Champions Winner</div>
                    </div>
                    --> 
                </div>
         
    `
   
  if(dados.Titulos.length > 0){ 
   
    for(var i = 0 ;i < dados.Titulos.length;i++){
         titulos.innerHTML += `
        <div class="conquista_item" title="${dados.Titulos[i].nome_campeonato}">
            <img src="../img/titulos/${dados.Titulos[i].imagem_trofeu}" >
        </div>
        `

    }
    
  }  

  const fotoPlayer = document.querySelector('.foto-player');
  fotoPlayer.style.backgroundImage = `url('../img/times/${dados.Time.logo_url}')`;

  console.log(dados) 
 }catch(erro){
    console.log( "Erro: -- " + erro)
    alert(erro)
 }}

 //Ativa a funçao para buscar os dados 
 dadosJogador();