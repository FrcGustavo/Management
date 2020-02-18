CREATE DATABASE dbmanager;

USE DATABASE dbmanager;

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_key VARCHAR(6) NOT NULL UNIQUE,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    avatar TEXT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password TEXT NOT NULL,
    permissions TEXT NOT NULL,
    active TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO users(user_key, firstName, lastName, avatar, email, password, permissions) VALUES 
('U0001', 'ROOT', '', '/', 'root@mail.com', 'root', '');

CREATE TABLE categories(
    category_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    category_key VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    avatar TEXT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO categories(category_key, name, avatar) VALUES 
('C00001', 'Legumbres', ''),('C00002', 'Subasta', ''),('C00003', 'Abarrotes', '');
CREATE TYPE unit AS ENUM ('KG','PZ');

CREATE TABLE articles (
    article_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    article_key VARCHAR(6) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    avatar TEXT NOT NULL,
    price DOUBLE NOT NULL,
    state INTEGER NOT NULL,
    visibility INTEGER NOT NULL,
    maximum DOUBLE NOT NULL,
    minimum DOUBLE NOT NULL,
    unity ENUM('KG', 'PZ'),
    category_id INTEGER NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id)
        REFERENCES categories (category_id)
);

INSERT INTO articles(article_key, name, avatar, price, state, visibility, maximum, minimum, unity, category_id) VALUES
('A00001', 'Chile Habanero', '', 35, 1, 1, 1, 0.5, 'KG', 2);

CREATE TABLE clients (
    client_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    client_key VARCHAR(6) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    avatar TEXT NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    active TINYINT(1) DEFAULT 1,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

INSERT INTO clients(client_key, name, avatar, email) VALUES
('C00001','Goguinara sa de cv', 'avatar', 'goguinara@mail.com');

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    order_key VARCHAR(6) NOT NULL UNIQUE,
    client_id INTEGER NOT NULL,
    totalPrice DOUBLE NOT NULL,
    totalArticles INTEGER NOT NULL,
    deliveryDate TIMESTAMP NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES clients(client_id)
)

INSERT INTO orders(order_key, client_id, totalPrice, totalArticles, deliveryDate) VALUES
("O00001", 1, 0, 2, "2020-02-18 00:00.000")

CREATE TABLE order_articles (
    article_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    order_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    unity ENUM('kg', 'pz'),
    count INTEGER NOT NULL,
    price DOUBLE NOT NULL,
    totalPrice DOUBLE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id)
)

INSERT INTO order_articles(order_id, name, category, unity, count, price, totalPrice) VALUES
(1, 'Pera Verde', 'Bodegas', 'kg', 1.5, 37.5, 65),
(1, 'Aguacate', 'Subasta', 'kg', 2, 40.5, 81);