-- Encontre todos os detalhes dos filmes que contêm a palavra " ace " no nome.
SELECT * FROM film;
SELECT * FROM film WHERE title LIKE '%ace%';
-- Encontre todos os detalhes dos filmes cujas descrições finalizam com " china ".
SELECT title, description FROM film WHERE description LIKE '%china';
-- Encontre todos os detalhes dos dois filmes cujas descrições contêm a palavra " girl " e o título finaliza com a palavra " lord ".
SELECT title, description FROM film WHERE title LIKE '%lord' AND description LIKE '%girl%';
-- Encontre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra " gon ".
SELECT title FROM film WHERE title LIKE '___gon%';
-- Encontre os dois casos em que, a partir do 4° caractere no título do filme, tem-se a palavra " gon " e a descrição contém a palavra " Documentary ".
SELECT title, description FROM film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';
-- Encontre os dois filmes cujos títulos ou finalizam com " academy " ou inciam com " mosquito ".
SELECT * FROM film WHERE title LIKE 'mosquito%' OR title LIKE '%academy';
-- Encontre os seis filmes que contêm as palavras " monkey " e " sumo " em suas descrições.
SELECT * FROM film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';