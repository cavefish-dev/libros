db = db.getSiblingDB('academia');

// ─── Profesores ───────────────────────────────────────────────────────────────

db.profesores.drop();
db.profesores.insertMany([
  { nombre: "Ana",     apellido: "Ruiz",     ciudad: "Madrid",    email: "ana.ruiz@email.com",        antiguedad: Int32(10), salario: 1300 },
  { nombre: "Sofía",   apellido: "Torres",   ciudad: "Barcelona", email: "sofia.torres@email.com",    antiguedad: Int32( 8), salario: 1500 },
  { nombre: "Miguel",  apellido: "Castro",   ciudad: "Madrid",    email: "miguel.castro@email.com",   antiguedad: Int32(12), salario: 1400 },
  { nombre: "Elena",   apellido: "Vega",     ciudad: "Barcelona", email: "elena.vega@email.com",      antiguedad: Int32( 7), salario: 1100 },
  { nombre: "Pedro",   apellido: "Molina",   ciudad: "Granada",   email: "pedro.molina@email.com",    antiguedad: Int32(15), salario: 1300 },
  { nombre: "Laura",   apellido: "Jiménez",  ciudad: "Granada",   email: "laura.jimenez@email.com",   antiguedad: Int32( 9), salario: 1250 },
  { nombre: "Manuel",  apellido: "Santos",   ciudad: "Valencia",  email: "manuel.santos@email.com",   antiguedad: Int32(11), salario: 1350 },
  { nombre: "Beatriz", apellido: "López",    ciudad: "Sevilla",   email: "beatriz.lopez@email.com",   antiguedad: Int32( 6), salario: 1200 },
  { nombre: "Ricardo", apellido: "Pérez",    ciudad: "Bilbao",    email: "ricardo.perez@email.com",   antiguedad: Int32(13), salario: 1450 },
  { nombre: "Silvia",  apellido: "Romero",   ciudad: "Zaragoza",  email: "silvia.romero@email.com",   antiguedad: Int32( 8), salario: 1280 },
  { nombre: "Joaquín", apellido: "Herrera",  ciudad: "Toledo",    email: "joaquin.herrera@email.com", antiguedad: Int32(10), salario: 1320 },
  { nombre: "Mónica",  apellido: "Crespo",   ciudad: "Pamplona",  email: "monica.crespo@email.com",   antiguedad: Int32( 7), salario: 1200 },
  { nombre: "Álvaro",  apellido: "Soto",     ciudad: "Segovia",   email: "alvaro.soto@email.com",     antiguedad: Int32( 9), salario: 1370 },
  { nombre: "Paula",   apellido: "Vidal",    ciudad: "Cuenca",    email: "paula.vidal@email.com",     antiguedad: Int32( 8), salario: 1290 },
  { nombre: "Vicente", apellido: "Rey",      ciudad: "Ávila",     email: "vicente.rey@email.com",     antiguedad: Int32(12), salario: 1410 },
]);

// Mapa email → ObjectId para resolver relaciones
const prof = {};
db.profesores.find().forEach(p => { prof[p.email] = p._id; });

// ─── Cursos (id_profesores resueltos por email) ───────────────────────────────

db.cursos.drop();
db.cursos.insertMany([
  { nombre: "Matemáticas",     descripcion: "Curso de matemáticas básicas",             creditos: Int32(5), id_profesores: [prof["ana.ruiz@email.com"],      prof["sofia.torres@email.com"],  prof["miguel.castro@email.com"]] },
  { nombre: "Historia",        descripcion: "Curso de historia universal",               creditos: Int32(4), id_profesores: [prof["sofia.torres@email.com"],  prof["elena.vega@email.com"]] },
  { nombre: "Programación",    descripcion: "Curso de introducción a la programación",  creditos: Int32(6), id_profesores: [prof["miguel.castro@email.com"], prof["pedro.molina@email.com"],  prof["laura.jimenez@email.com"]] },
  { nombre: "Filosofía",       descripcion: "Curso de filosofía antigua",                creditos: Int32(3), id_profesores: [prof["elena.vega@email.com"],    prof["manuel.santos@email.com"]] },
  { nombre: "Química",         descripcion: "Curso de química básica",                   creditos: Int32(5), id_profesores: [prof["pedro.molina@email.com"],  prof["beatriz.lopez@email.com"]] },
  { nombre: "Física",          descripcion: "Curso de física general",                   creditos: Int32(5), id_profesores: [prof["laura.jimenez@email.com"], prof["ricardo.perez@email.com"]] },
  { nombre: "Literatura",      descripcion: "Curso de literatura española",              creditos: Int32(4), id_profesores: [prof["manuel.santos@email.com"], prof["silvia.romero@email.com"]] },
  { nombre: "Química Orgánica",descripcion: "Curso de química orgánica",                 creditos: Int32(5), id_profesores: [prof["beatriz.lopez@email.com"], prof["ana.ruiz@email.com"]] },
  { nombre: "Biología",        descripcion: "Curso de biología general",                 creditos: Int32(4), id_profesores: [prof["ricardo.perez@email.com"], prof["sofia.torres@email.com"]] },
  { nombre: "Geografía",       descripcion: "Curso de geografía mundial",                creditos: Int32(4), id_profesores: [prof["silvia.romero@email.com"], prof["miguel.castro@email.com"]] },
  { nombre: "Arte",            descripcion: "Curso de historia del arte",                creditos: Int32(3), id_profesores: [prof["ana.ruiz@email.com"],      prof["elena.vega@email.com"]] },
  { nombre: "Mates Avanzadas", descripcion: "Curso de matemáticas avanzadas",            creditos: Int32(6), id_profesores: [prof["sofia.torres@email.com"],  prof["pedro.molina@email.com"]] },
  { nombre: "Estadística",     descripcion: "Curso de estadística aplicada",             creditos: Int32(4), id_profesores: [prof["miguel.castro@email.com"], prof["laura.jimenez@email.com"]] },
  { nombre: "Psicología",      descripcion: "Curso de introducción a la psicología",     creditos: Int32(3), id_profesores: [prof["elena.vega@email.com"],    prof["manuel.santos@email.com"]] },
  { nombre: "Sociología",      descripcion: "Curso de sociología básica",                creditos: Int32(3), id_profesores: [prof["pedro.molina@email.com"],  prof["beatriz.lopez@email.com"]] },
  { nombre: "Educación Física",descripcion: "Curso de actividad física y salud",         creditos: Int32(2), id_profesores: [prof["laura.jimenez@email.com"], prof["ricardo.perez@email.com"]] },
  { nombre: "Música",          descripcion: "Curso de apreciación musical",              creditos: Int32(3), id_profesores: [prof["manuel.santos@email.com"], prof["silvia.romero@email.com"]] },
  { nombre: "Economía",        descripcion: "Curso de economía básica",                  creditos: Int32(4), id_profesores: [prof["beatriz.lopez@email.com"], prof["ana.ruiz@email.com"]] },
  { nombre: "Filosofía Intro", descripcion: "Curso de introducción a la filosofía",      creditos: Int32(3), id_profesores: [prof["ricardo.perez@email.com"], prof["sofia.torres@email.com"]] },
  { nombre: "Informática",     descripcion: "Curso de informática básica",               creditos: Int32(4), id_profesores: [prof["silvia.romero@email.com"], prof["miguel.castro@email.com"]] },
  { nombre: "Inglés",          descripcion: "Curso de inglés intermedio",                creditos: Int32(4), id_profesores: [prof["ana.ruiz@email.com"],      prof["elena.vega@email.com"]] },
  { nombre: "Francés",         descripcion: "Curso de francés básico",                   creditos: Int32(3), id_profesores: [prof["sofia.torres@email.com"],  prof["pedro.molina@email.com"]] },
  { nombre: "Robótica",        descripcion: "Curso de introducción a la robótica",       creditos: Int32(5), id_profesores: [] },
  { nombre: "Derecho",         descripcion: "Curso de derecho civil",                    creditos: Int32(4), id_profesores: [] },
  { nombre: "Marketing",       descripcion: "Curso de marketing digital",                creditos: Int32(3), id_profesores: [] },
  { nombre: "Fotografía",      descripcion: "Curso de fotografía artística",             creditos: Int32(2), id_profesores: [] },
  { nombre: "Astronomía",      descripcion: "Curso de astronomía básica",                creditos: Int32(3), id_profesores: [] },
]);

// ─── Estudiantes ──────────────────────────────────────────────────────────────

db.estudiantes.drop();
db.estudiantes.insertMany([
  { nombre: "Ana",       apellido: "García",    ciudad: "Madrid",      fecha_nacimiento: new Date("2000-01-15"), email: "ana.garcia@email.com",      promedio: 8.7 },
  { nombre: "Ana",       apellido: "Martínez",  ciudad: "Barcelona",   fecha_nacimiento: new Date("1999-05-22"), email: "ana.martinez@email.com",    promedio: 9.1 },
  { nombre: "María",     apellido: "López",     ciudad: "Madrid",      fecha_nacimiento: new Date("2001-03-10"), email: "maria.lopez@email.com",     promedio: 7.8 },
  { nombre: "Carlos",    apellido: "Sánchez",   ciudad: "Barcelona",   fecha_nacimiento: new Date("1998-07-30"), email: "carlos.sanchez@email.com",  promedio: 8.3 },
  { nombre: "Lucía",     apellido: "Fernández", ciudad: "Madrid",      fecha_nacimiento: new Date("2002-11-05"), email: "lucia.fernandez@email.com", promedio: 9.5 },
  { nombre: "Javier",    apellido: "Gómez",     ciudad: "Sevilla",     fecha_nacimiento: new Date("2000-02-20"), email: "javier.gomez@email.com",    promedio: 8 },
  { nombre: "Miguel",    apellido: "Pérez",     ciudad: "Valencia",    fecha_nacimiento: new Date("2001-06-12"), email: "miguel.perez@email.com",    promedio: 7.9 },
  { nombre: "Sara",      apellido: "Romero",    ciudad: "Bilbao",      fecha_nacimiento: new Date("2000-09-23"), email: "sara.romero@email.com",     promedio: 8.2 },
  { nombre: "David",     apellido: "Navarro",   ciudad: "Zaragoza",    fecha_nacimiento: new Date("1999-12-01"), email: "david.navarro@email.com",   promedio: 7.5 },
  { nombre: "Elena",     apellido: "Molina",    ciudad: "Alicante",    fecha_nacimiento: new Date("2002-03-18"), email: "elena.molina@email.com",    promedio: 8.8 },
  { nombre: "Pablo",     apellido: "Ortega",    ciudad: "Valladolid",  fecha_nacimiento: new Date("2001-11-27"), email: "pablo.ortega@email.com",    promedio: 8.1 },
  { nombre: "Carmen",    apellido: "Santos",    ciudad: "Murcia",      fecha_nacimiento: new Date("2000-04-14"), email: "carmen.santos@email.com",   promedio: 9 },
  { nombre: "Raúl",      apellido: "Iglesias",  ciudad: "Santander",   fecha_nacimiento: new Date("1998-08-09"), email: "raul.iglesias@email.com",   promedio: 7.6 },
  { nombre: "Patricia",  apellido: "Vega",      ciudad: "Toledo",      fecha_nacimiento: new Date("2002-10-30"), email: "patricia.vega@email.com",   promedio: 8.4 },
  { nombre: "Jorge",     apellido: "Cano",      ciudad: "Salamanca",   fecha_nacimiento: new Date("1999-07-19"), email: "jorge.cano@email.com",      promedio: 7.7 },
  { nombre: "Isabel",    apellido: "Reyes",     ciudad: "Cádiz",       fecha_nacimiento: new Date("2001-02-25"), email: "isabel.reyes@email.com",    promedio: 8.9 },
  { nombre: "Alberto",   apellido: "Moreno",    ciudad: "León",        fecha_nacimiento: new Date("2000-05-06"), email: "alberto.moreno@email.com",  promedio: 8.3 },
  { nombre: "Teresa",    apellido: "Gil",       ciudad: "Logroño",     fecha_nacimiento: new Date("2002-12-13"), email: "teresa.gil@email.com",      promedio: 7.8 },
  { nombre: "Francisco", apellido: "Lara",      ciudad: "Burgos",      fecha_nacimiento: new Date("1998-03-21"), email: "francisco.lara@email.com",  promedio: 8 },
  { nombre: "Marta",     apellido: "Cruz",      ciudad: "Almería",     fecha_nacimiento: new Date("2001-09-02"), email: "marta.cruz@email.com",      promedio: 8.6 },
  { nombre: "Nuria",     apellido: "Sanz",      ciudad: "Pamplona",    fecha_nacimiento: new Date("2002-08-15"), email: "nuria.sanz@email.com",      promedio: 8.2 },
  { nombre: "Hugo",      apellido: "Delgado",   ciudad: "Segovia",     fecha_nacimiento: new Date("2000-03-11"), email: "hugo.delgado@email.com",    promedio: 7.7 },
  { nombre: "Clara",     apellido: "Ramos",     ciudad: "Cuenca",      fecha_nacimiento: new Date("2001-12-20"), email: "clara.ramos@email.com",     promedio: 8.5 },
  { nombre: "Andrés",    apellido: "Pardo",     ciudad: "Ávila",       fecha_nacimiento: new Date("1999-06-28"), email: "andres.pardo@email.com",    promedio: 7.9 },
  { nombre: "Sonia",     apellido: "Nieto",     ciudad: "Ciudad Real", fecha_nacimiento: new Date("2002-04-03"), email: "sonia.nieto@email.com",     promedio: 8.4 },
]);

// Mapas email/nombre → ObjectId para resolver relaciones
const est = {};
db.estudiantes.find().forEach(e => { est[e.email] = e._id; });

const cur = {};
db.cursos.find().forEach(c => { cur[c.nombre] = c._id; });

// ─── Inscripciones (resueltas por email del estudiante y nombre del curso) ────

db.inscripciones.drop();
db.inscripciones.insertMany([
  { id_estudiante: est["ana.garcia@email.com"],      id_curso: cur["Matemáticas"],     fecha_inscripcion: new Date("2025-01-10") },
  { id_estudiante: est["ana.garcia@email.com"],      id_curso: cur["Historia"],         fecha_inscripcion: new Date("2025-01-11") },
  { id_estudiante: est["ana.garcia@email.com"],      id_curso: cur["Programación"],     fecha_inscripcion: new Date("2025-01-12") },
  { id_estudiante: est["ana.garcia@email.com"],      id_curso: cur["Filosofía"],        fecha_inscripcion: new Date("2025-01-13") },
  { id_estudiante: est["ana.martinez@email.com"],    id_curso: cur["Historia"],         fecha_inscripcion: new Date("2025-01-14") },
  { id_estudiante: est["ana.martinez@email.com"],    id_curso: cur["Programación"],     fecha_inscripcion: new Date("2025-01-15") },
  { id_estudiante: est["ana.martinez@email.com"],    id_curso: cur["Química"],          fecha_inscripcion: new Date("2025-01-16") },
  { id_estudiante: est["maria.lopez@email.com"],     id_curso: cur["Matemáticas"],     fecha_inscripcion: new Date("2025-01-17") },
  { id_estudiante: est["maria.lopez@email.com"],     id_curso: cur["Filosofía"],        fecha_inscripcion: new Date("2025-01-18") },
  { id_estudiante: est["maria.lopez@email.com"],     id_curso: cur["Física"],           fecha_inscripcion: new Date("2025-01-19") },
  { id_estudiante: est["carlos.sanchez@email.com"],  id_curso: cur["Programación"],     fecha_inscripcion: new Date("2025-01-20") },
  { id_estudiante: est["carlos.sanchez@email.com"],  id_curso: cur["Química"],          fecha_inscripcion: new Date("2025-01-21") },
  { id_estudiante: est["carlos.sanchez@email.com"],  id_curso: cur["Literatura"],       fecha_inscripcion: new Date("2025-01-22") },
  { id_estudiante: est["lucia.fernandez@email.com"], id_curso: cur["Historia"],         fecha_inscripcion: new Date("2025-01-23") },
  { id_estudiante: est["lucia.fernandez@email.com"], id_curso: cur["Física"],           fecha_inscripcion: new Date("2025-01-24") },
  { id_estudiante: est["lucia.fernandez@email.com"], id_curso: cur["Química Orgánica"], fecha_inscripcion: new Date("2025-01-25") },
  { id_estudiante: est["javier.gomez@email.com"],    id_curso: cur["Matemáticas"],     fecha_inscripcion: new Date("2025-01-26") },
  { id_estudiante: est["javier.gomez@email.com"],    id_curso: cur["Filosofía"],        fecha_inscripcion: new Date("2025-01-27") },
  { id_estudiante: est["javier.gomez@email.com"],    id_curso: cur["Biología"],         fecha_inscripcion: new Date("2025-01-28") },
  { id_estudiante: est["miguel.perez@email.com"],    id_curso: cur["Historia"],         fecha_inscripcion: new Date("2025-01-29") },
  { id_estudiante: est["miguel.perez@email.com"],    id_curso: cur["Programación"],     fecha_inscripcion: new Date("2025-01-30") },
  { id_estudiante: est["miguel.perez@email.com"],    id_curso: cur["Geografía"],        fecha_inscripcion: new Date("2025-01-31") },
  { id_estudiante: est["sara.romero@email.com"],     id_curso: cur["Química"],          fecha_inscripcion: new Date("2025-02-01") },
  { id_estudiante: est["sara.romero@email.com"],     id_curso: cur["Física"],           fecha_inscripcion: new Date("2025-02-02") },
  { id_estudiante: est["sara.romero@email.com"],     id_curso: cur["Arte"],             fecha_inscripcion: new Date("2025-02-03") },
  { id_estudiante: est["david.navarro@email.com"],   id_curso: cur["Matemáticas"],     fecha_inscripcion: new Date("2025-02-04") },
  { id_estudiante: est["david.navarro@email.com"],   id_curso: cur["Literatura"],       fecha_inscripcion: new Date("2025-02-05") },
  { id_estudiante: est["david.navarro@email.com"],   id_curso: cur["Mates Avanzadas"],  fecha_inscripcion: new Date("2025-02-06") },
  { id_estudiante: est["elena.molina@email.com"],    id_curso: cur["Programación"],     fecha_inscripcion: new Date("2025-02-07") },
  { id_estudiante: est["elena.molina@email.com"],    id_curso: cur["Química Orgánica"], fecha_inscripcion: new Date("2025-02-08") },
  { id_estudiante: est["elena.molina@email.com"],    id_curso: cur["Estadística"],      fecha_inscripcion: new Date("2025-02-09") },
  { id_estudiante: est["pablo.ortega@email.com"],    id_curso: cur["Filosofía"],        fecha_inscripcion: new Date("2025-02-10") },
  { id_estudiante: est["pablo.ortega@email.com"],    id_curso: cur["Biología"],         fecha_inscripcion: new Date("2025-02-11") },
  { id_estudiante: est["pablo.ortega@email.com"],    id_curso: cur["Psicología"],       fecha_inscripcion: new Date("2025-02-12") },
  { id_estudiante: est["carmen.santos@email.com"],   id_curso: cur["Química"],          fecha_inscripcion: new Date("2025-02-13") },
  { id_estudiante: est["carmen.santos@email.com"],   id_curso: cur["Geografía"],        fecha_inscripcion: new Date("2025-02-14") },
  { id_estudiante: est["carmen.santos@email.com"],   id_curso: cur["Sociología"],       fecha_inscripcion: new Date("2025-02-15") },
  { id_estudiante: est["raul.iglesias@email.com"],   id_curso: cur["Física"],           fecha_inscripcion: new Date("2025-02-16") },
  { id_estudiante: est["raul.iglesias@email.com"],   id_curso: cur["Arte"],             fecha_inscripcion: new Date("2025-02-17") },
  { id_estudiante: est["raul.iglesias@email.com"],   id_curso: cur["Educación Física"], fecha_inscripcion: new Date("2025-02-18") },
  { id_estudiante: est["patricia.vega@email.com"],   id_curso: cur["Literatura"],       fecha_inscripcion: new Date("2025-02-19") },
  { id_estudiante: est["patricia.vega@email.com"],   id_curso: cur["Mates Avanzadas"],  fecha_inscripcion: new Date("2025-02-20") },
  { id_estudiante: est["patricia.vega@email.com"],   id_curso: cur["Música"],           fecha_inscripcion: new Date("2025-02-21") },
  { id_estudiante: est["jorge.cano@email.com"],      id_curso: cur["Química Orgánica"], fecha_inscripcion: new Date("2025-02-22") },
  { id_estudiante: est["jorge.cano@email.com"],      id_curso: cur["Estadística"],      fecha_inscripcion: new Date("2025-02-23") },
  { id_estudiante: est["jorge.cano@email.com"],      id_curso: cur["Economía"],         fecha_inscripcion: new Date("2025-02-24") },
  { id_estudiante: est["isabel.reyes@email.com"],    id_curso: cur["Biología"],         fecha_inscripcion: new Date("2025-02-25") },
  { id_estudiante: est["isabel.reyes@email.com"],    id_curso: cur["Psicología"],       fecha_inscripcion: new Date("2025-02-26") },
  { id_estudiante: est["isabel.reyes@email.com"],    id_curso: cur["Filosofía Intro"],  fecha_inscripcion: new Date("2025-02-27") },
  { id_estudiante: est["alberto.moreno@email.com"],  id_curso: cur["Geografía"],        fecha_inscripcion: new Date("2025-02-28") },
  { id_estudiante: est["alberto.moreno@email.com"],  id_curso: cur["Sociología"],       fecha_inscripcion: new Date("2025-03-01") },
  { id_estudiante: est["alberto.moreno@email.com"],  id_curso: cur["Informática"],      fecha_inscripcion: new Date("2025-03-02") },
  { id_estudiante: est["teresa.gil@email.com"],      id_curso: cur["Arte"],             fecha_inscripcion: new Date("2025-03-03") },
  { id_estudiante: est["teresa.gil@email.com"],      id_curso: cur["Educación Física"], fecha_inscripcion: new Date("2025-03-04") },
  { id_estudiante: est["teresa.gil@email.com"],      id_curso: cur["Inglés"],           fecha_inscripcion: new Date("2025-03-05") },
  { id_estudiante: est["francisco.lara@email.com"],  id_curso: cur["Mates Avanzadas"],  fecha_inscripcion: new Date("2025-03-06") },
  { id_estudiante: est["francisco.lara@email.com"],  id_curso: cur["Música"],           fecha_inscripcion: new Date("2025-03-07") },
  { id_estudiante: est["francisco.lara@email.com"],  id_curso: cur["Francés"],          fecha_inscripcion: new Date("2025-03-08") },
  { id_estudiante: est["marta.cruz@email.com"],      id_curso: cur["Estadística"],      fecha_inscripcion: new Date("2025-03-09") },
  { id_estudiante: est["marta.cruz@email.com"],      id_curso: cur["Economía"],         fecha_inscripcion: new Date("2025-03-10") },
  { id_estudiante: est["marta.cruz@email.com"],      id_curso: cur["Matemáticas"],     fecha_inscripcion: new Date("2025-03-11") },
]);
