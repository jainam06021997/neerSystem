/*
SQLyog Community v13.1.5  (64 bit)
MySQL - 5.7.31 : Database - neer_system
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`neer_system` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `neer_system`;

/*Table structure for table `contactus` */

DROP TABLE IF EXISTS `contactus`;

CREATE TABLE `contactus` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(256) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `subject` varchar(50) DEFAULT NULL,
  `message` varchar(2000) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `cretaed_by` varchar(15) DEFAULT 'Admin',
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(15) DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `contactus` */

insert  into `contactus`(`id`,`name`,`email`,`phone`,`subject`,`message`,`created_at`,`cretaed_by`,`updated_at`,`updated_by`,`status`) values 
(1,'Nilang Y Shah','nilang134@gmail.com','0989898989891','test','123456','2021-04-03 19:46:12','Admin','2021-04-03 19:46:12',NULL,NULL);

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(2000) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `createdon` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedon` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `createdby` int(11) DEFAULT NULL,
  `updated` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

/*Data for the table `users` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
