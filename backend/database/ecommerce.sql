create database ecommerce;
use ecommerce;

create table categories (
	id int primary key auto_increment not null,
    name varchar(255)
);

CREATE TABLE products (
  id INT PRIMARY KEY auto_increment not null,
  name VARCHAR(255),
  price DECIMAL(10, 2),
  description TEXT,
  availability BOOLEAN,
  category_id INT,
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

INSERT INTO categories (id, name) VALUES (1, 'Electrónica');
INSERT INTO categories (id, name) VALUES (2, 'Ropa');
INSERT INTO categories (id, name) VALUES (3, 'Hogar');

INSERT INTO products (id, name, price, description, availability, category_id)
VALUES
  (1, 'Teléfono inteligente', 499.99, 'Un teléfono avanzado con muchas características.', true, 1),
  (2, 'Televisor LED', 799.99, 'Una televisión de alta definición con pantalla LED.', true, 3),
  (3, 'Camiseta de algodón', 19.99, 'Una camiseta cómoda y elegante.', true, 2),
  (4, 'Laptop', 799.99, 'Una computadora portátil potente y ligera.', true, 1),
  (5, 'Sofá de cuero', 699.99, 'Un sofá cómodo y elegante para tu sala de estar.', false, 3),
  (6, 'Zapatos deportivos', 49.99, 'Zapatos cómodos para correr o hacer ejercicio.', true, 2),
  (7, 'Refrigerador', 899.99, 'Un refrigerador espacioso para mantener tus alimentos frescos.', true, 3),
  (8, 'Cámara digital', 299.99, 'Captura momentos especiales con esta cámara de alta resolución.', true, 1),
  (9, 'Mesa de comedor', 199.99, 'Una mesa resistente y elegante para tus comidas en familia.', false, 3),
  (10, 'Auriculares inalámbricos', 79.99, 'Auriculares de calidad para disfrutar de tu música sin cables.', true, 1),
  (11, 'Smartwatch', 149.99, 'Un reloj inteligente para seguimiento de actividad y notificaciones.', true, 1),
  (12, 'Sillón reclinable', 299.99, 'Un cómodo sillón para relajarte en casa.', true, 3),
  (13, 'Zapatos de vestir', 59.99, 'Zapatos elegantes para ocasiones especiales.', true, 2),
  (14, 'Lavadora', 399.99, 'Una lavadora eficiente para el lavado de ropa.', false, 3),
  (15, 'Altavoz Bluetooth', 39.99, 'Altavoz portátil para disfrutar de tu música en cualquier lugar.', true, 1),
  (16, 'Escritorio de oficina', 149.99, 'Un escritorio espacioso para trabajar desde casa.', true, 3),
  (17, 'Afeitadora eléctrica', 79.99, 'Una afeitadora de precisión para un afeitado suave.', true, 1),
  (18, 'Mesa de centro', 69.99, 'Una mesa elegante para tu sala de estar.', false, 3),
  (19, 'Tablet', 199.99, 'Una tablet versátil para el entretenimiento y el trabajo.', true, 1),
  (20, 'Silla de jardín', 49.99, 'Una silla cómoda para relajarte al aire libre.', false, 3);

select * from products;


