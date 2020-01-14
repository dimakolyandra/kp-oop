#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE TABLE person (
        login        text PRIMARY KEY,
        pwd       varchar(40) NOT NULL,
        role      varchar(1) NOT NULL
    );
    CREATE TABLE product (
        product_id        SERIAL PRIMARY KEY,
        product_name      varchar(40) NOT NULL,
        product_cost      integer NOT NULL,
        product_count     integer NOT NULL
    );
    CREATE TABLE order_data (
        order_id        SERIAL PRIMARY KEY,
        order_items      text NOT NULL  
    );
    insert into person values('admin', 'admin', 'A');
    insert into person values('cassir', 'cassir', 'C');

    insert into product(product_name, product_cost, product_count) values('Огурец', 10, 100);
    insert into product(product_name, product_cost, product_count) values('Помидор', 15, 100);
    insert into product(product_name, product_cost, product_count) values('Курица бройлер', 130, 15);    
    insert into product(product_name, product_cost, product_count) values('Нога оленя', 1300, 5);
    insert into product(product_name, product_cost, product_count) values('Чудо-юдо рыба кит', 13000, 1);
    insert into product(product_name, product_cost, product_count) values('Водка', 120, 10000);
    insert into product(product_name, product_cost, product_count) values('Пиво жигулевское', 130, 100000);
    insert into product(product_name, product_cost, product_count) values('Черная икра', 13, 24000);
EOSQL