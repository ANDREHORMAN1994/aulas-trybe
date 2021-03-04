-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .

DELIMITER $$
CREATE FUNCTION quantidade_total_pagamentos(id INT)
RETURNS INT READS SQL DATA
BEGIN
		DECLARE pagamentos_totais INT;
    SELECT COUNT(*) FROM payment
		WHERE customer_id = id
    INTO pagamentos_totais;
    RETURN pagamentos_totais;
END $$
DELIMITER ;

SELECT quantidade_total_pagamentos(1);

-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.

USE sakila;
DELIMITER $$
CREATE FUNCTION retornar_nome_de_filme_com_id(idInventory INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
		DECLARE nomeFilme VARCHAR(100);
    SELECT title
		FROM inventory AS t1
		INNER JOIN film AS t2
		ON t1.film_id = t2.film_id
		WHERE inventory_id = idInventory
    INTO nomeFilme;
		RETURN nomeFilme;
END $$
DELIMITER ;

SELECT retornar_nome_de_filme_com_id(4);

-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.

USE sakila;
DELIMITER $$
CREATE FUNCTION quantidade_filmes_pela_categoria(categoria VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
		DECLARE qtd_filmes INT;
		SELECT
				COUNT(t1.film_id)
		FROM
				film AS t1
						INNER JOIN
				film_category AS t2 ON t1.film_id = t2.film_id
						INNER JOIN
				category AS t3 ON t2.category_id = t3.category_id
		WHERE
				t3.`name` = categoria
		INTO qtd_filmes;
		RETURN qtd_filmes;
END $$
DELIMITER ;

SELECT quantidade_filmes_pela_categoria('Action');
