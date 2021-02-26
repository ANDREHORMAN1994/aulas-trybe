-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.

USE sakila;
SELECT * FROM film;
SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM film AS t1, film AS t2
WHERE 
    t1.replacement_cost = t2.replacement_cost
      AND t1.film_id <> t2.film_id;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.

SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM film AS t1, film AS t2
WHERE 
    t1.rental_duration = t2.rental_duration AND
    t1.rental_duration BETWEEN 2 AND 4;
