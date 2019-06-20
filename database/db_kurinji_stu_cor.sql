-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 20, 2019 at 09:01 PM
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
-- Table structure for table `tbl_stucorstaffs`
--

CREATE TABLE `tbl_stucorstaffs` (
  `id` int(11) NOT NULL,
  `staffid` int(11) NOT NULL,
  `staffname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `forgotpassword` varchar(255) NOT NULL,
  `mobile` int(11) NOT NULL,
  `department` varchar(255) NOT NULL,
  `active` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_stucorstaffs`
--

INSERT INTO `tbl_stucorstaffs` (`id`, `staffid`, `staffname`, `email`, `password`, `forgotpassword`, `mobile`, `department`, `active`) VALUES
(3, 8118162, 'Thayalan G R', 'grthayalan18@gmail.com', '723739f72ba6f39fad72029611e264af', '3cb931f6d115b502bd61e849bab680c7', 2147483647, 'cse', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_stucorstudents`
--

CREATE TABLE `tbl_stucorstudents` (
  `id` int(11) NOT NULL,
  `studentid` int(11) NOT NULL,
  `studentname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `forgotpassword` varchar(255) NOT NULL,
  `mobile` int(11) NOT NULL,
  `department` varchar(255) NOT NULL,
  `active` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_stucorstudents`
--

INSERT INTO `tbl_stucorstudents` (`id`, `studentid`, `studentname`, `email`, `password`, `forgotpassword`, `mobile`, `department`, `active`) VALUES
(2, 217001, 'Thayalan G R', 'grthayalan18@gmail.com', '611028f613c65f5dd1627c515c724e84', '774f58e6c9563e416530856cda5a06df', 2147483647, 'cse', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_stucorstaffs`
--
ALTER TABLE `tbl_stucorstaffs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_stucorstudents`
--
ALTER TABLE `tbl_stucorstudents`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_stucorstaffs`
--
ALTER TABLE `tbl_stucorstaffs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_stucorstudents`
--
ALTER TABLE `tbl_stucorstudents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
