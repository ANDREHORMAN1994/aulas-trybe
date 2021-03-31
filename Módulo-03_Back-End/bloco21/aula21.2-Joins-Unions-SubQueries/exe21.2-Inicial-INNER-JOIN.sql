-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .

USE sakila;
SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT ac.actor_id, ac.first_name, fa.film_id
FROM actor AS ac
INNER JOIN film_actor AS fa
ON ac.actor_id = fa.actor_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .

USE sakila;
SELECT * FROM staff;
SELECT * FROM address;
SELECT s.first_name, s.last_name, a.address
FROM staff AS s
INNER JOIN address AS a
ON s.address_id = a.address_id;

-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .

SELECT * FROM customer;
SELECT * FROM address;
SELECT 
    cu.customer_id,
    CONCAT(cu.first_name, ' ', cu.last_name) AS full_name,
    cu.email,
    cu.address_id,
    ad.address
FROM
    customer AS cu
INNER JOIN
    address AS ad
ON cu.address_id = ad.address_id
ORDER BY full_name DESC
LIMIT 100;

-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .

SELECT cu.first_name, cu.email, cu.address_id, ad.address, ad.district
FROM customer AS cu
INNER JOIN address AS ad
ON cu.address_id = ad.address_id
WHERE
    ad.district = 'California' 
    AND cu.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .

SELECT cu.first_name, cu.active, COUNT(ad.address) AS qtd_address
FROM customer AS cu
INNER JOIN address AS ad
ON cu.address_id = ad.address_id
WHERE cu.active = 1
GROUP BY cu.first_name
ORDER BY cu.first_name DESC;

-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

SELECT 
    s.first_name,
    s.last_name,
    YEAR(payment_date) `year`,
    AVG(p.amount) AS avg_amount
FROM
    staff AS s
        INNER JOIN
    payment AS p ON s.staff_id = p.staff_id
WHERE
    YEAR(payment_date) = 2006
GROUP BY s.first_name , s.last_name , payment_date;

-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .

SELECT * FROM actor;
SELECT * FROM film_actor;
SELECT * FROM film;
SELECT 
    ac.actor_id,
    CONCAT(ac.first_name, ' ', ac.last_name) AS full_name,
    fa.film_id,
    fi.title
FROM actor AS ac
INNER JOIN film_actor AS fa
ON ac.actor_id = fa.actor_id
INNER JOIN film AS fi
ON fa.film_id = fi.film_id;
