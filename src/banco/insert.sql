-- INSERT's PARA TABELA USUÁRIOS

INSERT INTO usuarios (usu_nome, usu_cpf, usu_data_nasc, usu_sexo, usu_telefone, usu_email, usu_observ, usu_acesso, usu_senha) VALUES
                     ('José Oliveira', '321.654.987-00', '1995-10-20', 1, '(11) 5432-1098', 'jose@example.com', 'Observações sobre Jose Oliveira.', 0, 'jose789'),
                     ('João da Silva', '111.222.333-44', '1988-03-10', 1, '(11) 2222-3333', 'joao@example.com', 'Observações sobre João da Silva.', 0, 'joao123'),
                     ('Maria Oliveira', '555.666.777-88', '1992-08-25', 0, '(11) 4444-5555', 'maria@example.com', 'Observações sobre Maria Oliveira.', 0, 'maria456'),
                     ('Pedro Santos', '999.888.777-66', '1980-12-05', 1, '(11) 7777-8888', 'pedro@example.com', 'Observações sobre Pedro Santos.', 0, 'pedro789');
                    


insert into categorias (cat_id, cat_nome) VALUES
                        (1, 'Carro')
                        (2, 'Caminhao')
                        (3, 'Moto')
                        (4, 'Nautica')