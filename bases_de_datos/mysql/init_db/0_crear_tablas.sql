-- Script para crear tablas relacionadas con estudiantes

CREATE TABLE estudiantes (
    estudiante_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE,
    email VARCHAR(100) UNIQUE,
    promedio DECIMAL(3,2)
);

CREATE TABLE cursos (
    curso_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre_curso VARCHAR(100) NOT NULL,
    descripcion TEXT,
    creditos INT NOT NULL
);

CREATE TABLE inscripciones (
    inscripcion_id INT PRIMARY KEY AUTO_INCREMENT,
    estudiante_id INT,
    curso_id INT,
    fecha_inscripcion DATE,
    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(estudiante_id) ON DELETE CASCADE,
    FOREIGN KEY (curso_id) REFERENCES cursos(curso_id) ON DELETE CASCADE
);

CREATE TABLE profesores (
    profesor_id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    ciudad VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    antiguedad INT,
    salario DECIMAL(10, 2) NOT NULL
);

CREATE TABLE cursos_profesores (
    curso_id INT,
    profesor_id INT,
    PRIMARY KEY (curso_id, profesor_id),
    FOREIGN KEY (curso_id) REFERENCES cursos(curso_id) ON DELETE CASCADE,
    FOREIGN KEY (profesor_id) REFERENCES profesores(profesor_id) ON DELETE CASCADE
);