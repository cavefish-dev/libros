-- Script para cargar datos de ejemplo en las tablas

INSERT INTO estudiantes (nombre, apellido, ciudad, fecha_nacimiento, email, promedio) VALUES
('Ana', 'García', 'Madrid', '2000-01-15', 'ana.garcia@email.com', 8.7),
('Ana', 'Martínez', 'Barcelona', '1999-05-22', 'ana.martinez@email.com', 9.1),
('María', 'López', 'Madrid', '2001-03-10', 'maria.lopez@email.com', 7.8),
('Carlos', 'Sánchez', 'Barcelona', '1998-07-30', 'carlos.sanchez@email.com', 8.3),
('Lucía', 'Fernández', 'Madrid', '2002-11-05', 'lucia.fernandez@email.com', 9.5),
('Javier', 'Gómez', 'Sevilla', '2000-02-20', 'javier.gomez@email.com', 8.0);

-- Insertar cursos
INSERT INTO cursos (nombre_curso, descripcion) VALUES
('Matemáticas', 'Curso de matemáticas básicas'),
('Historia', 'Curso de historia universal'),
('Programación', 'Curso de introducción a la programación'),
('Física', 'Curso de física general'),
('Literatura', 'Curso de literatura española'),
('Química', 'Curso de química orgánica');

INSERT INTO profesores (nombre, apellido, ciudad, email, antiguedad, salario) VALUES
('Ana', 'Ruiz', 'Madrid', 'ana.ruiz@email.com', 10, 1300),
('Sofía', 'Torres', 'Barcelona', 'sofia.torres@email.com', 8, 1500),
('Miguel', 'Castro', 'Madrid', 'miguel.castro@email.com', 12, 1400),
('Elena', 'Vega', 'Barcelona', 'elena.vega@email.com', 7, 1100),
('Pedro', 'Molina', 'Granada', 'pedro.molina@email.com', 15, 1300),
('Laura', 'Jiménez', 'Granada', 'laura.jimenez@email.com', 9, 1250);

-- Insertar inscripciones
INSERT INTO inscripciones (id_estudiante, id_curso, fecha_inscripcion) VALUES
(1, 1, '2025-01-10'),
(1, 2, '2025-01-11'),
(2, 3, '2025-01-12'),
(2, 4, '2025-01-13'),
(3, 5, '2025-01-14'),
(3, 1, '2025-01-15'),
(4, 2, '2025-01-16'),
(4, 3, '2025-01-17'),
(5, 4, '2025-01-18'),
(5, 5, '2025-01-19');

-- Insertar cursos_profesores
INSERT INTO cursos_profesores (id_curso, id_profesor) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(1, 2),
(2, 3),
(3, 4),
(4, 5),
(5, 1),
(1, 6);
