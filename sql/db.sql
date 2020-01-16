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
    "key" VARCHAR(255) NOT NULL UNIQUE,
    "name" VARCHAR(255) NOT NULL,
    "avatar" TEXT NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
)
CREATE TYPE unit AS ENUM ('KG','PZ');
CREATE TABLE "Articles" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "key" VARCHAR(255) NOT NULL UNIQUE,
    "name" VARCHAR(255) NOT NULL,
    "avatar" TEXT NOT NULL,
    "price" FLOAT NOT NULL,
    "state" INTEGER NOT NULL,
    "visibility" INTEGER NOT NULL,
    "maximum" FLOAT NOT NULL,
    "minimum" FLOAT NOT NULL,
    "unity" unit,
    "CategoryId" INTEGER NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    FOREIGN KEY ("CategoryId") REFERENCES Categories("id")
)

CREATE TABLE "Clients" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "key" VARCHAR(6) NOT NULL UNIQUE,
    "name" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "avatar" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
)

CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "key" VARCHAR(6) NOT NULL UNIQUE,
    "ClientId" INTEGER NOT NULL,
    "totalPrice" FLOAT PRECISION NOT NULL,
    "totalArticles" INTEGER NOT NULL,
    "deliveryDate" timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
    FOREIGN KEY ("ClientId") REFERENCES Clients("id");
)


CREATE TABLE "OrderArticles" (
    "id" SERIAL NOT NULL PRIMARY KEY,
    "key" VARCHAR(6) NOT NULL UNIQUE,
    "OrderId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "unity" VARCHAR(6) NOT NULL,
    "count" INTEGER NOT NULL,
    "price" FLOAT NOT NULL,
    "totalPrice" FLOAT NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    FOREIGN KEY ("OrderId") REFERENCES "Orders"("id");
)