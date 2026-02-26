-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2026 at 07:05 AM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('student','teacher','admin') NOT NULL,
  `teacher_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`, `teacher_id`, `created_at`, `updated_at`) VALUES
(7, 'admin', '$2y$10$Efn62oHWiMnI5sShvET9UeYGrVuivxxdyj3FdaHla8QwV5osZZ52i', 'admin', NULL, '2026-02-04 07:22:24', '2026-02-04 07:22:24'),
(9, 'student1', '$2y$10$YlorzN0t37Bu.8mjx2/f.eiUknblecTof/Cq2/Z4J9z3HMdmDGA.6', 'student', NULL, '2026-02-04 07:28:56', '2026-02-04 07:28:56'),
(10, 'rifna06@gmail.com', '$2y$10$aZ9musb3EMadsmAfv4scLuB7fYcE1K4xM3XkjVrwjrIqdwK/DcRGC', 'teacher', 2, '2026-02-05 03:26:23', '2026-02-05 03:26:23'),
(13, 'fytytuyty@563gmail.com', '$2y$10$GCIl5vJOpPFc6RZr30X1ZuUODjb9CxxT4kUK0QqvzFiPmpOvHJKLS', 'teacher', 5, '2026-02-09 09:02:32', '2026-02-09 09:02:32'),
(14, 'risna@gmail.com', '$2y$10$RcAkdEDEfpPCedwTOmVuPuTZ68wc9pMSSVlg82GNjirzvzJ51E26C', 'teacher', 6, '2026-02-15 23:08:09', '2026-02-15 23:08:09'),
(16, 'ijas@gmail.com', '$2y$10$e9HKDfbmMPHUoPOV1jTh7uHlQp0AOpWZHbR6pWlcA1AQgSmouGFTy', 'teacher', 8, '2026-02-24 11:35:47', '2026-02-24 11:35:47'),
(17, 'human@gmail.com', '$2y$10$N/0x6xoaEA0oNi13aiVW6O.yGrOdKYJ3t5CubllVP32DZPwfep0Yi', 'teacher', 15, '2026-02-25 23:13:04', '2026-02-25 23:13:04'),
(18, 'dfgdgdfg@gmail.com', '$2y$10$m7fnS6nwVVVRUFS5sSfWve6Hkt/GxTOK09u7EK9rs8DKslS9WLvLe', 'teacher', 16, '2026-02-25 23:51:21', '2026-02-25 23:51:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD KEY `users_teacher_id_foreign` (`teacher_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_teacher_id_foreign` FOREIGN KEY (`teacher_id`) REFERENCES `teachers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
