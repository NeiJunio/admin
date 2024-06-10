CREATE TABLE IF NOT EXISTS `usuarios` (
	`usu_id` int AUTO_INCREMENT NOT NULL,
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



