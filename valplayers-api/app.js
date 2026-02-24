//variaveis globais 
const express = require('express');
const app  = express();
const cors = require('cors');
const PORT  = 3000;

//comfg
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// --- IMPORTAR BANCO (Sequelize) ---
require('./models/associations');
const sequelize = require('./config/database');
const { Jogadores, Times, Titulos, JogadorTitulos } = require('./models/associations');



//--- rotas ---

app.get('/', (req,res)=>{
    res.send('server rodando');
});


app.get('/listaJogadores', async (req,res)=>{
    try {
        const lista = await Jogadores.findAll();
        res.json(lista);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar jogadores" });
    }
});

app.post('/perfilJogador', async (req, res) => {
    const idJogador = req.body.id;

    try {
        const dadosJogador = await Jogadores.findOne({
            where: {
                id: idJogador
            },

            include: [
                {
                    model: Times
                },

                {
                    model: Titulos,
                    through: {
                        attributes: ['time_id'] // dados da pivot
                    }
                }
            ]
        });

        res.json(dadosJogador);

    } catch (erro) {
        console.error(erro);
        res.status(500).json({ erro: 'Erro ao buscar jogador' });
    }
});

//abrindo o servidor 
app.listen(PORT,()=>{
    console.log('server rodando em http://localhost:3000');
});

