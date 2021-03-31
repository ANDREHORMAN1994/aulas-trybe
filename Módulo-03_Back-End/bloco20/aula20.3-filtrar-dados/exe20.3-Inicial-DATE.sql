-- Quantos aluguéis temos com a data de retorno 2005-08-29 ? Há múltiplas maneiras possíveis de encontrar a resposta.

USE saquila;
SELECT * FROM rental;
SELECT * FROM rental WHERE DATE(return_date) = '2005-08-29';

-- Quantos filmes foram alugados entre 01/07/2005 e 22/08/2005 ?

SELECT 
    *
FROM
    rental
WHERE
    DATE(rental_date) BETWEEN '2005-07/01' AND '2005-08-22'
ORDER BY
    rental_date DESC;

-- Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330.

SELECT * FROM rental WHERE rental_id = '10330';
SELECT DATE(rental_date) FROM rental WHERE rental_id = '10330';
SELECT YEAR(rental_date) FROM rental WHERE rental_id = '10330';
SELECT MONTH(rental_date) FROM rental WHERE rental_id = '10330';
SELECT DAY(rental_date) FROM rental WHERE rental_id = '10330';
SELECT HOUR(rental_date) FROM rental WHERE rental_id = '10330';
SELECT MINUTE(rental_date) FROM rental WHERE rental_id = '10330';
SELECT SECOND(rental_date) FROM rental WHERE rental_id = '10330';

-- Monte uma query que encontre o id e a data de aluguel do filme que foi alugado no dia 18/08/2005 às 00:14:03.

SELECT * FROM rental;
SELECT 
    rental_id, rental_date
FROM
    rental
WHERE
    rental_date LIKE '2005-08-18 00:14:03';
