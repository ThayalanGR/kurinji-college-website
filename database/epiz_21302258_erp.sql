-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Host: sql200.epizy.com
-- Generation Time: Jun 16, 2019 at 01:22 PM
-- Server version: 5.6.41-84.1
-- PHP Version: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `epiz_21302258_erp`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_event`
--

CREATE TABLE IF NOT EXISTS `tbl_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `caption` varchar(255) NOT NULL,
  `filepath` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=18 ;

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
-- Table structure for table `tbl_gallery`
--

CREATE TABLE IF NOT EXISTS `tbl_gallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filepath` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `tbl_gallery`
--

INSERT INTO `tbl_gallery` (`id`, `filepath`) VALUES
(5, '/api/uploads/gallery/image.JPG'),
(6, '/api/uploads/gallery/JKS3922.JPG'),
(7, '/api/uploads/gallery/JKS3988.JPG'),
(8, '/api/uploads/gallery/JKS3923.JPG');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_infrastructure`
--

CREATE TABLE IF NOT EXISTS `tbl_infrastructure` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `filepath` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tbl_infrastructure`
--

INSERT INTO `tbl_infrastructure` (`id`, `title`, `description`, `filepath`) VALUES
(5, 'test TITLE', 'description for infrastructure description for infrastructure description for infrastructure', '/api/uploads/infrastructure/JKS3987.JPG');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_news`
--

CREATE TABLE IF NOT EXISTS `tbl_news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `news` varchar(255) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `tbl_news`
--

INSERT INTO `tbl_news` (`id`, `news`, `date`) VALUES
(8, 'College reopens on 1st July 2019', '2019-06-13 09:14:58'),
(7, 'Admissions for 2019 batch is going on for both UG and PG courses', '2019-04-28 18:48:32');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_staffs`
--

CREATE TABLE IF NOT EXISTS `tbl_staffs` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `priority` int(11) NOT NULL,
  `department` varchar(255) NOT NULL,
  `about` longtext NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=125 ;

--
-- Dumping data for table `tbl_staffs`
--

INSERT INTO `tbl_staffs` (`sid`, `name`, `designation`, `priority`, `department`, `about`) VALUES
(36, 'Mr. R. RAJAPRABU, M.E.,', 'ASSISTANT PROFESSOR', 10, 'cse', ''),
(35, 'Mr. S. TAMIL SELVAN, M.E.,', 'ASSISTANT PROFESSOR', 8, 'cse', ''),
(41, 'Mr. M. JAWAHAR, M.Tech.,', 'ASSISTANT PROFESSOR', 6, 'cse', 'Specialized in Software Engineering'),
(34, 'Mrs. C. MARIA RHYTHM', 'ASSISTANT PROFESSOR', 7, 'cse', ''),
(40, 'Mr. D. YOBU, M.E.,', 'ASSISTANT PROFESSOR', 5, 'cse', 'Specialized in DATA BASE MANAGEMENT SYSTEMS'),
(38, 'Mr. E. STEPHEN ISSAC, M.E.,', 'ASSISTANT PROFESSOR', 3, 'cse', 'Specialized in Computer Networks'),
(39, 'Mr. K. MAHADEVAN, M.E.,', 'ASSISTANT PROFESSOR', 4, 'cse', 'Specialized in Mobile Computing'),
(29, 'Mr. K. JEEVA, M.E.,', 'ASSISTANT PROFESSOR', 2, 'cse', 'Specialized in Compiler Design'),
(28, 'Mrs. P. USHARANI, M.E.,', 'HOD / ASSISTANT PROFESSOR', 1, 'cse', 'Specialized in Computer Graphics'),
(37, 'Mrs. A. SAHAYA SELVI, M.E.,', 'ASSISTANT PROFESSOR', 9, 'cse', ''),
(58, 'Mr. J. AMALA AROCKIARAJ, M.E.,', 'HOD / ASST. PROFESSOR', 21, 'eee', 'Specialized in Power Systems'),
(52, 'Mrs. K. JANANI, M.B.A.,', 'ASSISTANT PROFESSOR', 15, 'mba', ''),
(53, 'Ms. J. YAZHINI SIRUMANI, M.B.A.,', 'ASSISTANT PROFESSOR', 16, 'mba', ''),
(54, 'Mrs. A. MALAR, M.B.A.,', 'ASSISTANT PROFESSOR', 17, 'mba', ''),
(55, 'Mr. F. SANTHOSH RAJKUMAR, M.B.A.,', 'ASSISTANT PROFESSOR', 18, 'mba', ''),
(56, 'Ms. J. JEROBIN SUSANA, M.B.A.,', 'ASSISTANT PROFESSOR', 19, 'mba', ''),
(57, 'Mrs. L. JOAHNY MARIA PRINCY, M.B.A, M.E.,', 'ASSISTANT PROFESSOR', 20, 'mba', 'Specialized in systems'),
(59, 'Mrs. A. PRIYA FATHIMA RANI, M.E.,', 'ASSISTANT PROFESSOR', 22, 'eee', 'Specialized in Power Electronics and Drives'),
(60, 'Mr. M. VIJAY ANAND, M.E.,', 'ASSISTANT PROFESSOR', 23, 'eee', 'Specialized in Power Electronics and Drives'),
(61, 'Mr. S. MANIKANDAN, M.E.,', 'ASSISTANT PROFESSOR', 24, 'eee', 'Specialized in Power Electronics and Drives'),
(62, 'Ms. S. PAVITHRA, M.E.,', 'ASSISTANT PROFESSOR', 25, 'eee', 'Specialized in Power Systems'),
(63, 'Ms. D. SUGANYA, M.E.,', 'ASSISTANT PROFESSOR', 26, 'eee', 'Specialized in Power Electronics and Drives'),
(64, 'Mr. K. NALLATHAMBI, M.E.,', 'ASSISTANT PROFESSOR', 27, 'eee', 'Specialized in Power Electronics and Drives'),
(65, 'Mr. S. SIVASAKTHI, M.E.,', 'ASSISTANT PROFESSOR', 28, 'eee', 'Specialized in Power Systems'),
(66, 'Mr. P. VICTOR DINESAN', 'ASSISTANT PROFESSOR', 29, 'eee', 'Specialized in Power Systems'),
(67, 'Mrs. M. DEVI, M.E.,', 'HOD / ASST. PROF. ', 30, 'ece', 'Specialized in Applied Electronics'),
(68, 'Mr. P. SUNDAR, M.E.,', 'ASSISTANT PROFESSOR', 31, 'ece', 'Specialized in Communication Systems'),
(69, 'Mrs. P. JEYASUDHA, M.E.,', 'ASSISTANT PROFESSOR', 32, 'ece', 'Specialized in computer & communication'),
(70, 'Mr. J. JEROLD ROY, M.E.,', 'ASSISTANT PROFESSOR', 33, 'ece', 'Specialized in Communication Systems'),
(71, 'Mrs. J. SANTHI NISHA, M.E.,', 'ASSISTANT PROFESSOR', 34, 'ece', 'Specialized in Embedded Systems'),
(72, 'Ms. S. SAJITHA BANU, M.E.,', 'ASSISTANT PROFESSOR', 35, 'eee', 'Specialized in VLSI DESIGN'),
(73, 'Mrs. R. RENUGA, M.E.,', 'ASSISTANT PROFESSOR', 37, 'ece', 'Specialized in Communication Systems'),
(74, 'Ms. S. SAJITHA BANU, M.E.,', 'ASSISTANT PROFESSOR', 35, 'ece', 'Specialized in VLSI Design'),
(75, 'Mrs. A. KIRUTHIKA DEVI, M.E.,', 'ASSISTANT PROFESSOR', 38, 'ece', 'Specialized in Applied Electronics'),
(76, 'Mr. K. SELVARAJ, M.E.,', 'ASSISTANT PROFESSOR', 39, 'ece', 'Specialized in Communication Engg.'),
(77, 'Mrs. R. PREMA, M.E.,', 'ASSISTANT PROFESSOR', 40, 'ece', ''),
(79, 'Mrs. P. EVANGELIN HEPSIBAH, M.E.,', 'ASSISTANT PROFESSOR', 41, 'ece', ''),
(80, 'Dr. V. BALASUBRAMANIAM, M.E.,Ph.D.,', 'Principal / HOD', 11, 'none', 'Specialized in Industrial Engg.'),
(105, 'Mrs. P. USHARANI, M.E.,', 'Assistant Professor', 1, 'mecse', ''),
(84, 'Dr. V.  BALASUBRAMANIAM, M.E.,Ph.D.,', 'Principal / HOD', 1, 'mech', 'Specialized in Industrial Engineering'),
(85, 'Mr. N. RAJAKUMARESAN, M.E.,', 'Assistant Professor', 2, 'mech', 'Specialized in CAD/CAM'),
(86, 'Mr. DHANDAPANI, M.E.,', 'Assistant Professor', 3, 'mech', 'Specialized in Engg. Design'),
(87, 'Mr. D. PARASURAMAN, M.E.,', 'Assistant Professor', 4, 'mech', 'Specialized in Industrial Engineering'),
(88, 'Mr. S. SIVALINGAM, M.E.,', 'Assistant Professor', 5, 'mech', 'Specialized in Industrial Engineering'),
(89, 'Mr. S. ELAIARAJA, M.E.,', 'Assistant Professor', 6, 'mech', 'Specialized in CAD / CAM'),
(90, 'Mr. S. VENGATESHWARAN, M.E.,', 'Assistant Professor', 7, 'mech', 'Specialized in CAD / CAM'),
(91, 'Mr. R. KARTHIKEYAN, M.E.,', 'Assistant Professor', 8, 'mech', 'Specialized in Manufacturing Technology'),
(92, 'Mr. G. SEKAR, M.E.,', 'Assistant Professor', 9, 'mech', 'Specialized in Engineering Design'),
(93, 'Mr. P. NAGARAJAN, M.E.,', 'Assistant Professor', 10, 'mech', 'Specialized in Manufacturing Engg.'),
(94, 'Mr. J. AMALORPAVA DOSS', 'Assistant Professor', 11, 'mech', 'Specialized in Thermal Engineering'),
(95, 'Mr. K. SATHEESH KUMAR, M.E.,', 'Assistant Professor', 12, 'mech', 'Specialized in Manufacturing Technology'),
(96, 'Mr. P. CHANDRA SEKAR, M.E.,', 'Assistant Professor', 13, 'mech', 'Specialized in CAD / CAM'),
(97, 'Mr. P. CHINNAMUTHU SRINIVASAN, M.E.,', 'Assistant Professor', 14, 'mech', 'Specialized in CAD / CAM'),
(98, 'Mr. D. MOHAN, M.E.,', 'Assistant Professor', 15, 'mech', 'Specialized in Production Engineering'),
(99, 'Mr. G. PRABHAKARAN, M.E.,', 'Assistant Professor', 16, 'mech', 'Specialized in CAD'),
(100, 'Mr. P. CHIRANJEEVI, M.E.,', 'Assistant Professor', 17, 'mech', 'Specialized in CAD'),
(101, 'Mr. S. KARUPPASAMY, M.E.,', 'Assistant Professor', 18, 'mech', ''),
(102, 'Mr. LA. KRISHNA, M.E., (Ph.D.,)', 'Assistant Professor', 1, 'engdesign', 'Specialized in Engineering Design'),
(103, 'Mr. V. SUNDAR, M.E.,', 'Assistant Professor', 2, 'engdesign', 'Specialized in CAD / CAM'),
(104, 'Mr. B. MUTHUKUMAR, M.E.,', 'Assistant Professor', 3, 'engdesign', 'Specialized in Engg. Design'),
(106, 'Mr. A. ABRAHAM, M.E.,', 'Assistant Professor', 2, 'mecse', 'Specialized in Information Technology'),
(107, 'Mrs. ROBADHARSHINI, M.E.,', 'Assistant Professor', 3, 'mecse', ''),
(108, 'Mr. S. BALAMURUGAN, M.E.,', 'Assistant Professor', 4, 'mecse', ''),
(109, 'Mr. R. SELVARAJ, M.E.,', 'Assistant Professor', 5, 'mecse', ''),
(110, 'Mr. S. SATHIASEELAN, M.A.,M.Phil.,(Ph.D.,)', 'HOD / ASST. PROF.', 1, 'hands', 'Specialized in Advanced English'),
(111, 'Mr. K. SRIRAM, M.A.,M.Phil.,', 'Asst. Professor', 2, 'hands', 'English'),
(112, 'Mrs. A. IRUDAYA MARY, M.Sc.,M.Phil.,', 'Assistant Professor', 3, 'hands', 'Chemistry'),
(113, 'Dr. B. RAJESWARI, M.SC.,M.Phil.,Ph.D.,', 'Asst. Professor', 4, 'hands', 'Environmental Science'),
(114, 'Mr.M.S. VIJAYAN, M.Sc.,M.Phil.,', 'Asst. Professor', 5, 'hands', 'Mathematics'),
(115, 'Mr.M. SIVAKUMAR, M.Sc.,M.Phil.,', 'Assistant Professor', 6, 'hands', 'Mathematics'),
(116, 'Ms. G. FATHIMARAJ, M.Sc.,M.Phil.,', 'Asst. Professor', 7, 'hands', 'Mathematics'),
(117, 'Ms. J. PREMA, M.Sc.,M.Phil.,', 'Asst. Professor', 8, 'hands', 'Mathematics'),
(118, 'Ms. R. PUNNIYAMOORTHY, M.Sc.,M.Phil.,(Ph.D.,)', 'Asst. Professor', 9, 'hands', 'Physics'),
(119, 'Ms. M. AKILANDESWARI, M.Sc.,M.Phil.,', 'Asst. Professor', 10, 'hands', 'Physics'),
(120, 'Mrs. S. MANIMEHALAI, M.Sc.,M.Phil.,', 'Asst. Professor', 11, 'hands', 'Physics'),
(121, 'Mr. M. RAJALINGAM, M.Sc.,M.Phil.,', 'Asst. Professor', 12, 'hands', 'Physics'),
(124, 'Ms. Rs. SHARIFF NISHA, M.E.,', 'Asst. Professor', 13, 'hands', 'CSE / General English'),
(123, 'Ms. N. DEEPTHI, M.E.,', 'Asst. Professor', 14, 'hands', 'CSE / General English');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
