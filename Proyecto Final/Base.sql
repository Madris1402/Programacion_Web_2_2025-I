-- Crear Base de datos y Perfil de SQL --
create database if not exists node_crud_rmu;
use node_crud_rmu;
create table if not exists users(
	id int auto_increment not null,
    name varchar(70) not null,
    email varchar(100) not null,
    primary key (id)
);

create user if not exists 'progweb2_rmu'@'localhost' identified by '123456';
grant all privileges on node_crud_rmu.* to 'progweb2_rmu'@'localhost';

insert into users (name, email) value ('Ricardo', 'ricardomadrigal319@aragon.unam.mx');

