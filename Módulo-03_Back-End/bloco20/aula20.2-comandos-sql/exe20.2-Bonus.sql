-- Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:

DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  Code INTEGER PRIMARY KEY NOT NULL,
  Name TEXT NOT NULL
);

CREATE TABLE Providers (
  Code VARCHAR(40) PRIMARY KEY NOT NULL,  
  Name TEXT NOT NULL
);

CREATE TABLE Provides (
  Piece INTEGER,
  FOREIGN KEY (Piece) REFERENCES Pieces (Code),
  Provider VARCHAR(40),
  FOREIGN KEY (Provider) REFERENCES Providers (Code),
  Price INTEGER NOT NULL,
  PRIMARY KEY (Piece , Provider)
);
 
INSERT INTO Providers(Code, Name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(Code, Name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(Piece, Provider, Price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);

-- Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos deste link .
-- Escreva uma query para ordernar o nome das empresas de forma alfabética descendente e que retorne somente o código e o nome da primeira empresa.
USE PiecesProviders;
SELECT * FROM Providers;
SELECT Code, Name FROM Providers ORDER BY Name DESC LIMIT 1;
-- Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT * FROM Provides ORDER BY Price DESC LIMIT 5;
-- Escreva uma query para exibir o nome das empresas e preço das peças, começando a lista a partir do 3º item, e exibindo o preço das quatro peças mais caras.
SELECT * FROM Provides;
SELECT 
    Provider AS 'nome', Price AS 'Preço'
FROM
    Provides
ORDER BY Price DESC
LIMIT 4 OFFSET 3;
-- Escreva uma query para exibir a string "A peça mais cara é a: Piece , provida pela empresa Provider e custa Price reais.", essa query deve retornar somene uma única string, sendo que Price se refere ao maior preço.
SELECT 
    CONCAT('A peça mais cara é a:',
            ' ',
            Piece,
            ' ',
            'provida pela empresa',
            ' ',
            Provider,
            ' ',
            'e custa',
            ' ',
            Price,
            ' ',
            'reais.') AS INFO
FROM
    Provides
ORDER BY Price DESC
LIMIT 1;
