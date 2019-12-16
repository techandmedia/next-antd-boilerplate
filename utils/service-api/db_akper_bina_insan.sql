-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2019 at 03:06 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_akper_bina_insan`
--

-- --------------------------------------------------------

--
-- Table structure for table `agama`
--

CREATE TABLE `agama` (
  `id_agama` tinyint(2) NOT NULL,
  `agama` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `agama`
--

INSERT INTO `agama` (`id_agama`, `agama`) VALUES
(1, 'Buddha'),
(2, 'Hindu'),
(3, 'Islam'),
(4, 'Katolik'),
(5, 'Konghucu'),
(6, 'Kristen');

-- --------------------------------------------------------

--
-- Table structure for table `daftar_kota`
--

CREATE TABLE `daftar_kota` (
  `kode_pos` varchar(6) NOT NULL,
  `nama_kota` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `daftar_kota`
--

INSERT INTO `daftar_kota` (`kode_pos`, `nama_kota`) VALUES
('10210', 'Medan'),
('11330', 'Bogor'),
('12840', 'Surabaya'),
('13240', 'Jakarta'),
('1432', 'Malang'),
('14540', 'Kepulauan Seribu'),
('15315', 'Tangerang Selatan'),
('15720', 'Tangerang'),
('16370', 'Bogor'),
('16458', 'Depok'),
('17216', 'Bekasi'),
('33121', 'Pangkal Pinang'),
('33211', 'Bangka'),
('33411', 'Belitung'),
('33562', 'Belitung Timur'),
('36123', 'Jambi'),
('36382', 'Muaro Jambi'),
('36657', 'Batang Hari'),
('36773', 'Tanjung Jabung Timur'),
('37162', 'Kerinci'),
('37171', 'Sungaipenuh'),
('37255', 'Bungo'),
('37259', 'Tebo'),
('37371', 'Merangin'),
('37482', 'Sarolangun'),
('38119', 'Bengkulu'),
('38326', 'Bengkulu Utara'),
('38385', 'Bengkulu Tengah'),
('38552', 'Bengkulu Selatan'),
('38766', 'Muko Muko'),
('38874', 'Seluma'),
('38962', 'Kaur'),
('39153', 'Rejang Lebong'),
('39261', 'Lebong'),
('39373', 'Kepahiang'),
('40513', 'Cimahi'),
('40563', 'Bandung Barat'),
('40611', 'Bandung'),
('41174', 'Purwakarta'),
('41284', 'Subang'),
('41372', 'Karawang'),
('42283', 'Pandeglang'),
('42352', 'Lebak'),
('42433', 'Cilegon'),
('42453', 'Serang'),
('43261', 'Cianjur'),
('43362', 'Sukabumi'),
('44183', 'Garut'),
('45154', 'Cirebon'),
('45271', 'Indramayu'),
('45373', 'Sumedang'),
('45463', 'Majalengka'),
('45586', 'Kuningan'),
('46114', 'Tasikmalaya'),
('46332', 'Banjar'),
('46365', 'Pangandaran'),
('46388', 'Ciamis'),
('50519', 'Semarang'),
('50743', 'Salatiga'),
('51181', 'Pekalongan'),
('51253', 'Batang'),
('51355', 'Kendal'),
('52183', 'Tegal'),
('52252', 'Brebes'),
('52357', 'Pemalang'),
('53176', 'Banyumas'),
('53265', 'Cilacap'),
('53457', 'Banjarnegara'),
('54362', 'Kebumen'),
('55253', 'Yogyakarta'),
('55551', 'Sleman'),
('55651', 'Kulon Progo'),
('55762', 'Bantul'),
('55811', 'Gunung Kidul'),
('56152', 'Magelang'),
('56266', 'Temanggung'),
('56318', 'Wonosobo'),
('57277', 'Sragen'),
('57382', 'Boyolali'),
('57473', 'Klaten'),
('57562', 'Sukoharjo'),
('57661', 'Wonogiri'),
('57792', 'Karanganyar'),
('58192', 'Grobogan'),
('59181', 'Pati'),
('59253', 'Rembang'),
('59464', 'Jepara'),
('59571', 'Demak'),
('80231', 'Denpasar'),
('80353', 'Badung'),
('80571', 'Gianyar'),
('80671', 'Bangli'),
('80771', 'Klungkung'),
('80864', 'Karangasem'),
('81173', 'Lampung'),
('82112', 'Tabanan'),
('82262', 'Jembrana'),
('96214', 'Gorontalo'),
('96468', 'Pohuwato'),
('96583', 'Bone Bolango');

-- --------------------------------------------------------

--
-- Table structure for table `pekerjaan`
--

CREATE TABLE `pekerjaan` (
  `id_pekerjaan` tinyint(2) NOT NULL,
  `pekerjaan` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pekerjaan`
--

INSERT INTO `pekerjaan` (`id_pekerjaan`, `pekerjaan`) VALUES
(1, 'karyawan swasta'),
(2, 'pegawai negeri sipil');

-- --------------------------------------------------------

--
-- Table structure for table `penduduk`
--

CREATE TABLE `penduduk` (
  `nik` varchar(16) NOT NULL,
  `email` varchar(30) NOT NULL,
  `nama_depan` varchar(10) NOT NULL,
  `nama_tengah` varchar(10) DEFAULT NULL,
  `nama_belakang` varchar(10) NOT NULL,
  `tempat_lahir` varchar(6) DEFAULT NULL,
  `tanggal_lahir` varchar(20) NOT NULL,
  `alamat` varchar(255) DEFAULT NULL,
  `id_kelurahan` varchar(6) NOT NULL,
  `id_kecamatan` varchar(6) DEFAULT NULL,
  `id_kota` varchar(6) DEFAULT NULL,
  `id_provinsi` varchar(6) DEFAULT NULL,
  `id_agama` tinyint(2) DEFAULT NULL,
  `id_status_kawin` tinyint(2) DEFAULT NULL,
  `id_pekerjaan` tinyint(2) DEFAULT NULL,
  `id_warga_negara` tinyint(3) NOT NULL,
  `tinggi_badan` tinyint(3) NOT NULL,
  `berat_badan` tinyint(3) NOT NULL,
  `nomor_hp` varchar(15) NOT NULL,
  `id_asal_sekolah` varchar(10) NOT NULL,
  `id_group` tinyint(2) NOT NULL,
  `id_type` tinyint(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sekolah`
--

CREATE TABLE `sekolah` (
  `id_sekolah` varchar(10) NOT NULL,
  `nama_sekolah` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sekolah`
--

INSERT INTO `sekolah` (`id_sekolah`, `nama_sekolah`) VALUES
('033063', 'STMIK Swadharma'),
('035002', 'Politeknik Swadharma');

-- --------------------------------------------------------

--
-- Table structure for table `status_kawin`
--

CREATE TABLE `status_kawin` (
  `id_sk` tinyint(2) NOT NULL,
  `agama` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `status_kawin`
--

INSERT INTO `status_kawin` (`id_sk`, `agama`) VALUES
(1, 'belum kawin'),
(2, 'kawin');

-- --------------------------------------------------------

--
-- Table structure for table `user_group`
--

CREATE TABLE `user_group` (
  `id_group` tinyint(2) NOT NULL,
  `group_name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_group`
--

INSERT INTO `user_group` (`id_group`, `group_name`) VALUES
(1, 'administrator'),
(2, 'super user'),
(3, 'user');

-- --------------------------------------------------------

--
-- Table structure for table `user_login`
--

CREATE TABLE `user_login` (
  `username` varchar(25) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_group` tinyint(2) NOT NULL,
  `id_type` tinyint(2) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_login`
--

INSERT INTO `user_login` (`username`, `password`, `id_group`, `id_type`, `status`) VALUES
('17111003', '111', 4, 3, 0),
('17111004', '111', 4, 3, 1),
('adi.sopian@gmail.com', '111', 1, 1, 1),
('eko.andri@gmail.com', '111', 4, 3, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--

CREATE TABLE `user_type` (
  `id_group` tinyint(2) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_type`
--

INSERT INTO `user_type` (`id_group`, `type`) VALUES
(1, 'web administrator'),
(2, 'keuangan'),
(3, 'dosen'),
(4, 'mahasiswa');

-- --------------------------------------------------------

--
-- Table structure for table `warga_negara`
--

CREATE TABLE `warga_negara` (
  `id_wn` tinyint(3) NOT NULL,
  `warga_negara` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `warga_negara`
--

INSERT INTO `warga_negara` (`id_wn`, `warga_negara`) VALUES
(1, 'indonesia'),
(2, 'malaysia');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agama`
--
ALTER TABLE `agama`
  ADD PRIMARY KEY (`id_agama`);

--
-- Indexes for table `daftar_kota`
--
ALTER TABLE `daftar_kota`
  ADD PRIMARY KEY (`kode_pos`);

--
-- Indexes for table `pekerjaan`
--
ALTER TABLE `pekerjaan`
  ADD PRIMARY KEY (`id_pekerjaan`);

--
-- Indexes for table `sekolah`
--
ALTER TABLE `sekolah`
  ADD PRIMARY KEY (`id_sekolah`);

--
-- Indexes for table `status_kawin`
--
ALTER TABLE `status_kawin`
  ADD PRIMARY KEY (`id_sk`);

--
-- Indexes for table `user_group`
--
ALTER TABLE `user_group`
  ADD PRIMARY KEY (`id_group`);

--
-- Indexes for table `user_login`
--
ALTER TABLE `user_login`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`id_group`);

--
-- Indexes for table `warga_negara`
--
ALTER TABLE `warga_negara`
  ADD PRIMARY KEY (`id_wn`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agama`
--
ALTER TABLE `agama`
  MODIFY `id_agama` tinyint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pekerjaan`
--
ALTER TABLE `pekerjaan`
  MODIFY `id_pekerjaan` tinyint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `status_kawin`
--
ALTER TABLE `status_kawin`
  MODIFY `id_sk` tinyint(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `warga_negara`
--
ALTER TABLE `warga_negara`
  MODIFY `id_wn` tinyint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
