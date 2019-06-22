-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2019 at 03:35 PM
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
-- Table structure for table `tbl_stucorfiles`
--

CREATE TABLE `tbl_stucorfiles` (
  `id` int(11) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `filepath` varchar(255) NOT NULL,
  `tag` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `staffid` int(11) NOT NULL,
  `staffname` varchar(255) NOT NULL,
  `semester` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_stucorfiles`
--

INSERT INTO `tbl_stucorfiles` (`id`, `filename`, `filepath`, `tag`, `department`, `staffid`, `staffname`, `semester`, `date`) VALUES
(6, 'Mathematics', '/api/uploads/stucorfiles/bitmap20190524.zip', 'mech', 'mech', 8112323, 'Ambarish', 1, '2019-06-22 12:10:47'),
(7, 'Javascript', '/api/uploads/stucorfiles/transcript.docx', 'Math', 'eee', 8112323, 'Ambarish', 2, '2019-06-22 12:12:18');

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
(4, 8112323, 'Ambarish', 'aambu1998@gmail.com', '25d55ad283aa400af464c76d713c07ad', 'e533e1cb453afd768666add28dcccbac', 2147483647, 'cse', 1);

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
(9, 217217, 'Ambarish', 'aambu1998@gmail.com', 'ed2b1f468c5f915f3f1cf75d7068baae', '4c157189665b200f88a24bac64f441fc', 2147483647, 'cse', 1),
(10, 217454, 'Thayalan G R', 'grthayalan18@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'f1abef445fe476e7bc02bc26a00434c1', 2147483647, 'hands', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_stucorfiles`
--
ALTER TABLE `tbl_stucorfiles`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `tbl_stucorfiles`
--
ALTER TABLE `tbl_stucorfiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_stucorstaffs`
--
ALTER TABLE `tbl_stucorstaffs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_stucorstudents`
--
ALTER TABLE `tbl_stucorstudents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
