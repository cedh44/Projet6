DROP DATABASE mdd;
CREATE DATABASE mdd;
USE mdd;

CREATE TABLE `SUBJECTS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(50),
  `content` VARCHAR(2000)
);

CREATE TABLE `USERS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(40),
  `email` VARCHAR(255),
  `password` VARCHAR(255)
);

CREATE TABLE `SUBSCRIPTIONS` (
  `user_id` INT, 
  `subject_id` INT
);

CREATE TABLE `POSTS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(50),
  `content` VARCHAR(2000),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT, 
  `subject_id` INT
);

CREATE TABLE `COMMENTS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `comment` VARCHAR(2000),
  `user_id` INT, 
  `post_id` INT
);

-- jointure entre les users et les subjects (pour les subscriptions)
ALTER TABLE `SUBSCRIPTIONS` ADD FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`);
ALTER TABLE `SUBSCRIPTIONS` ADD FOREIGN KEY (`subject_id`) REFERENCES `SUBJECTS` (`id`);

-- jointure entre les subjects et les posts
ALTER TABLE `POSTS` ADD FOREIGN KEY (`subject_id`) REFERENCES `SUBJECTS` (`id`);

-- jointure entre les subjets et les users
ALTER TABLE `POSTS` ADD FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`);

-- jointure entre les comments et les posts
ALTER TABLE `COMMENTS` ADD FOREIGN KEY (`post_id`) REFERENCES `POSTS` (`id`);

-- jointure entre les comments et les users
ALTER TABLE `COMMENTS` ADD FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`);

-- quelques données par défaut
INSERT INTO USERS (email, name, password) VALUES
  ('toto@gmail.com', 'toto', '$2a$10$lylN8VKwYVDpJeyL0aP.Re3TriFYQHoQ4kGlNKsoA14lPu2xQREnK');

INSERT INTO SUBJECTS (title, content) VALUES
  ('Angular', 'Le thème concerne Angular');

INSERT INTO SUBSCRIPTIONS (user_id, subject_id) VALUES
  (1, 1);

INSERT INTO POSTS (title, content, created_at, user_id, subject_id) VALUES
  ('Angular CLI', 'Angular CLI (Command Line Interface) est un outil facile d’utilisation qui permet d’initialiser, développer et maintenir des applications Angular. Son utilisation nous permettra un gain de temps et de  qualité sur notre projet.', NOW(), 1, 1);

INSERT INTO COMMENTS (comment, user_id, post_id) VALUES
  ('Très intéressant', 1, 1);