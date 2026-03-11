db = db.getSiblingDB('academia');

// ─── profesores ───────────────────────────────────────────────────────────────

db.createCollection('profesores', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['nombre', 'apellido', 'ciudad', 'email', 'antiguedad', 'salario'],
      properties: {
        _id:        { bsonType: 'objectId' },
        nombre:     { bsonType: 'string' },
        apellido:   { bsonType: 'string' },
        ciudad:     { bsonType: 'string' },
        email:      { bsonType: 'string' },
        antiguedad: { bsonType: 'int',    minimum: 0 },
        salario:    { bsonType: 'number', minimum: 0 },
      }
    }
  },
  validationAction: 'error'
});

// ─── cursos ───────────────────────────────────────────────────────────────────

db.createCollection('cursos', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['nombre', 'descripcion', 'creditos', 'id_profesores'],
      properties: {
        _id:           { bsonType: 'objectId' },
        nombre:        { bsonType: 'string' },
        descripcion:   { bsonType: 'string' },
        creditos:      { bsonType: 'int',   minimum: 1 },
        id_profesores: {
          bsonType: 'array',
          items: { bsonType: 'objectId' },
          description: 'Referencias a los _id de los profesores que imparten el curso'
        }
      }
    }
  },
  validationAction: 'error'
});

// ─── estudiantes ──────────────────────────────────────────────────────────────

db.createCollection('estudiantes', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['nombre', 'apellido', 'ciudad', 'fecha_nacimiento', 'email', 'promedio'],
      properties: {
        _id:              { bsonType: 'objectId' },
        nombre:           { bsonType: 'string' },
        apellido:         { bsonType: 'string' },
        ciudad:           { bsonType: 'string' },
        fecha_nacimiento: { bsonType: 'date' },
        email:            { bsonType: 'string' },
        promedio:         { bsonType: 'number', minimum: 0, maximum: 10 },
      }
    }
  },
  validationAction: 'error'
});

// ─── inscripciones ────────────────────────────────────────────────────────────

db.createCollection('inscripciones', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['id_estudiante', 'id_curso', 'fecha_inscripcion'],
      properties: {
        _id:               { bsonType: 'objectId' },
        id_estudiante:     { bsonType: 'objectId', description: 'Referencia al _id del estudiante' },
        id_curso:          { bsonType: 'objectId', description: 'Referencia al _id del curso' },
        fecha_inscripcion: { bsonType: 'date' },
      }
    }
  },
  validationAction: 'error'
});
