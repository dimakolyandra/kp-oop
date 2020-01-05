#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE TABLE person (
        code        text PRIMARY KEY,
        pwd       varchar(40) NOT NULL,
        role      varchar(1) NOT NULL
    );
    CREATE TABLE product (
        product_id        integer PRIMARY KEY,
        product_name      varchar(40) NOT NULL,
        product_cost      integer NOT NULL,
        product_count     integer NOT NULL
    );
    CREATE TABLE order_data (
        order_id        integer PRIMARY KEY,
        order_items      jsonb NOT NULL  
    );
EOSQL