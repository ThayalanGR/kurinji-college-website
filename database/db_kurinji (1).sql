-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 18, 2019 at 09:03 PM
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
-- Table structure for table `tbl_alumni`
--

CREATE TABLE `tbl_alumni` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `employment_details` varchar(255) NOT NULL,
  `registered_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_alumni`
--

INSERT INTO `tbl_alumni` (`id`, `name`, `batch`, `department`, `address`, `mobile`, `email`, `employment_details`, `registered_at`) VALUES
(3, 'Thayalan G R', '2020', 'cse', '49 A srinivasa nagar trichy ', '8489455901', 'grthayalan18@gmail.com', 'software intern at ITC infotech', '2019-06-18 18:16:04'),
(4, 'asdfasdf', 'assdfsaf', 'asdfasf', 'asdfasdf', '2342452525', 'asdfasfd', 'asfasfdasdfasf', '2019-06-18 18:16:56'),
(5, 'asdfasfsadf', 'asfsfsd', 'assfasfsdf', 'asdfsdf', '2353453535', 'dsdfgsdgdg', 'asdfasfasf', '2019-06-18 18:19:15');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_deptevent`
--

CREATE TABLE `tbl_deptevent` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` longtext NOT NULL,
  `imagepath` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dept` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_deptevent`
--

INSERT INTO `tbl_deptevent` (`id`, `title`, `body`, `imagepath`, `date`, `dept`) VALUES
(5, 'sadfsfsf', 'asdfasdf', '/api/uploads/deptevent/WhatsAppImage20190506at2.27.42PM1.jpeg', '2019-06-18 09:54:07', 'mech'),
(6, 'asdfsd', 'sdfsfsf', 'null', '2019-06-18 12:58:56', 'mech'),
(7, 'asdfasdfsaf', 'sdf;sm alskjdf ssdf s sdfjsflksd ff f askfjs fsf asdflkskf sfasdfjsf sf;sf slfj   lsakjdf as sakdjf', '/api/uploads/deptevent/351474544345765936719435355932219359625216n.jpg', '2019-06-18 13:05:19', 'mech'),
(8, 'asdfsdf', 'asdfsf', '/api/uploads/deptevent/351474544345765936719435355932219359625216n.jpg', '2019-06-18 13:37:45', 'eee');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_deptlab`
--

CREATE TABLE `tbl_deptlab` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` longtext NOT NULL,
  `imagepath` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dept` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_deptlab`
--

INSERT INTO `tbl_deptlab` (`id`, `title`, `body`, `imagepath`, `date`, `dept`) VALUES
(1, 'sadfsadf', 'safdasdf', '/api/uploads/deptlab/IMG20190417235055.jpg', '2019-06-18 09:55:54', 'cse'),
(2, 'asdfsafd', 'asdfasdf', '/api/uploads/deptlab/WhatsAppImage20190506at2.27.42PM1.jpeg', '2019-06-18 09:58:00', 'ece'),
(3, 'asdfasdf', 'sdfsfsf', '/api/uploads/deptlab/WhatsAppImage20190506at2.27.42PM1.jpeg', '2019-06-18 12:43:10', 'mech');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_deptstuact`
--

CREATE TABLE `tbl_deptstuact` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` longtext NOT NULL,
  `imagepath` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `dept` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_deptstuact`
--

INSERT INTO `tbl_deptstuact` (`id`, `title`, `body`, `imagepath`, `date`, `dept`) VALUES
(1, 'asdfasdf', 'asdfasdf', '/api/uploads/deptstuact/WhatsAppImage20190506at2.27.42PM1.jpeg', '2019-06-18 09:55:37', 'ece'),
(2, 'asdfsdf', 'asdfsdf', '/api/uploads/deptstuact/IMG20190417235055.jpg', '2019-06-18 09:57:06', 'ece'),
(3, 'sdfsdf', 'sdfsdf', '/api/uploads/deptstuact/351474544345765936719435355932219359625216n.jpg', '2019-06-18 12:42:44', 'mech');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_disclosure`
--

CREATE TABLE `tbl_disclosure` (
  `id` int(11) NOT NULL,
  `filepath` varchar(255) NOT NULL,
  `filename` varchar(255) NOT NULL,
  `createdat` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_disclosure`
--

INSERT INTO `tbl_disclosure` (`id`, `filepath`, `filename`, `createdat`) VALUES
(15, '/api/uploads/disclosure/mandatorydisclosure20192020.pdf', 'mandatorydisclosure20192020.pdf', '2019-06-18 07:06:27');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_alumni`
--
ALTER TABLE `tbl_alumni`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_deptevent`
--
ALTER TABLE `tbl_deptevent`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_deptlab`
--
ALTER TABLE `tbl_deptlab`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_deptstuact`
--
ALTER TABLE `tbl_deptstuact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_disclosure`
--
ALTER TABLE `tbl_disclosure`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_alumni`
--
ALTER TABLE `tbl_alumni`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_deptevent`
--
ALTER TABLE `tbl_deptevent`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_deptlab`
--
ALTER TABLE `tbl_deptlab`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_deptstuact`
--
ALTER TABLE `tbl_deptstuact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_disclosure`
--
ALTER TABLE `tbl_disclosure`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
