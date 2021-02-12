-- Crie queries para descobrir o seguinte:
-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
USE sakila;
SELECT * FROM film;

-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação .
SELECT title FROM film;
SELECT title AS 'Título', release_year AS 'Ano', rating AS 'Classificação' FROM film;
SELECT CONCAT(title, ' ', release_year, ' ', rating) AS 'Informação' FROM film;

-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados no banco sakila .
SELECT * FROM actor;
SELECT last_name FROM actor WHERE last_name = 'KILMER';
SELECT last_name, COUNT(last_name) FROM actor GROUP BY last_name ORDER BY COUNT(last_name) DESC;
SELECT DISTINCT last_name FROM actor;

-- Quantos filmes temos cadastrados?
SELECT * FROM film;
SELECT COUNT(*) FROM film;
SELECT COUNT(DISTINCT title) FROM film;

-- Quantos clientes temos registrados?
SELECT * FROM customer;
SELECT COUNT(*) FROM customer;
SELECT COUNT(DISTINCT first_name) FROM customer;
SELECT COUNT(DISTINCT first_name, last_name) FROM customer;

-- Quantos sobrenomes únicos temos no banco de dados?
SELECT * FROM actor;
SELECT DISTINCT COUNT(last_name) FROM actor;

-- Quantas categorias de filmes o banco sakila possui?
SELECT * FROM category;
SELECT COUNT(category_id) FROM category;

-- Quantos países são atendidos pela sakila?
SELECT * FROM country;
SELECT COUNT(*) FROM country;

-- Vá até a tabela language do sakila e crie uma pesquisa que mostre os 5 idiomas cadastrados , mas não mostre o idioma english .
SELECT * FROM language;
SELECT DISTINCT name FROM language LIMIT 5 OFFSET 1;

-- Vá até a tabela film e selecione todos os dados da tabela. Pronto, fez isso?
SELECT * FROM film;

-- Agora vamos tentar fazer o seguinte: Crie uma query para encontrar os 20 primeiros filmes , incluindo o título , o ano de lançamento , a duração , a classificação indicativa e o custo de substituição . Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
SELECT * FROM film;
SELECT DISTINCT
    title AS 'Título',
    release_year AS 'Ano Lançamento',
    rental_duration AS 'Duração',
    rating AS 'Classificação',
    replacement_cost AS 'Custo'
FROM
    film
ORDER BY 
  rental_duration DESC,
  replacement_cost ASC
LIMIT 20;
