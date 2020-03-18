
drop DATABASE IF EXISTS db_meals_app;
CREATE DATABASE IF NOT EXISTS db_meals_app;
USE db_meals_app;


CREATE TABLE `meals`(
    `id` int (10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar (255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `location` varchar (255) NOT NULL,
  `max_reservation` int (10) unsigned NOT NULL,
  `price` decimal,
  `created_date` DATE NOT NULL,
  PRIMARY KEY (`id`)
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `reservations`(
  `id` int (10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar (255) NOT NULL,
  `phonenumber` varchar (255) NOT NULL,
  `email` varchar (255) NOT NULL,
  `meal_id` int (10) unsigned NOT NULL,
   
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_reservation_meal` FOREIGN KEY (`meal_id`) REFERENCES `meals`(`id`) ON DELETE CASCADE ON UPDATE CASCADE 
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


CREATE TABLE `reviews`(
  `id` int (10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar (255) NOT NULL,
  `description` text NULL DEFAULT NULL,
  `stars` int (10) unsigned NOT NULL,
  `meal_id` int (10) unsigned NOT NULL,
  `created_date` DATE NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_review_meal` FOREIGN KEY (`meal_id`) REFERENCES `meals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 