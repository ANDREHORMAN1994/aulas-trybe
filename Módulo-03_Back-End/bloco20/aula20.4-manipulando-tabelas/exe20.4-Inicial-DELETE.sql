-- Exclua do banco de dados o ator com o nome de "KARL".

SELECT * FROM film_actor WHERE actor_id = 12;
DELETE FROM film_actor WHERE actor_id = 12;
SELECT * FROM actor WHERE first_name = 'KARL';
DELETE FROM actor WHERE first_name = 'KARL';

-- Exclua do banco de dados os atores com o nome de "MATTHEW".

SELECT * FROM actor WHERE first_name = 'MATTHEW';
DELETE FROM film_actor WHERE actor_id IN (8, 103, 181);
DELETE FROM actor WHERE first_name = 'MATTHEW';

-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.

SELECT * FROM film_text WHERE description LIKE '%saga%';
DELETE FROM film_text WHERE description LIKE '%saga%';

-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .

SELECT * FROM film_actor;
TRUNCATE film_actor;
SELECT * FROM film_category;
TRUNCATE film_category;
