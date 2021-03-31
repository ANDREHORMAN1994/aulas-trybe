-- Vamos construir um banco de dados chamado faculdade  e dentro dele vamos criar uma tabela chamada biblioteca. (copie e cole o script abaixo dentro do seu Workbench)

CREATE database IF NOT EXISTS faculdade;
USE faculdade;
CREATE TABLE IF NOT EXISTS biblioteca (
    `nome` VARCHAR(40) CHARACTER SET utf8,
    `emprestado` VARCHAR(3) CHARACTER SET utf8,
    `quantidade` INT,
    `ano_lancamento` INT,
    `vendas` INT
);
INSERT INTO faculdade.biblioteca VALUES
    ('Um Livro do Ano','Não',5,2019,350),
    ('Novas conquistas novas responsabilidades','Sim',10,2020,1412),
    ('O retorno do Jedi','Não',6,2019,845),
    ('Café ou Chá, eis a questão','Não',13,2020,1337);

-- Com o banco de dados criado, vamos aos requisitos:
-- Eu quero somente os nomes dos livros cadastrados na biblioteca;
USE faculdade;
SELECT * FROM biblioteca;
SELECT nome FROM biblioteca;
-- Eu quero saber quantos livros temos cadastrados em nossa biblioteca;
SELECT COUNT(*) FROM biblioteca;
-- Eu quero uma lista com 2 livros e suas informações, mas eu não quero o livro 'Um livro do Ano' e 'Novas conquistas novas responsabilidades';
SELECT * FROM biblioteca LIMIT 4 OFFSET 2;
-- Quero os livros mais recentes primeiro, e também em ordem alfabética;
SELECT 
    nome, ano_lancamento
FROM
    biblioteca
ORDER BY ano_lancamento DESC , nome ASC;
-- Eu quero todas as informações do livro com maior estoque na biblioteca. Somente o com o maior estoque;
SELECT * FROM biblioteca ORDER BY quantidade DESC LIMIT 1;
-- Eu quero criar uma lista com os 4 livros mais vendidos. Como poderia encontrar isso?
SELECT * FROM biblioteca ORDER BY vendas DESC LIMIT 4;
SELECT nome, vendas FROM biblioteca ORDER BY vendas DESC LIMIT 4;
