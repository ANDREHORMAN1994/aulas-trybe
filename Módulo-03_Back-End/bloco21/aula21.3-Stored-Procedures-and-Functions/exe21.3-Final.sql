-- Para realizar os exercícios a seguir, execute este script:

CREATE DATABASE IF NOT EXISTS BeeMovies;

USE BeeMovies;

CREATE TABLE movies(
    movie_id INT PRIMARY KEY auto_increment,
    ticket_price DECIMAL(12, 2) NOT NULL DEFAULT 0,
    ticket_price_estimation VARCHAR(15),
    release_year YEAR
) engine = InnoDB;

CREATE TABLE movies_logs(
    log_id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    action VARCHAR(15) NOT NULL,
    log_date DATE NOT NULL
) engine = InnoDB;

-- Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano. Além disso, crie um outro Trigger para INSERT que adiciona um novo registro na tabela movies_logs , informando o movie_id do filme que acaba de ser inserido na tabela movies , a action como 'INSERT' e a log_date como a data atual.

USE BeeMovies;
DELIMITER $$
CREATE TRIGGER trigger_movies_insert_year
BEFORE INSERT ON movies
FOR EACH ROW
BEGIN
		SET NEW.release_year = NOW();
END $$
DELIMITER ;

DELIMITER $$
CREATE TRIGGER trigger_movies_insert_movies_logs
AFTER INSERT ON movies
FOR EACH ROW
BEGIN
    INSERT INTO movies_logs(movie_id, `action`, log_date)
    VALUES (NEW.movie_id, 'INSERT', NOW());
END $$
DELIMITER ;

SELECT * FROM movies;
SELECT * FROM movies_logs;

INSERT INTO movies(ticket_price, ticket_price_estimation)
VALUES(200, 'VENHA VER');

-- Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies , deve comparar o valor anterior de ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing' . Caso contrário, insira o valor 'Decreasing' . Adicionalmente, insira um novo registro na tabela movies_logs , contendo informações sobre o registro alterado ( movie_id , action e log_date ).

USE BeeMovies;
DELIMITER $$
CREATE TRIGGER trigger_movies_update
BEFORE UPDATE ON movies
FOR EACH ROW
BEGIN
		SET NEW.ticket_price_estimation = 
				IF (NEW.ticket_price > OLD.ticket_price,
						'Increasing',
						'Decreasing'),
				NEW.release_year = NOW();
		INSERT INTO movies_logs(movie_id, `action`, log_date)
    VALUES(OLD.movie_id, 'UPDATE', NOW());
END $$
DELIMITER ;

SELECT * FROM movies;
SELECT * FROM movies_logs;

INSERT INTO movies(ticket_price, ticket_price_estimation)
VALUES(200, 'VENHA VER');

UPDATE movies
SET ticket_price = 500.99
WHERE movie_id = 2;

-- Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma informação para a tabela movies_logs , onde devem ser guardados a data da exclusão, a action 'DELETE' e o id do filme excluído.

USE BeeMovies;
DELIMITER $$
CREATE TRIGGER trigger_movies_delete
AFTER DELETE ON movies
FOR EACH ROW
BEGIN
		INSERT INTO movies_logs(movie_id, action, log_date)
    VALUES(OLD.movie_id, 'DELETE', NOW());
END $$
DELIMITER ;

SELECT * FROM movies;
SELECT * FROM movies_logs;

INSERT INTO movies(ticket_price, ticket_price_estimation)
VALUES(200, 'VENHA VER');

UPDATE movies
SET ticket_price = 500.99
WHERE movie_id = 2;

DELETE FROM movies WHERE movie_id = 2;
