-- Desafios stored procedure
-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.

USE sakila;
DELIMITER $$
CREATE PROCEDURE Exibir_10_atores_mais_populares()
BEGIN
		SELECT
				t2.actor_id,
				CONCAT(t2.first_name, ' ', t2.last_name) AS full_name,
				COUNT(t1.film_id) AS qtd_films
		FROM
				film_actor AS t1
						INNER JOIN
				actor AS t2 ON t1.actor_id = t2.actor_id
		GROUP BY t2.actor_id , full_name
		ORDER BY qtd_films DESC
		LIMIT 10;
END $$
DELIMITER ;

CALL Exibir_10_atores_mais_populares;

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.

USE sakila;
DELIMITER $$
CREATE PROCEDURE buscar_filme_por_categoria(IN category VARCHAR(50))
BEGIN
		SELECT
				t1.film_id,
				t1.title,
				t3.category_id,
				t3.`name` AS category_name
		FROM
				film AS t1
						INNER JOIN
				film_category AS t2 ON t1.film_id = t2.film_id
						INNER JOIN
				category AS t3 ON t2.category_id = t3.category_id
		WHERE
				t3.`name` = category
		ORDER BY t1.title;
END $$
DELIMITER ;

CALL buscar_filme_por_categoria('Animation');

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

USE sakila;
DELIMITER $$
CREATE PROCEDURE
		buscar_status_dos_clientes(IN email_client VARCHAR(100), OUT status_client VARCHAR(50))
BEGIN
		SELECT
				IF(`active` = 1,
						'Cliente Ativo',
						'Cliente não está ativo') AS `status` INTO status_client
		FROM
				customer
		WHERE
				email = email_client;
END $$
DELIMITER ;

CALL buscar_status_dos_clientes('MELISSA.KING@sakilacustomer.org', @status_client);
SELECT @status_client;
