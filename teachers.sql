-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2026 at 07:09 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mini_login`
--

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `teacher_code` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `name_with_initial` varchar(255) NOT NULL,
  `nic` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `whatsapp` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `status` enum('active','frozen','blocked') NOT NULL DEFAULT 'active',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`id`, `teacher_code`, `full_name`, `name_with_initial`, `nic`, `email`, `phone`, `whatsapp`, `photo`, `status`, `created_at`, `updated_at`) VALUES
(2, 'TCH0002', 'Abdul Raheem Rifna', 'A.R.Rifna', '200075008963', 'rifna06@gmail.com', '0774563456', '0758963214', NULL, 'frozen', '2026-02-05 03:26:23', '2026-02-25 20:43:51'),
(5, 'TCH0005', 'Abdul Raheem Rifna', 'Abdul Raheem Rifna', '45623584589', 'fytytuyty@563gmail.com', '1231555444', '123456789', NULL, 'active', '2026-02-09 09:02:31', '2026-02-25 21:08:18'),
(6, 'TCH0006', 'Risna Raheem', 'A.R. Risna', '1236547895', 'risna@gmail.com', '0456987231', '789541236', NULL, 'active', '2026-02-15 23:08:08', '2026-02-15 23:08:08'),
(8, 'TCH0008', 'Achchi Mohammed Ijas', 'AM.Ijas', '8564298756', 'ijas@gmail.com', '4569872168', '78945615896', NULL, 'blocked', '2026-02-24 11:35:46', '2026-02-25 20:43:24'),
(15, 'TCH0009', 'humanAi', 'human.r', '89544648', 'human@gmail.com', '956598564', '21134541', NULL, 'active', '2026-02-25 23:13:03', '2026-02-25 23:14:48'),
(16, 'TCH0016', 'fdgvdgdfg', 'fdsfsfsg', '901234567V', 'dfgdgdfg@gmail.com', 'erfewfer', 'dfdfdg', NULL, 'active', '2026-02-25 23:51:20', '2026-02-25 23:51:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `teachers_teacher_code_unique` (`teacher_code`),
  ADD UNIQUE KEY `teachers_nic_unique` (`nic`),
  ADD UNIQUE KEY `teachers_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `teachers`
--
ALTER TABLE `teachers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
