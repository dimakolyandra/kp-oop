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

    insert into product values(1, 'Огурец', 10, 100);
    insert into product values(2, 'Помидор', 15, 100);
    insert into product values(3, 'Курица бройлер', 130, 15);    
    insert into product values(4, 'Нога оленя', 1300, 5);
    insert into product values(5, 'Чудо-юдо рыба кит', 13000, 1);
    insert into product values(6, 'Водка', 120, 10000);
    insert into product values(7, 'Пиво жигулевское', 130, 100000);
    insert into product values(8, 'Черная икра', 13, 24000);
EOSQL