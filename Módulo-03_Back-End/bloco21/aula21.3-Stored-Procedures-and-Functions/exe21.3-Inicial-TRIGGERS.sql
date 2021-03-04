-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .

USE betrybe_automoveis;
DELIMITER $$
CREATE TRIGGER trigger_carros_insert
BEFORE INSERT ON carros
FOR EACH ROW
BEGIN
		SET NEW.data_atualizacao = now(),
				NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

SELECT * FROM carros;
INSERT INTO carros(preco) VALUES (5000);

-- Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' .

USE betrybe_automoveis
DELIMITER $$
CREATE TRIGGER trigger_carros_update
BEFORE UPDATE ON carros
FOR EACH ROW
BEGIN
		SET NEW.data_atualizacao = now(),
				NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;

SELECT * FROM carros;
UPDATE carros
SET preco = 2
WHERE id_carro = 2;

-- Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.

USE betrybe_automoveis
DELIMITER $$
CREATE TRIGGER trigger_carros_delete
AFTER DELETE ON carros
FOR EACH ROW
BEGIN
		INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$
DELIMITER ;

SELECT * FROM log_operacoes;
SELECT * FROM carros;

DELETE FROM carros WHERE id_carro = 2;
