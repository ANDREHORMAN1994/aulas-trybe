-- 1. (tabela city) Usando o CountryCode, mostre a média populacional por país. E arredonde o valor para o mais próximo.

USE world;
SELECT * FROM city;
SELECT CountryCode, ROUND(AVG(Population)) AS average_population FROM city
GROUP BY CountryCode;

-- 2. (tabela city) Usando o CountryCode, mostre a população máxima por país.

SELECT CountryCode, MAX(Population) FROM city
GROUP BY CountryCode;

-- 3. (tabela city) Usando o CountryCode, mostre a população mínima por país.

SELECT CountryCode, MIN(Population) FROM city
GROUP BY CountryCode;

-- 4. (tabela country) Faça um agrupamento pelo continente, e mostre quantos países tem em cada um, e ordene do mais populoso para o menos populoso.

SELECT * FROM country;
SELECT Continent, COUNT(Name) AS Qtd FROM country
GROUP BY Continent
ORDER BY Qtd DESC;

-- 5. (tabela countrylanguage) Usando a coluna CountryCode, mostre a quantidade de línguas faladas em cada país, mas filtre apenas pelos países que falem pelo menos 10 línguas

SELECT * FROM countrylanguage;
SELECT CountryCode, COUNT(Language) AS qtd_language FROM countrylanguage
GROUP BY CountryCode
HAVING qtd_language >= 10
ORDER BY qtd_language ASC;
