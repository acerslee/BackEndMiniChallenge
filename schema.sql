DROP DATABASE IF EXISTS pets_info;

CREATE DATABASE IF NOT EXISTS pets_info;

USE pets_info;

CREATE TABLE IF NOT EXISTS pets (
  id integer AUTO_INCREMENT UNIQUE PRIMARY KEY,
  name varchar(50),
  type varchar(50),
  age integer
);


INSERT INTO pets (name, type, age) VALUES ("Oliver", "Dog", 1);
INSERT INTO pets (name, type, age) VALUES ("Tucker", "Dog", 1);
INSERT INTO pets (name, type, age) VALUES ("Montey", "Cat", 3);
INSERT INTO pets (name, type, age) VALUES ("Bull", "Horse", 6);
INSERT INTO pets (name, type, age) VALUES ("Mochi", "Bird", 3);
INSERT INTO pets (name, type, age) VALUES ("Buttons", "Dog", 8);
INSERT INTO pets (name, type, age) VALUES ("Jessie", "Dog", 1);
INSERT INTO pets (name, type, age) VALUES ("Bob", "Guinea Pig", 4);
INSERT INTO pets (name, type, age) VALUES ("Thumper", "Bunny", 5);
INSERT INTO pets (name, type, age) VALUES ("Lily", "Bunny", 4);
INSERT INTO pets (name, type, age) VALUES ("Nemo", "Fish", 3);
INSERT INTO pets (name, type, age) VALUES ("Marlin", "Fish", 38);
INSERT INTO pets (name, type, age) VALUES ("Crush", "Turtle", 70);
INSERT INTO pets (name, type, age) VALUES ("Sheldon", "Tortoise", 190);
INSERT INTO pets (name, type, age) VALUES ("Sonic", "Hedgehog", 14);