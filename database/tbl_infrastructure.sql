-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 14, 2019 at 12:24 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_kurinji`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_infrastructure`
--

CREATE TABLE `tbl_infrastructure` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `filepath` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_infrastructure`
--

INSERT INTO `tbl_infrastructure` (`id`, `title`, `description`, `filepath`) VALUES
(2, 'asdfasf', 'asdfasdf', '/api/uploads/infrastructure/JKS3925.JPG'),
(3, 'asdfsadf', 'asdfasdf', '/api/uploads/infrastructure/JKS4006.JPG'),
(4, 'asdfasfd', 'asdfasdf', '/api/uploads/infrastructure/JKS3921.JPG');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_infrastructure`
--
ALTER TABLE `tbl_infrastructure`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_infrastructure`
--
ALTER TABLE `tbl_infrastructure`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
