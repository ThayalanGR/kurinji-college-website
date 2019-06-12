-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 12, 2019 at 09:11 AM
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
-- Table structure for table `tbl_event`
--

CREATE TABLE `tbl_event` (
  `id` int(11) NOT NULL,
  `caption` varchar(255) NOT NULL,
  `filepath` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_event`
--

INSERT INTO `tbl_event` (`id`, `caption`, `filepath`, `date`) VALUES
(13, 'new caption fo new image', '/api/uploads/homesectionone/image.JPG', '2019-05-12 09:24:58'),
(14, 'this is new image', '/api/uploads/homesectionone/JKS3923.JPG', '2019-05-12 09:25:07'),
(15, 'new image', '/api/uploads/homesectionone/JKS3988.JPG', '2019-05-14 15:20:36'),
(16, 'spacious atmosphere', '/api/uploads/homesectionone/JKS3922.JPG', '2019-05-17 05:42:36');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_news`
--

CREATE TABLE `tbl_news` (
  `id` int(11) NOT NULL,
  `news` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_news`
--

INSERT INTO `tbl_news` (`id`, `news`, `date`) VALUES
(6, 'our students have won the 1st prize in international  boxing competition', '2019-04-28 16:43:25'),
(7, 'Admissions for 2019 batch is going on for both UG and PG courses', '2019-04-28 18:48:32');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_staffs`
--

CREATE TABLE `tbl_staffs` (
  `sid` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `priority` int(11) NOT NULL,
  `department` varchar(255) NOT NULL,
  `about` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_staffs`
--

INSERT INTO `tbl_staffs` (`sid`, `name`, `designation`, `priority`, `department`, `about`) VALUES
(4, 'Ambarish', 'Associate Professor', 1, 'eee', 'Ambarish have pursued UG under Anna university'),
(6, 'John David', 'Assistant professor', 2, 'mech', 'he have completed pg under au'),
(7, 'Ajithkumar', 'Assistant Professor', 2, 'mecse', 'Ajithkumar has completed UG under Bharathidhasan University'),
(8, 'Vijay', 'Associate Professor', 1, 'ece', 'Vijay have pursued UG under Anna university'),
(9, 'Vinoth', 'Head of the Department', 0, 'eee', 'Vinoth have pursued UG under Anna university'),
(10, 'Raja', 'Others', 3, 'mba', 'Raja have pursued MBA under Anna university'),
(11, 'Chandrasekar', 'Assistant Professor', 2, 'engdesign', 'Chandrasekar have pursued PG under Anna university'),
(12, 'Varun', 'Head of Department', 0, 'cse', 'Works in ITC Infotech'),
(13, 'Lavanya', 'student', 3, 'cse', 'dklasndkas'),
(14, 'Vijay', 'hod', 2, 'cse', 'skjnskA'),
(15, 'Thayalan', 'Student', 1, 'cse', 'lksjakjdalk');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_event`
--
ALTER TABLE `tbl_event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_news`
--
ALTER TABLE `tbl_news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_staffs`
--
ALTER TABLE `tbl_staffs`
  ADD PRIMARY KEY (`sid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_event`
--
ALTER TABLE `tbl_event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_news`
--
ALTER TABLE `tbl_news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `tbl_staffs`
--
ALTER TABLE `tbl_staffs`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
