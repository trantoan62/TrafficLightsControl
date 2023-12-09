-- MySQL dump 10.19  Distrib 10.3.34-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: traffic_lights
-- ------------------------------------------------------
-- Server version	10.3.34-MariaDB-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Mode`
--

DROP TABLE IF EXISTS `Mode`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Mode` (
  `Auto` tinyint(4) NOT NULL,
  `Manual` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mode`
--

LOCK TABLES `Mode` WRITE;
/*!40000 ALTER TABLE `Mode` DISABLE KEYS */;
INSERT INTO `Mode` VALUES (0,1);
/*!40000 ALTER TABLE `Mode` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Table1_Auto`
--

DROP TABLE IF EXISTS `Table1_Auto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Table1_Auto` (
  `STT` tinyint(4) DEFAULT NULL,
  `Red` int(11) DEFAULT NULL,
  `Green` int(11) DEFAULT NULL,
  `Yellow` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Table1_Auto`
--

LOCK TABLES `Table1_Auto` WRITE;
/*!40000 ALTER TABLE `Table1_Auto` DISABLE KEYS */;
INSERT INTO `Table1_Auto` VALUES (1,NULL,NULL,NULL),(2,NULL,NULL,NULL),(3,NULL,NULL,NULL);
/*!40000 ALTER TABLE `Table1_Auto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Table2_Realtime`
--

DROP TABLE IF EXISTS `Table2_Realtime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Table2_Realtime` (
  `STT` tinyint(4) DEFAULT NULL,
  `Color` char(1) DEFAULT NULL,
  `Time` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Table2_Realtime`
--

LOCK TABLES `Table2_Realtime` WRITE;
/*!40000 ALTER TABLE `Table2_Realtime` DISABLE KEYS */;
INSERT INTO `Table2_Realtime` VALUES (1,'Y',NULL),(2,'Y',NULL),(3,'Y',NULL);
/*!40000 ALTER TABLE `Table2_Realtime` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-07  2:42:25
