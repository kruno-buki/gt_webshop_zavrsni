-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 02, 2021 at 07:21 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gt_web_shop`
--

CREATE DATABASE IF NOT EXISTS `gt_web_shop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `gt_web_shop`;

USE gt_web_shop;
-- --------------------------------------------------------

--
-- Table structure for table `kupac`
--

CREATE TABLE `kupac` (
  `kupac_ID` int(11) NOT NULL,
  `ime` varchar(100) NOT NULL,
  `prezime` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `brojTelefona` int(11) NOT NULL,
  `datumRođenja` date DEFAULT NULL,
  `grad` varchar(255) NOT NULL,
  `adresa` varchar(255) NOT NULL,
  `postanskiBroj` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kupac`
--

INSERT INTO `kupac` (`kupac_ID`, `ime`, `prezime`, `email`, `brojTelefona`, `datumRođenja`, `grad`, `adresa`, `postanskiBroj`) VALUES
(57, 'Pero', 'Zdenac', 'eqw@gasdamail.com', 9343434, '0000-00-00', 'Zagreb', 'Varaždinska', 1234),
(58, 'Sanja', 'Sanjic', 'sanja@sanjiv.com', 2147483647, '0000-00-00', 'Samobor', 'Samoborska', 1234),
(59, 'Mirko', 'Benčić', 'mirko@sada', 12313, '0000-00-00', 'Samobor', 'Remetinečka', 1235),
(60, 'Zdeslav', 'Velebit', 'eqw@gasdamail.com', 9343434, '0000-00-00', 'Zagreb', 'Remetinečka', 1234),
(61, 'Tanja', 'Tanjic', 'dsfsd@sdsas', 23456753, '0000-00-00', 'Pula', 'Ribarska', 123),
(62, 'Pero', 'Peričić', 'dsfsdfsdf@dsfs', 911575190, '0000-00-00', 'Zagreb', 'Botinečkaa', 1),
(63, 'Pero', 'Sanjic', 'dsfsdfsdf@dsfs', 9343434, '0000-00-00', 'Zagreb', 'Botinečkaa', 1234),
(64, 'Vladimir', 'Vladimirević', 'sadas@sada', 9343434, '0000-00-00', 'Zagreb', 'Avenija grada Vukovara', 10000),
(65, 'Domagoj', 'Kruška', 'domagoj@kruska.com', 98345672, '1990-02-01', 'Zagreb', 'Botinečka ulica', 10000),
(66, 'Perica', 'Perislavović', 'perica@perislav', 98, '0000-00-00', 'Varaždin', 'Varaždinska 9', 109867);


-- --------------------------------------------------------

--
-- Table structure for table `narudzba`
--

CREATE TABLE `narudzba` (
  `narudzba_ID` int(11) NOT NULL,
  `datumNarudzbe` date NOT NULL,
  `datum_placanja` date DEFAULT NULL,
  `ukupanIznos` decimal(10,2) NOT NULL,
  `kupac_kupac_ID` int(11) NOT NULL,
  `isporuka_isporuka_ID` int(11) NOT NULL,
  `metoda_placanja_metoda_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `narudzba`
--

INSERT INTO `narudzba` (`narudzba_ID`, `datumNarudzbe`, `datum_placanja`, `ukupanIznos`, `kupac_kupac_ID`, `isporuka_isporuka_ID`, `metoda_placanja_metoda_ID`) VALUES
(39, '2021-06-30', '0000-00-00', '2055.00', 57, 1, 1),
(40, '2021-06-30', '0000-00-00', '6169.30', 58, 2, 3),
(41, '2021-06-30', '0000-00-00', '4748.40', 59, 2, 3),
(42, '2021-06-30', '2021-06-30', '11210.40', 60, 1, 2),
(43, '2021-07-01', '2021-07-01', '4748.40', 61, 1, 2),
(44, '2021-07-07', '2021-07-07', '7783.45', 62, 1, 2),
(45, '2021-07-08', '0000-00-00', '4150.00', 63, 2, 3),
(46, '2021-07-08', '0000-00-00', '12250.00', 64, 1, 1),
(47, '2021-07-08', '2021-07-08', '8642.50', 65, 2, 2),
(48, '2021-08-02', '0000-00-00', '2517.50', 66, 1, 1);


-- --------------------------------------------------------

--
-- Table structure for table `isporuka`
--

CREATE TABLE `isporuka` (
  `isporuka_ID` int(11) NOT NULL,
  `opis` varchar(255) NOT NULL,
  `cijena` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `isporuka`
--

INSERT INTO `isporuka` (`isporuka_ID`, `opis`, `cijena`) VALUES
(1, 'dostava', '15.00'),
(2, 'osobno preuzimanje', '0.00');


-- --------------------------------------------------------

--
-- Table structure for table `metoda_placanja`
--

CREATE TABLE `metoda_placanja` (
  `metoda_ID` int(11) NOT NULL,
  `opis` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `metoda_placanja`
--

INSERT INTO `metoda_placanja` (`metoda_ID`, `opis`) VALUES
(1, 'pouzece'),
(2, 'kreditna kartica'),
(3, 'gotovina');


-- --------------------------------------------------------

--
-- Table structure for table `stavka`
--

CREATE TABLE `stavka` (
  `stavka_id` int(11) NOT NULL,
  `narudzba_narudzba_ID` int(11) NOT NULL,
  `kolicina` int(11) NOT NULL,
  `cijenaProizvoda` decimal(10,2) NOT NULL,
  `popust` decimal(10,2) DEFAULT NULL,
  `artikl_artikl_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stavka`
--

INSERT INTO `stavka` (`stavka_id`, `narudzba_narudzba_ID`, `kolicina`, `cijenaProizvoda`, `popust`, `artikl_artikl_ID`) VALUES
(1, 39, 1, '2055.00', NULL, 32),
(1, 40, 1, '6169.30', '15.00', 10),
(1, 41, 1, '4748.40', '10.00', 7),
(1, 42, 1, '11210.40', '10.00', 23),
(1, 43, 1, '4748.40', '10.00', 7),
(1, 44, 1, '6169.30', '15.00', 10),
(1, 45, 1, '4150.00', NULL, 14),
(1, 46, 2, '6125.00', NULL, 24),
(1, 47, 1, '6125.00', NULL, 24),
(1, 48, 1, '2517.50', '5.00', 31),
(2, 44, 1, '1614.15', '15.00', 16),
(2, 47, 1, '2517.50', '5.00', 31);


-- --------------------------------------------------------

--
-- Table structure for table `akcija`
--

CREATE TABLE `akcija` (
  `akcija_ID` int(11) NOT NULL,
  `nazivPopusta` varchar(45) NOT NULL,
  `postotak` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `akcija`
--

INSERT INTO `akcija` (`akcija_ID`, `nazivPopusta`, `postotak`) VALUES
(1, 'petPosto', 5),
(2, 'desetPosto', 10),
(3, 'petnaestPosto', 15);

-- --------------------------------------------------------

--
-- Table structure for table `artikl`
--

CREATE TABLE `artikl` (
  `artikl_ID` int(11) NOT NULL,
  `nazivArtikla` varchar(150) NOT NULL,
  `cijena` decimal(10,2) NOT NULL,
  `stanje` int(11) NOT NULL,
  `podkategorija_podKategorija_ID` int(11) DEFAULT NULL,
  `kategorija_kategorija_ID` int(11) NOT NULL,
  `akcija_akcija_ID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `artikl`
--

INSERT INTO `artikl` (`artikl_ID`, `nazivArtikla`, `cijena`, `stanje`, `podkategorija_podKategorija_ID`, `kategorija_kategorija_ID`, `akcija_akcija_ID`) VALUES
(1, 'Lenovo ThinkBook 15', '7789.00', 11, 2, 1, 1),
(2, 'Lenovo V14-ADA', '2999.00', 18, NULL, 1, NULL),
(3, 'Lenovo IdeaPad Gaming 3', '7789.00', 6, 1, 1, 2),
(4, 'Lenovo Legion 5', '8050.00', 12, 1, 1, NULL),
(5, 'Lenovo ThinkBook 15 G2', '6345.00', 14, 2, 1, NULL),
(6, 'Dell Inspiron 3501', '3876.00', 15, NULL, 1, NULL),
(7, 'Dell Inspiron 3505', '5276.00', 14, NULL, 1, 2),
(8, 'Dell Latitude 3510', '8599.00', 12, NULL, 1, 1),
(9, 'Ultrabook Acer Swift 1', '3745.00', 19, NULL, 1, NULL),
(10, 'Acer Gaming Nitro 5', '7258.00', 21, 1, 1, 3),
(11, 'Acer Predator Helios 300', '10125.00', 18, 1, 1, NULL),
(12, 'Ultrabook HP Elitebook 830 G7', '10567.00', 19, 2, 1, NULL),
(13, 'Samsung Galaxy S20 FE', '4150.00', 18, NULL, 2, NULL),
(14, 'Xiaomi Redmi Note 10 Pro', '4150.00', 14, NULL, 2, NULL),
(15, 'Samsung Galaxy S21+', '8045.00', 12, NULL, 2, NULL),
(16, 'Xiaomi Redmi Note 9 Pro', '1899.00', 18, NULL, 2, 3),
(17, 'Apple iPhone 12 Mini', '6599.00', 14, NULL, 2, NULL),
(18, 'OnePlus 8T', '5435.00', 18, NULL, 2, NULL),
(19, 'Apple iPhone 12 Pro Max', '10345.00', 19, NULL, 2, NULL),
(20, 'Samsung Galaxy S21 Ultra', '9876.00', 13, NULL, 2, NULL),
(21, 'OnePlus N10', '10345.00', 15, NULL, 2, NULL),
(22, 'Xiaomi Mi 11', '2650.00', 25, NULL, 2, NULL),
(23, 'Samsung 49\" Odyssey', '12456.00', 14, NULL, 3, 2),
(24, 'Acer Predator', '6125.00', 12, NULL, 3, NULL),
(25, 'Alienware 25\"', '5235.00', 15, NULL, 3, NULL),
(26, 'Asus 37.5\"', '9145.00', 16, NULL, 3, NULL),
(27, 'BENQ 31.5\"', '3889.00', 12, NULL, 3, NULL),
(28, 'BENQ 32\"', '4340.00', 11, NULL, 3, NULL),
(29, 'Dell 32\"', '3459.00', 18, NULL, 3, NULL),
(30, 'Philips 27\"', '3256.00', 9, NULL, 3, 1),
(31, 'Nintendo Switch Mario Red & Blue Edition', '2650.00', 15, NULL, 4, 1),
(32, 'Nintendo Switch Lite - Yellow', '2055.00', 0, NULL, 4, NULL),
(33, 'PlayStation 4 500GB F Chassis Black', '2570.00', 13, NULL, 4, NULL),
(34, 'PlayStation 4 500GB F Chassis Black + FIFA 21', '2935.00', 16, NULL, 4, NULL),
(35, 'Apple iPhone SE', '3319.50', 12, NULL, 2, NULL),
(36, 'Notebook Apple MacBook Pro 13', '11577.45', 12, NULL, 1, NULL);


-- --------------------------------------------------------

--
-- Table structure for table `kategorija`
--

CREATE TABLE `kategorija` (
  `kategorija_ID` int(11) NOT NULL,
  `nazivKategorije` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kategorija`
--

INSERT INTO `kategorija` (`kategorija_ID`, `nazivKategorije`) VALUES
(1, 'laptop'),
(2, 'mobitel'),
(3, 'ekran'),
(4, 'konzola'),
(5, 'ostalo');


-- --------------------------------------------------------

--
-- Table structure for table `podkategorija`
--

CREATE TABLE `podkategorija` (
  `podKategorija_ID` int(11) NOT NULL,
  `nazivPodkategorije` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `podkategorija`
--

INSERT INTO `podkategorija` (`podKategorija_ID`, `nazivPodkategorije`) VALUES
(1, 'gaming'),
(2, 'business');



--
-- Indexes for dumped tables
--

--
-- Indexes for table `akcija`
--
ALTER TABLE `akcija`
  ADD PRIMARY KEY (`akcija_ID`);

--
-- Indexes for table `artikl`
--
ALTER TABLE `artikl`
  ADD PRIMARY KEY (`artikl_ID`),
  ADD KEY `fk_artikl_podkategorija` (`podkategorija_podKategorija_ID`),
  ADD KEY `fk_artikl_kategorija1` (`kategorija_kategorija_ID`),
  ADD KEY `fk_artikl_akcija1` (`akcija_akcija_ID`);

--
-- Indexes for table `isporuka`
--
ALTER TABLE `isporuka`
  ADD PRIMARY KEY (`isporuka_ID`);

--
-- Indexes for table `kategorija`
--
ALTER TABLE `kategorija`
  ADD PRIMARY KEY (`kategorija_ID`);

--
-- Indexes for table `kupac`
--
ALTER TABLE `kupac`
  ADD PRIMARY KEY (`kupac_ID`);

--
-- Indexes for table `metoda_placanja`
--
ALTER TABLE `metoda_placanja`
  ADD PRIMARY KEY (`metoda_ID`);

--
-- Indexes for table `narudzba`
--
ALTER TABLE `narudzba`
  ADD PRIMARY KEY (`narudzba_ID`),
  ADD KEY `fk_narudzba_kupac1` (`kupac_kupac_ID`),
  ADD KEY `fk_narudzba_isporuka1` (`isporuka_isporuka_ID`),
  ADD KEY `fk_narudzba_metoda_placanja1` (`metoda_placanja_metoda_ID`);

--
-- Indexes for table `podkategorija`
--
ALTER TABLE `podkategorija`
  ADD PRIMARY KEY (`podKategorija_ID`);

--
-- Indexes for table `stavka`
--
ALTER TABLE `stavka`
  ADD PRIMARY KEY (`stavka_id`,`narudzba_narudzba_ID`),
  ADD KEY `fk_stavka_narudzba1` (`narudzba_narudzba_ID`),
  ADD KEY `fk_stavka_artikl1` (`artikl_artikl_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `akcija`
--
ALTER TABLE `akcija`
  MODIFY `akcija_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `artikl`
--
ALTER TABLE `artikl`
  MODIFY `artikl_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `isporuka`
--
ALTER TABLE `isporuka`
  MODIFY `isporuka_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kategorija`
--
ALTER TABLE `kategorija`
  MODIFY `kategorija_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `kupac`
--
ALTER TABLE `kupac`
  MODIFY `kupac_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT for table `metoda_placanja`
--
ALTER TABLE `metoda_placanja`
  MODIFY `metoda_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `narudzba`
--
ALTER TABLE `narudzba`
  MODIFY `narudzba_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `podkategorija`
--
ALTER TABLE `podkategorija`
  MODIFY `podKategorija_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `artikl`
--
ALTER TABLE `artikl`
  ADD CONSTRAINT `fk_artikl_akcija1` FOREIGN KEY (`akcija_akcija_ID`) REFERENCES `akcija` (`akcija_ID`),
  ADD CONSTRAINT `fk_artikl_kategorija1` FOREIGN KEY (`kategorija_kategorija_ID`) REFERENCES `kategorija` (`kategorija_ID`),
  ADD CONSTRAINT `fk_artikl_podkategorija` FOREIGN KEY (`podkategorija_podKategorija_ID`) REFERENCES `podkategorija` (`podKategorija_ID`);

--
-- Constraints for table `narudzba`
--
ALTER TABLE `narudzba`
  ADD CONSTRAINT `fk_narudzba_isporuka1` FOREIGN KEY (`isporuka_isporuka_ID`) REFERENCES `isporuka` (`isporuka_ID`),
  ADD CONSTRAINT `fk_narudzba_kupac1` FOREIGN KEY (`kupac_kupac_ID`) REFERENCES `kupac` (`kupac_ID`),
  ADD CONSTRAINT `fk_narudzba_metoda_placanja1` FOREIGN KEY (`metoda_placanja_metoda_ID`) REFERENCES `metoda_placanja` (`metoda_ID`);

--
-- Constraints for table `stavka`
--
ALTER TABLE `stavka`
  ADD CONSTRAINT `fk_stavka_artikl1` FOREIGN KEY (`artikl_artikl_ID`) REFERENCES `artikl` (`artikl_ID`),
  ADD CONSTRAINT `fk_stavka_narudzba1` FOREIGN KEY (`narudzba_narudzba_ID`) REFERENCES `narudzba` (`narudzba_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
