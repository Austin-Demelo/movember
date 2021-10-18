-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 18, 2021 at 04:57 PM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movember`
--

-- --------------------------------------------------------

--
-- Table structure for table `Competitors`
--

CREATE TABLE `Competitors` (
  `Competitor_ID` int(11) NOT NULL,
  `FirstName` varchar(200) NOT NULL,
  `MoustacheName` varchar(200) NOT NULL,
  `MoustachePic` longtext NOT NULL,
  `TotalDonationsRaised` int(11) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Competitors`
--

INSERT INTO `Competitors` (`Competitor_ID`, `FirstName`, `MoustacheName`, `MoustachePic`, `TotalDonationsRaised`, `email`, `password`) VALUES
(20, 'austin', 'tickler', 'sdf13.txt', 1000, 'ad@gmail.com', '1234'),
(21, 'austin', 'tickler', '13.txt', 1000, 'ad@gmail.com', '1234'),
(22, 'austin', 'tickler', 'asdf13.txt', 1000, 'ad@gmail.com', '1234'),
(23, 'austin', 'tickler', 'dfg13.txt', 1000, 'ad@gmail.com', '1234');

-- --------------------------------------------------------

--
-- Table structure for table `Donators`
--

CREATE TABLE `Donators` (
  `Donator_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Competitors`
--
ALTER TABLE `Competitors`
  ADD PRIMARY KEY (`Competitor_ID`);

--
-- Indexes for table `Donators`
--
ALTER TABLE `Donators`
  ADD PRIMARY KEY (`Donator_ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Competitors`
--
ALTER TABLE `Competitors`
  MODIFY `Competitor_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `Donators`
--
ALTER TABLE `Donators`
  MODIFY `Donator_ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
