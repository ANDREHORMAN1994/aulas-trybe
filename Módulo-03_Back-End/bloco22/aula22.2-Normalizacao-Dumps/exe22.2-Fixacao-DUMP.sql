-- Selecione um dos bancos de dados já existentes no seu servidor local ( w3schools , northwind , sakila , hr etc.) e faça os passos a seguir:
-- Exporte a estrutura e os dados (tabelas, triggers, procedures, functions e o schema ) para um dump em formato de arquivo SQL, como foi exibido nas instruções anteriores. Faça o dump através da linha de comando e usando o MySQL Workbench .

mysql -u root -p zoologico > backup_zoologico.sql

-- Confira que, ao executar os comandos para restaurar o dump , um novo banco de dados foi criado, como na imagem abaixo.

mysql -u root -p zoologico < backup_zoologico.sql
