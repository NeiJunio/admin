CREATE TABLE IF NOT EXISTS `usuarios` (
	`usu_id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`usu_nome` varchar(60) NOT NULL,
	`usu_cpf` char(14) NOT NULL,
	`usu_data_nasc` date NOT NULL,
	`usu_sexo` tinyint NOT NULL,
	`usu_telefone` varchar(20) NOT NULL,
	`usu_email` varchar(80) NOT NULL,
	`usu_observ` varchar(120) NOT NULL,
	`usu_acesso` boolean NOT NULL,
	`usu_senha` varchar(256) NOT NULL,
	PRIMARY KEY (`usu_id`)
);

CREATE TABLE IF NOT EXISTS `veiculos` (
	`veic_id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`mod_id` int NOT NULL,
	`veic_placa` varchar(10) NOT NULL,
	`veic_ano` varchar(4) NOT NULL,
	`veic_cor` varchar(15) NOT NULL,
	`veic_combustivel` varchar(20) NOT NULL,
	`veic_observ` varchar(200) NOT NULL,
	PRIMARY KEY (`veic_id`)
);

CREATE TABLE IF NOT EXISTS `servicos` (
	`serv_id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`serv_categoria` varchar(60) NOT NULL,
	`serv_nome` varchar(60) NOT NULL,
	`serv_duracao` varchar(255) NOT NULL,
	`serv_preco` decimal(7,2) NOT NULL,
	`serv_descricao` varchar(200) NOT NULL,
	`serv_situacao` bit(1) NOT NULL,
	PRIMARY KEY (`serv_id`)
);

CREATE TABLE IF NOT EXISTS `agendamentos` (
	`agend_id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`cli_id` int NOT NULL,
	`veic_id` int NOT NULL,
	`serv_id` int NOT NULL,
	`agend_data` int NOT NULL,
	`agend_horario` int NOT NULL,
	`agend_situacao` int NOT NULL,
	`agend_observ` int NOT NULL,
	PRIMARY KEY (`agend_id`)
);

CREATE TABLE IF NOT EXISTS `veiculo_usuario` (
	`veic_usu_id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`veic_id` int NOT NULL,
	`usu_id` int NOT NULL,
	`ehproprietario` bit(1) NOT NULL,
	`data_inicial` date NOT NULL,
	`data_final` date,
	PRIMARY KEY (`veic_usu_id`)
);

CREATE TABLE IF NOT EXISTS `categorias` (
	`cat_id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`cat_nome` varchar(50) NOT NULL,
	`cat_icone` varchar(128),
	PRIMARY KEY (`cat_id`)
);

CREATE TABLE IF NOT EXISTS `marcas` (
	`mar_id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`mar_nome` varchar(50) NOT NULL,
	`mar_icone` varchar(128),
	`cat_id` int NOT NULL,
	PRIMARY KEY (`mar_id`)
);

CREATE TABLE IF NOT EXISTS `modelos` (
	`mod_id` int AUTO_INCREMENT NOT NULL UNIQUE,
	`mod_nome` varchar(60) NOT NULL,
	`mar_id` int NOT NULL,
	PRIMARY KEY (`mod_id`)
);


ALTER TABLE `veiculos` ADD CONSTRAINT `veiculos_fk1` FOREIGN KEY (`mod_id`) REFERENCES `modelos`(`mod_id`);

ALTER TABLE `agendamentos` ADD CONSTRAINT `agendamentos_fk1` FOREIGN KEY (`cli_id`) REFERENCES `cliente`(`cli_id`);
ALTER TABLE `veiculo_usuario` ADD CONSTRAINT `veiculo_usuario_fk1` FOREIGN KEY (`veic_id`) REFERENCES `veiculos`(`veic_id`);

ALTER TABLE `veiculo_usuario` ADD CONSTRAINT `veiculo_usuario_fk2` FOREIGN KEY (`usu_id`) REFERENCES `usuarios`(`usu_id`);

ALTER TABLE `marcas` ADD CONSTRAINT `marcas_fk3` FOREIGN KEY (`cat_id`) REFERENCES `categorias`(`cat_id`);
ALTER TABLE `modelos` ADD CONSTRAINT `modelos_fk2` FOREIGN KEY (`mar_id`) REFERENCES `marcas`(`mar_id`);