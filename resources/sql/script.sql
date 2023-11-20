DROP DATABASE mdd;
CREATE DATABASE mdd;
USE mdd;

CREATE TABLE `SUBJECTS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `content` VARCHAR(2000)
);

CREATE TABLE `USERS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL
);

CREATE TABLE `SUBSCRIPTIONS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT, 
  `subject_id` INT
);

CREATE TABLE `POSTS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(50) NOT NULL,
  `content` VARCHAR(2000),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `user_id` INT, 
  `subject_id` INT
);

CREATE TABLE `COMMENTS` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `content` VARCHAR(2000) NOT NULL,
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
  ('toto@gmail.com', 'toto', '$2a$10$DBwf6qQCAzaForz8MoKpi.O3OtdSszfdsIvpilgwa9D7fbIw9Mm16'),
  ('tutu@gmail.com', 'tutu', '$2a$10$re1orBkEUUifaRDg9hXFROKd50LzBDGK/AyQkpa/V2u8UBbKJo992');

INSERT INTO SUBJECTS (title, content) VALUES
  ('Angular', 'Le thème concerne Angular'),
  ('Spring Boot', 'Le thème concerne Spring Boot'),
  ('Git', 'Le thème concerne Git');

INSERT INTO SUBSCRIPTIONS (user_id, subject_id) VALUES
  (1, 1),
  (1, 2),
  (2, 1),
  (2, 3);

INSERT INTO POSTS (title, content, created_at, user_id, subject_id) VALUES
  ('Angular CLI', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), 1, 1),
  ('Angular Material', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), 2, 1),
  ('JPA', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), 1, 2),
  ('Lombok', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), 2, 2),
  ('MapStruct', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), 1, 2),
  ('Comment faire un commit', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), 2, 3),
  ('GIT : les commandes de base', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', NOW(), 1, 3);
INSERT INTO COMMENTS (content, user_id, post_id) VALUES
  ('Mon commentaire id1', 1, 1),
  ('Mon commentaire id2', 2, 1),
  ('Mon commentaire id3', 1, 2),
  ('Mon commentaire id4', 2, 2),
  ('Mon commentaire id5', 2, 3);