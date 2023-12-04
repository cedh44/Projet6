# Application Monde des Développeurs

Cette application est un réseau social dédié aux développeurs. Le but est d’aider les développeurs qui cherchent un travail, grâce à la mise en relation, en encourageant les liens et la collaboration entre pairs qui ont des intérêts communs.

## Pré-requis

Préalablement, il est nécessaire d'avoir sur le poste :
- Mysql
- Angular (14.1.3 ou supérieur)
- Java 17 et maven

## Récupérer les sources du projet

Depuis un terminal, placez vous dans un répertoire où déposer les sources et tapez : `git clone https://github.com/cedh44/Projet6.git`

## Installer la base de données

Se connecter en tant que root dans mysql, puis taper :
- `CREATE DATABASE mdd;`
- `CREATE USER 'mdduser'@'localhost' IDENTIFIED BY 'mddPass123!';`
- `GRANT ALL ON mdd.* to 'mdduser'@'localhost';`
- dans un terminal depuis le répertoire Projet6/resources/sql, taper : `mysql -u root -p mdd < script.sql` afin de lancer le script de création de la base de données et insérer des données fictives pour exemple

## Installer l'application

### Front :
- dans un terminal, depuis la racine du Projet6 : `cd front`
- puis `npm install` pour installer les dépendances

### Back :
- depuis un terminal, depuis la racine du Projet6 : `cd back`
- puis `mvn compile` afin de valider que la compilation s'effectue correctement puis `mvn install`

## Lancer l'application

### Front :
- dans un terminal, depuis le répertoire front : `npm run start`
- l'application est disponible à l'url http://localhost:4200/

### Back :
- le projet a été développé sous Intellij et le user/password d'accès à la base de données ont été externalisé. Donc dans le fichier application properties, vous trouverez les paramètres ${DB_USER} et ${DB_PASSWD}. Il faut donc les remplacer par les identifiants cités plus haut (mdduser / mddPass123!)
- dans un terminal, depuis le répertoire back : `mvn spring-boot:run`
- l'application est disponible à l'url http://localhost:8080/ (en tant qu'API)

## Tester l'application

Vous pouvez utiliser l'utilisateur suivant pour vous connecter à l'application :
- user : "toto"
- password : "test!123"

## Technologies

- Angular
- Spring Boot
- Java 17
- Maven
- MySql
- Git

## Licence

Développé dans le cadre du projet 6 de la formation Développeur Full-Stack - Java et Angular (OpenClassrooms) : https://openclassrooms.com/fr/paths/533/projects/1305/assignment
