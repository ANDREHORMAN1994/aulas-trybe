-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.

USE hotel;
SELECT * FROM Books;
SELECT * FROM Books_Lent;
SELECT Id, Title FROM Books AS t1
WHERE NOT EXISTS (
    SELECT * FROM Books_Lent AS t2
    WHERE t1.Id = t2.book_id
);

-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.

SELECT Id, Title FROM Books AS t1
WHERE EXISTS (
    SELECT * FROM Books_Lent AS t2
    WHERE t1.Id = t2.book_id
) AND Title LIKE '%lost%';

-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.

SELECT * FROM CarSales;
SELECT * FROM Customers;
SELECT Name FROM Customers AS t1
WHERE NOT EXISTS (
    SELECT * FROM CarSales AS t2
    WHERE t1.CustomerId = t2.CustomerID
);

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.

SELECT t1.Name, t3.Name
FROM Customers AS t1
INNER JOIN CarSales AS t2
ON t1.CustomerId = t2.CustomerID
INNER JOIN Cars AS t3
ON t2.CarID = t3.Id
WHERE EXISTS (
  SELECT * FROM CarSales AS t2
  WHERE t1.CustomerId = t2.CustomerID
);
