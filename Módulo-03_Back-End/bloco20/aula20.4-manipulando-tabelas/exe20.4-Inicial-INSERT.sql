-- Insira um novo funcionário na tabela sakila.staff .
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!

USE sakila;
SELECT * FROM staff;
INSERT INTO staff (first_name, last_name, address_id, store_id, active, username)
VALUES ('ARTHUR', 'HORMAN', 6, 1, 1, 'BIRA');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .

INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
  (
    'ANDRE',
    'HORMAN',
    2,
    'andre.horman1994@hotmail.com',
    1,
    1,
    'ANDREHORMAN',
    123
  ),
  (
    'ALEX',
    'HORMAN',
    5,
    NULL,
    2,
    0,
    'TOIN',
    NULL
  );

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .

SELECT * FROM customer;
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer LIMIT 5;
SELECT * FROM actor ORDER BY actor_id DESC;

-- Cadastre três categorias de uma vez só na tabela sakila.category .

SELECT * FROM category ORDER BY category_id DESC;
INSERT INTO category (name)
VALUES
  ('ROMANCE'),
  ('TERROR'),
  ('AÇÃO');

-- Cadastre uma nova loja na tabela sakila.store .
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);
