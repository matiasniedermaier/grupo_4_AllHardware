-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-07-2020 a las 21:00:20
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `allhardware`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `name`) VALUES
(1, 'Intel'),
(2, 'Amd'),
(3, 'Asus'),
(4, 'Lg'),
(5, 'Nokia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_products` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `price_total` double(7,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cart`
--

INSERT INTO `cart` (`id`, `id_user`, `id_products`, `cantidad`, `price_total`) VALUES
(16, 1, 1, 2, 0.00),
(17, 2, 2, 3, 0.00),
(18, 3, 3, 4, 0.00),
(19, 4, 4, 4, 0.00),
(20, 5, 5, 1, 0.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Procesadores'),
(2, 'Memoria Ram'),
(3, 'Fuentes'),
(4, 'Cargadores'),
(5, 'Estrella');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(70) NOT NULL,
  `price` double NOT NULL,
  `stock` int(11) NOT NULL,
  `especification` varchar(200) NOT NULL,
  `img` varchar(200) NOT NULL,
  `id_category` int(10) NOT NULL,
  `id_brand` int(70) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `stock`, `especification`, `img`, `id_category`, `id_brand`) VALUES
(1, 'Procesador', 6500, 5, '# of Cores: 4, # of Threads: 4, Processor Base Frequency: 3.60 GHz, Max Turbo Frequency: 4.  20 GHz, Cache: 6 MB, Bus Speed: 8 GT/s DMI3, TDP: 65 W', '/images/imagenesProductos/procesadores/intel/INTEL COFFEE LAKE CORE I3 9100F.webp', 5, 5),
(2, 'Memoria Ram', 5000, 10, 'Cores 6, Threads 12, Processor Base Frequency 3.20 GHz, Max Turbo Frequency 4.60 GHz, Cache 12 MB, Bus Speed 8 GT/s DMI3, TDP 65 W, TJUNCTION 100°C', '/images/imagenesProductos/procesadores/intel/INTEL COFFEE LAKE CORE I3 9100F.webp', 4, 2),
(3, 'Fuente de alimemtacion', 9000, 20, '6 of Cores, 6 of Threads, Processor Base Frequency 3.70 GHz, Max Turbo Frequency 4.60 GHz, Cache 9 MB SmartCache, Bus Speed 8 GT/s DMI3, TDP 95 W', '/images/imagenesProductos/procesadores/intel/INTEL COFFEE LAKE CORE I5 9600K.webp', 3, 3),
(4, 'Cargador', 7000, 30, 'El cargador será alimentado desde una fuente monofásica o trifásica de 3x380/220V - 50 Hz y suministrarán corriente continua', '/images/imagenesProductos/procesadores/intel/INTEL COFFEE LAKE CORE I5 9600K.webp', 2, 1),
(5, 'bateria', 8000, 50, 'Minicomp - Vertiv - Eaton - APC - Autonomías extendidas, rackeables. Service. Atención inmediata. Envíos a todo el País. Garantías extendidas', '/images/imagenesProductos/procesadores/intel/INTEL COFFEE LAKE CORE I5 9600K.webp', 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(70) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `img` varchar(200) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `promocion` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `img`, `admin`, `promocion`) VALUES
(1, 'Juan', 'juan@gmail.com', '$2b$10$2s5K6833xnFEVrGSBfXS8e7B3xV4mqPmtWhCYoTI104Xq5rFa5fRS', '/images/users/img5.png', 0, 0),
(2, 'Jose', 'jose@gmail.com', '$2b$10$dYh7JX9/bGaxTp3VEE3dQusQ5Z6hJ8dc7s3yOk.f3F0ehTjShP2P2', '/images/users/img4.png', 0, 1),
(3, 'Manuel', 'manuel@hotmail.com', '$2b$10$H7QPIXXVyqGehSxNUMkiIu5ffYs1sV9fp4GMR9y7/YhC2gQXqRELm', '/images/users/img3.png', 0, 0),
(4, 'Rosa', 'rosa@gmail.com', '$2b$10$9MXvkSjmDDgmx4typFfqjORlF5yQvqO6m31OZo3pf5cyR9jhBJU02', '/images/users/img2.png', 0, 1),
(5, 'Juana', 'juanajuana@gmail.com', '$2b$10$oP9x2gPPmpQzO6/CMuG91OCW5r6mCWiYIscPQLHGr9i2aZ1kZwQJe', '/images/users/img1.png', 0, 0),
(7, 'licia', 'licia.coronelojeda@gmail.com', '$2b$10$uGImbCpgT.a8OujfynEqH.Ssf.lmJNERZZdxgKa.NMeYqeXc/f7CW', '/images/users/img-1595859519325.png', 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_producto` (`id_products`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_category` (`id_category`),
  ADD KEY `id_brand` (`id_brand`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`id_products`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
