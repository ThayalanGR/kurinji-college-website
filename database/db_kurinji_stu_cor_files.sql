-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 21, 2019 at 03:45 PM
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
(2, 'Mathematics', '/api/uploads/stucorfiles/ThayalanGRold.pdf', 'CS6501', 'mech', 8112323, 'Ambarish', 2, '2019-06-21 13:41:03'),
(3, 'Javascript', '/api/uploads/stucorfiles/GmailRequestingforPlacement.pdf', 'CS6601', 'cse', 8112323, 'Ambarish', 6, '2019-06-21 13:44:04');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_stucorfiles`
--
ALTER TABLE `tbl_stucorfiles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_stucorfiles`
--
ALTER TABLE `tbl_stucorfiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
