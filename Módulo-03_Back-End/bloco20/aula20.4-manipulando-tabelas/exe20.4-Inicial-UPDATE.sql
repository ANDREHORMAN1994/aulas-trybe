-- Como o banco pode ser apagado e recriado infinitamente, vamos desabilitar o --safe-updates nos exercícios. Além disso, esse modo pode ser habilitado novamente quando necessário. Rode o seguinte comando em uma janela de query dentro do MySQL Workbench sempre que abri-lo para desabilitar essa funcionalidade, antes de executar seus comandos UPDATE ou DELETE :

SET SQL_SAFE_UPDATES = 0;

-- Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".

USE saquila;
SELECT * FROM actor;
SELECT * FROM actor WHERE first_name = 'JULIA';
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';
SELECT * FROM actor WHERE first_name = 'JULES';

-- Foi exigido que a categoria "Sci-Fi" seja alterada para "Science Fiction".

SELECT * FROM category;
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

-- Atualize o valor do aluguel para $25 de todos os filmes com duração maior que 100 minutos e que possuem a classificações "G" , "PG" ou "PG-13" e um custo de substituição maior que $20.

SELECT * FROM film;
SELECT title, rental_rate, replacement_cost, length, rating FROM film;
UPDATE film 
SET 
    rental_rate = 25
WHERE
    length > 100
        AND rating IN ('G' , 'PG', 'PG-13')
        AND replacement_cost > 20;

-- Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.

SELECT title, rental_rate, length FROM film;
UPDATE film 
SET 
    rental_rate = (CASE
        WHEN length BETWEEN 0 AND 100 THEN 10
        WHEN length > 100 THEN 20
        ELSE rental_rate
    END);
