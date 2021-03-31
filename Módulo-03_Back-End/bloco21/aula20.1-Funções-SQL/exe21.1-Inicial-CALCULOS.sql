-- Dica: Números pares são aqueles que podem ser divididos em duas partes iguais. Ou seja, são aqueles cuja divisão por 2 retorna resto 0. Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.

SELECT 15, IF (15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas podemos levar ao cinema sem que ninguém fique de fora?

SELECT 220 DIV 12;

-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?

SELECT 220 - (220 DIV 12) * 12;

-- Monte uma query que gere um valor entre 15 e 20 .

SELECT ROUND(RAND() * 5 + 15);

-- Monte uma query que exiba o valor arredondado de 15.75 com uma precisão de 5 casas decimais.

SELECT ROUND(15.75000, 2);

-- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?

SELECT FLOOR(39.494);

-- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?

SELECT CEIL(85.234);

-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.

SELECT DATEDIFF('2030-01-20', CURRENT_DATE());

-- Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00' .

SELECT TIMEDIFF('10:25:45', '11:00:00');

-- Monte um query que exiba:
  -- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';

SELECT * FROM film;
SELECT AVG(length) AS 'Média de Duração' FROM film;

  -- A duração mínima dos filmes como 'Duração Mínima';

SELECT MIN(length) AS 'Duração Mínima' FROM film;

  -- A duração máxima dos filmes como 'Duração Máxima';

SELECT MAX(length) AS 'Duração Máxima' FROM film;

  -- A soma de todas as durações como 'Tempo de Exibição Total';

SELECT SUM(length) AS 'Tempo de Exibição Total' FROM film;

  -- E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.

SELECT COUNT(*) AS 'Filmes Registrados' FROM film;

-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.

USE sakila;
SELECT * FROM customer;
SELECT `active`, COUNT(*) FROM customer GROUP BY `active`;

-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status .

SELECT store_id, active, COUNT(*)
FROM sakila.customer
GROUP BY store_id, active;

-- Monte uma query que exiba a média de duração por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.

SELECT rating, AVG(length) FROM film
GROUP BY rating
ORDER BY AVG(length) DESC;

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.

SELECT * FROM address;
SELECT district, COUNT(address) AS Qtd_Address FROM address
GROUP BY district
ORDER BY Qtd_Address DESC;

-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

    SELECT rating, AVG(length)
    FROM sakila.film
    GROUP BY rating;

SELECT rating, AVG(length) AS average_duration
FROM sakila.film
GROUP BY rating
HAVING average_duration BETWEEN 115.0 AND 121.50
ORDER BY average_duration ASC;

-- Usando a query a seguir, exiba apenas os valores de total de substituição de custo que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

    SELECT rating, SUM(replacement_cost)
    FROM sakila.film
    GROUP by rating;

SELECT rating, SUM(replacement_cost) AS cost_total
FROM sakila.film
GROUP by rating
HAVING cost_total > 3950.50
ORDER BY cost_total ASC;
