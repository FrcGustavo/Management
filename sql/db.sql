CREATE DATABASE dbmanager;

USE DATABASE dbmanager;

CREATE TABLE users (
    "id" INTEGER NOT NULL PRIMARY KEY DEFAULT nextval('"Users_id_seq"'::regclass)
    "key" CHAR(6) NOT NULL UNIQUE,
    "name" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "avatar" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL,
    "permissions" TEXT NOT NULL,
    "createdAt" DATE,
    "updatedAt" DATE
);

INSERT INTO users(key, name, lastname, avatar, email, password, permissions) VALUES 
('U0001', 'ROOT', '', '/', 'root@mail.com', 'root', '');

CREATE TABLE "Categories"
(
    "id" SERIAL NOT NULL PRIMARY KEY,
    "key" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "avatar" TEXT NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
)
CREATE TYPE unit AS ENUM ('KG','PZ');
CREATE TABLE "Articles" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "key" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "avatar" TEXT NOT NULL,
    "price" FLOAT NOT NULL,
    "state" INTEGER NOT NULL,
    "visibility" INTEGER NOT NULL,
    "maximum" FLOAT NOT NULL,
    "minimum" FLOAT NOT NULL,
    "unity" unit ('KG','PZ'),
    "CategoryId" INTEGER NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Articles_category_fkey" FOREIGN KEY ("CategoryId")
        REFERENCES public."Categories" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
