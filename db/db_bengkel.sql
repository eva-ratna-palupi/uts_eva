-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2020 at 11:09 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_bengkel`
--

-- --------------------------------------------------------

--
-- Table structure for table `akses_token`
--

CREATE TABLE `akses_token` (
  `id_akses` int(20) NOT NULL,
  `id_user` int(20) NOT NULL,
  `access_token` text NOT NULL,
  `ip_address` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `akses_token`
--

INSERT INTO `akses_token` (`id_akses`, `id_user`, `access_token`, `ip_address`) VALUES
(7, 10, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJpZF91c2VyIjoxMCwiTmFtYV91c2VyIjoiYSIsImVtYWlsIjoiYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjgxZGM5YmRiNTJkMDRkYzIwMDM2ZGJkODMxM2VkMDU1IiwibGV2ZWwiOjF9XSwiaWF0IjoxNTg5MzA3NTU3LCJleHAiOjE1ODkzMTgzNTd9.CfskW7Kb6BPNgtrRvm6TVxL2u8AtUnn2Cc5ff4vSClQ', '192.168.43.4');

-- --------------------------------------------------------

--
-- Stand-in structure for view `total_servis`
-- (See below for the actual view)
--
CREATE TABLE `total_servis` (
`Nama_user` varchar(30)
,`tgl_servis` date
,`nama_montir` varchar(50)
,`Nama_sparepart` varchar(50)
,`harga_sparepart` bigint(20)
,`jumlah_sparepart` int(50)
,`harga_total` bigint(67)
);

-- --------------------------------------------------------

--
-- Table structure for table `t_level`
--

CREATE TABLE `t_level` (
  `id_level` int(20) NOT NULL,
  `Nama_level` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_level`
--

INSERT INTO `t_level` (`id_level`, `Nama_level`) VALUES
(1, 'Admin'),
(2, 'Pelanggan');

-- --------------------------------------------------------

--
-- Table structure for table `t_montir`
--

CREATE TABLE `t_montir` (
  `id_montir` int(20) NOT NULL,
  `Nama_montir` varchar(50) NOT NULL,
  `harga_perjam` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_montir`
--

INSERT INTO `t_montir` (`id_montir`, `Nama_montir`, `harga_perjam`) VALUES
(1, 'a', 7000),
(2, 'b', 10000);

-- --------------------------------------------------------

--
-- Table structure for table `t_servis`
--

CREATE TABLE `t_servis` (
  `id_servis` int(20) NOT NULL,
  `tgl_servis` date NOT NULL,
  `Id_user` int(20) NOT NULL,
  `Id_montir` int(20) NOT NULL,
  `Jumlah_sparepart` int(50) NOT NULL,
  `Id_sparepart` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_servis`
--

INSERT INTO `t_servis` (`id_servis`, `tgl_servis`, `Id_user`, `Id_montir`, `Jumlah_sparepart`, `Id_sparepart`) VALUES
(1, '2020-05-13', 10, 1, 3, 2),
(2, '2020-05-13', 10, 1, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `t_sparepart`
--

CREATE TABLE `t_sparepart` (
  `id_sparepart` int(20) NOT NULL,
  `Nama_sparepart` varchar(50) NOT NULL,
  `harga_sparepart` bigint(20) NOT NULL,
  `satuan` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_sparepart`
--

INSERT INTO `t_sparepart` (`id_sparepart`, `Nama_sparepart`, `harga_sparepart`, `satuan`) VALUES
(1, 'Oli', 20000, 'unit'),
(2, 'Ban Motor', 30000, 'unit');

-- --------------------------------------------------------

--
-- Table structure for table `t_user`
--

CREATE TABLE `t_user` (
  `id_user` int(20) NOT NULL,
  `Nama_user` varchar(30) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(200) NOT NULL,
  `level` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `t_user`
--

INSERT INTO `t_user` (`id_user`, `Nama_user`, `email`, `password`, `level`) VALUES
(10, 'a', 'a@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 1);

-- --------------------------------------------------------

--
-- Structure for view `total_servis`
--
DROP TABLE IF EXISTS `total_servis`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `total_servis`  AS  select `t_user`.`Nama_user` AS `Nama_user`,`t_servis`.`tgl_servis` AS `tgl_servis`,`t_montir`.`Nama_montir` AS `nama_montir`,`t_sparepart`.`Nama_sparepart` AS `Nama_sparepart`,`t_sparepart`.`harga_sparepart` AS `harga_sparepart`,`t_servis`.`Jumlah_sparepart` AS `jumlah_sparepart`,`t_montir`.`harga_perjam` + `t_servis`.`Jumlah_sparepart` * `t_sparepart`.`harga_sparepart` AS `harga_total` from (((`t_servis` join `t_montir` on(`t_montir`.`id_montir` = `t_servis`.`Id_montir`)) join `t_sparepart` on(`t_sparepart`.`id_sparepart` = `t_servis`.`Id_sparepart`)) join `t_user` on(`t_user`.`id_user` = `t_servis`.`Id_user`)) ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `akses_token`
--
ALTER TABLE `akses_token`
  ADD PRIMARY KEY (`id_akses`),
  ADD KEY `akses_token_ibfk_1` (`id_user`);

--
-- Indexes for table `t_level`
--
ALTER TABLE `t_level`
  ADD PRIMARY KEY (`id_level`);

--
-- Indexes for table `t_montir`
--
ALTER TABLE `t_montir`
  ADD PRIMARY KEY (`id_montir`);

--
-- Indexes for table `t_servis`
--
ALTER TABLE `t_servis`
  ADD PRIMARY KEY (`id_servis`),
  ADD KEY `Id_montir` (`Id_montir`,`Id_sparepart`),
  ADD KEY `Id_montir_2` (`Id_montir`),
  ADD KEY `Id_sparepart` (`Id_sparepart`),
  ADD KEY `Id_user` (`Id_user`);

--
-- Indexes for table `t_sparepart`
--
ALTER TABLE `t_sparepart`
  ADD PRIMARY KEY (`id_sparepart`);

--
-- Indexes for table `t_user`
--
ALTER TABLE `t_user`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `level` (`level`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `akses_token`
--
ALTER TABLE `akses_token`
  MODIFY `id_akses` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `t_level`
--
ALTER TABLE `t_level`
  MODIFY `id_level` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `t_montir`
--
ALTER TABLE `t_montir`
  MODIFY `id_montir` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `t_servis`
--
ALTER TABLE `t_servis`
  MODIFY `id_servis` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `t_sparepart`
--
ALTER TABLE `t_sparepart`
  MODIFY `id_sparepart` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10002;

--
-- AUTO_INCREMENT for table `t_user`
--
ALTER TABLE `t_user`
  MODIFY `id_user` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `akses_token`
--
ALTER TABLE `akses_token`
  ADD CONSTRAINT `akses_token_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `t_user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `t_servis`
--
ALTER TABLE `t_servis`
  ADD CONSTRAINT `t_servis_ibfk_1` FOREIGN KEY (`Id_montir`) REFERENCES `t_montir` (`id_montir`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `t_servis_ibfk_2` FOREIGN KEY (`Id_sparepart`) REFERENCES `t_sparepart` (`id_sparepart`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `t_servis_ibfk_3` FOREIGN KEY (`Id_user`) REFERENCES `t_user` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `t_user`
--
ALTER TABLE `t_user`
  ADD CONSTRAINT `t_user_ibfk_1` FOREIGN KEY (`level`) REFERENCES `t_level` (`id_level`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
