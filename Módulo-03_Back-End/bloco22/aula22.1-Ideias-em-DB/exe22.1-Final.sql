-- Caso não tenha feito ainda, refaça o banco de dados albuns por conta própria, como está descrito na seção " Hora de mexer os dedos ".

CREATE DATABASE IF NOT EXISTS album_musicas;
USE album_musicas;

CREATE TABLE artista(
		artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE estilo_musical (
		estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE album (
		album_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    preco DOUBLE NOT NULL,
    artista_id INT NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artista_id) REFERENCES artista(artista_id),
    FOREIGN KEY (estilo_id) REFERENCES estilo_musical(estilo_id)
) ENGINE = InnoDB;

CREATE TABLE cancao(
		cancao_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES album(album_id)
) ENGINE = InnoDB;

-- Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:
-- Nome;
-- Espécie;
-- Sexo;
-- Idade;
-- Localização. Cada animal também possui um cuidador, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui um gerente, sendo que cada gerente pode ser responsável por mais de um cuidador. Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE gerente(
		gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE cuidadores(
		cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
) ENGINE = InnoDB;

CREATE TABLE animais(
		anima_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(100) NOT NULL,
    sexo VARCHAR(100) NOT NULL,
    idade INT NOT NULL,
    localizacao VARCHAR(100) NOT NULL,
    cuidador_id INT NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id),
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
) ENGINE = InnoDB;
