-- Script para cargar datos de ejemplo en las tablas

-- Insertar estudiantes
INSERT INTO estudiantes (nombre, apellido, ciudad, fecha_nacimiento, email, promedio) VALUES
('Ana', 'García', 'Madrid', '2000-01-15', 'ana.garcia@email.com', 8.7), -- Id: 1
('Ana', 'Martínez', 'Barcelona', '1999-05-22', 'ana.martinez@email.com', 9.1), -- Id: 2
('María', 'López', 'Madrid', '2001-03-10', 'maria.lopez@email.com', 7.8), -- Id: 3
('Carlos', 'Sánchez', 'Barcelona', '1998-07-30', 'carlos.sanchez@email.com', 8.3), -- Id: 4
('Lucía', 'Fernández', 'Madrid', '2002-11-05', 'lucia.fernandez@email.com', 9.5), -- Id: 5
('Javier', 'Gómez', 'Sevilla', '2000-02-20', 'javier.gomez@email.com', 8.0), -- Id: 6
('Miguel', 'Pérez', 'Valencia', '2001-06-12', 'miguel.perez@email.com', 7.9), -- Id: 7
('Sara', 'Romero', 'Bilbao', '2000-09-23', 'sara.romero@email.com', 8.2), -- Id: 8
('David', 'Navarro', 'Zaragoza', '1999-12-01', 'david.navarro@email.com', 7.5), -- Id: 9
('Elena', 'Molina', 'Alicante', '2002-03-18', 'elena.molina@email.com', 8.8), -- Id: 10
('Pablo', 'Ortega', 'Valladolid', '2001-11-27', 'pablo.ortega@email.com', 8.1), -- Id: 11
('Carmen', 'Santos', 'Murcia', '2000-04-14', 'carmen.santos@email.com', 9.0), -- Id: 12
('Raúl', 'Iglesias', 'Santander', '1998-08-09', 'raul.iglesias@email.com', 7.6), -- Id: 13
('Patricia', 'Vega', 'Toledo', '2002-10-30', 'patricia.vega@email.com', 8.4), -- Id: 14
('Jorge', 'Cano', 'Salamanca', '1999-07-19', 'jorge.cano@email.com', 7.7), -- Id: 15
('Isabel', 'Reyes', 'Cádiz', '2001-02-25', 'isabel.reyes@email.com', 8.9), -- Id: 16
('Alberto', 'Moreno', 'León', '2000-05-06', 'alberto.moreno@email.com', 8.3), -- Id: 17
('Teresa', 'Gil', 'Logroño', '2002-12-13', 'teresa.gil@email.com', 7.8), -- Id: 18
('Francisco', 'Lara', 'Burgos', '1998-03-21', 'francisco.lara@email.com', 8.0), -- Id: 19
('Marta', 'Cruz', 'Almería', '2001-09-02', 'marta.cruz@email.com', 8.6); -- Id: 20


-- Insertar cursos
INSERT INTO cursos (nombre_curso, descripcion, creditos) VALUES
('Matemáticas', 'Curso de matemáticas básicas', 5), -- Id: 1
('Historia', 'Curso de historia universal', 4), -- Id: 2
('Programación', 'Curso de introducción a la programación', 6), -- Id: 3
('Filosofía', 'Curso de filosofía antigua', 3), -- Id: 4
('Química', 'Curso de química básica', 5), -- Id: 5
('Física', 'Curso de física general', 5), -- Id: 6
('Literatura', 'Curso de literatura española', 4), -- Id: 7
('Química', 'Curso de química orgánica', 5), -- Id: 8
('Biología', 'Curso de biología general', 4), -- Id: 9
('Geografía', 'Curso de geografía mundial', 4), -- Id: 10
('Arte', 'Curso de historia del arte', 3), -- Id: 11
('Mates Avanzadas', 'Curso de matemáticas avanzadas', 6), -- Id: 12
('Estadística', 'Curso de estadística aplicada', 4), -- Id: 13
('Psicología', 'Curso de introducción a la psicología', 3), -- Id: 14
('Sociología', 'Curso de sociología básica', 3), -- Id: 15
('Educación Física', 'Curso de actividad física y salud', 2), -- Id: 16
('Música', 'Curso de apreciación musical', 3), -- Id: 17
('Economía', 'Curso de economía básica', 4), -- Id: 18
('Filosofía', 'Curso de introducción a la filosofía', 3), -- Id: 19
('Informática', 'Curso de informática básica', 4), -- Id: 20
('Inglés', 'Curso de inglés intermedio', 4), -- Id: 21
('Francés', 'Curso de francés básico', 3); -- Id: 22


-- Insertar profesores
INSERT INTO profesores (nombre, apellido, ciudad, email, antiguedad, salario) VALUES
('Ana', 'Ruiz', 'Madrid', 'ana.ruiz@email.com', 10, 1300), -- Id: 1
('Sofía', 'Torres', 'Barcelona', 'sofia.torres@email.com', 8, 1500), -- Id: 2
('Miguel', 'Castro', 'Madrid', 'miguel.castro@email.com', 12, 1400), -- Id: 3
('Elena', 'Vega', 'Barcelona', 'elena.vega@email.com', 7, 1100), -- Id: 4
('Pedro', 'Molina', 'Granada', 'pedro.molina@email.com', 15, 1300), -- Id: 5
('Laura', 'Jiménez', 'Granada', 'laura.jimenez@email.com', 9, 1250), -- Id: 6
('Manuel', 'Santos', 'Valencia', 'manuel.santos@email.com', 11, 1350), -- Id: 7
('Beatriz', 'López', 'Sevilla', 'beatriz.lopez@email.com', 6, 1200), -- Id: 8
('Ricardo', 'Pérez', 'Bilbao', 'ricardo.perez@email.com', 13, 1450), -- Id: 9
('Silvia', 'Romero', 'Zaragoza', 'silvia.romero@email.com', 8, 1280); -- Id: 10


-- Insertar inscripciones

INSERT INTO inscripciones (id_estudiante, id_curso, fecha_inscripcion) VALUES
(1, 1, '2025-01-10'), (1, 2, '2025-01-11'), (1, 3, '2025-01-12'), (1, 4, '2025-01-13'),
(2, 2, '2025-01-14'), (2, 3, '2025-01-15'), (2, 5, '2025-01-16'),
(3, 1, '2025-01-17'), (3, 4, '2025-01-18'), (3, 6, '2025-01-19'),
(4, 3, '2025-01-20'), (4, 5, '2025-01-21'), (4, 7, '2025-01-22'),
(5, 2, '2025-01-23'), (5, 6, '2025-01-24'), (5, 8, '2025-01-25'),
(6, 1, '2025-01-26'), (6, 4, '2025-01-27'), (6, 9, '2025-01-28'),
(7, 2, '2025-01-29'), (7, 3, '2025-01-30'), (7, 10, '2025-01-31'),
(8, 5, '2025-02-01'), (8, 6, '2025-02-02'), (8, 11, '2025-02-03'),
(9, 1, '2025-02-04'), (9, 7, '2025-02-05'), (9, 12, '2025-02-06'),
(10, 3, '2025-02-07'), (10, 8, '2025-02-08'), (10, 13, '2025-02-09'),
(11, 4, '2025-02-10'), (11, 9, '2025-02-11'), (11, 14, '2025-02-12'),
(12, 5, '2025-02-13'), (12, 10, '2025-02-14'), (12, 15, '2025-02-15'),
(13, 6, '2025-02-16'), (13, 11, '2025-02-17'), (13, 16, '2025-02-18'),
(14, 7, '2025-02-19'), (14, 12, '2025-02-20'), (14, 17, '2025-02-21'),
(15, 8, '2025-02-22'), (15, 13, '2025-02-23'), (15, 18, '2025-02-24'),
(16, 9, '2025-02-25'), (16, 14, '2025-02-26'), (16, 19, '2025-02-27'),
(17, 10, '2025-02-28'), (17, 15, '2025-03-01'), (17, 20, '2025-03-02'),
(18, 11, '2025-03-03'), (18, 16, '2025-03-04'), (18, 21, '2025-03-05'),
(19, 12, '2025-03-06'), (19, 17, '2025-03-07'), (19, 22, '2025-03-08'),
(20, 13, '2025-03-09'), (20, 18, '2025-03-10'), (20, 1, '2025-03-11');

-- Insertar cursos_profesores
INSERT INTO cursos_profesores (id_curso, id_profesor) VALUES
(1, 1), (1, 2), (1, 3),
(2, 2), (2, 4),
(3, 3), (3, 5), (3, 6),
(4, 4), (4, 7),
(5, 5), (5, 8),
(6, 6), (6, 9),
(7, 7), (7, 10),
(8, 8), (8, 1),
(9, 9), (9, 2),
(10, 10), (10, 3),
(11, 1), (11, 4),
(12, 2), (12, 5),
(13, 3), (13, 6),
(14, 4), (14, 7),
(15, 5), (15, 8),
(16, 6), (16, 9),
(17, 7), (17, 10),
(18, 8), (18, 1),
(19, 9), (19, 2),
(20, 10), (20, 3),
(21, 1), (21, 4),
(22, 2), (22, 5);

