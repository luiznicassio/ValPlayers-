CREATE TABLE if not exists times (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tag VARCHAR(10),             -- Ex: 'MIBR', 'LOUD'
    logo_url VARCHAR(255),       -- Ex: 'img/times/mibr.png'
    liga VARCHAR(50)             -- Ex: 'Americas', 'EMEA', 'Pacific', 'China'
);
desc times;
select * from times;

 -- insert into times (nome,tag,logo_url,liga) values ('Sentinels ','SEN','logo-SEN.png','Americas');

create table if not exists jogadores(
	id int not null auto_increment primary key, 
    nick varchar (50) not null, 
    nome varchar(150), 
    nascimento date,
    nacionalidade varchar(50) default 'Brasil', 
    foto_player varchar(255),
    time_id int,
    FOREIGN KEY (time_id) REFERENCES times(id) ON DELETE SET NULL
);
desc jogadores;
select * from jogadores;



-- insert into jogadores (nick,nome,nascimento,nacionalidade,foto_player,time_id) values
 -- ('tex','Ian Botsch','1999-08-2','Germany','img/jogadores/foto-tex-ian-botsch.png',1);

create table if not exists titulos(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome_campeonato VARCHAR(150) NOT NULL, -- Ex: 'VALORANT Champions 2022'
    imagem_trofeu VARCHAR(255),            -- Ex: 'img/titulos/trofeu_champions.png'
    data_conquista DATE
);
desc titulos;
select * from titulos;

-- update titulos set imagem_trofeu = "trofeu_champions.png" where id = 1;

 -- insert into titulos (nome_campeonato,imagem_trofeu,data_conquista) values ('Champions Tour 2024: Masters Madrid','Masters_Madrid_2024.png','2024-03-24');


create table if not exists jogador_titulos(
	id INT AUTO_INCREMENT PRIMARY KEY,
    jogador_id INT,
    titulo_id INT,
    time_id INT, -- O time que o jogador defendia quando ganhou este título
    FOREIGN KEY (jogador_id) REFERENCES jogadores(id) ON DELETE CASCADE,
    FOREIGN KEY (titulo_id) REFERENCES titulos(id) ON DELETE CASCADE,
    FOREIGN KEY (time_id) REFERENCES times(id) ON DELETE SET NULL
);
desc jogador_titulos;
select * from jogador_titulos;

-- update jogador_titulos set time_id = 2 where id = 1;
--  insert into jogador_titulos (jogador_id,titulo_id,time_id) values (2, 4 , 4);
