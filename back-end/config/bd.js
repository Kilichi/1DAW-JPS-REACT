import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

export const db = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const testConnection = async () => {
  try {
    const res = await db.query('SELECT NOW()');
    console.log('Conexión exitosa:', res.rows[0]);
  } catch (err) {
    console.error('Error conectando a la DB:', err);
  }
};

testConnection();

/*
const seedDB = async () => {
  try {
    await db.query(`
      DROP TABLE IF EXISTS articulos;

      CREATE TABLE articulos (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(100),
        descripcion TEXT,
        imagen VARCHAR(100),
        categoria VARCHAR(50),
        code_url VARCHAR(255)
      );

      INSERT INTO articulos (id, titulo, descripcion, imagen, categoria, code_url) VALUES
      (1, 'Calculadora JAVA', 'Calculadora en consola con JAVA', 'java_calculadora.png', 'Programación', 'https://github.com/kilichi'),
      (2, 'Bases de Datos', 'Proyectos con gestión de datos', 'bases_datos.png', 'Bases de Datos', NULL),
      (3, 'Entornos de Desarrollo', 'Herramientas y diagramas de flujo', 'entornos_dev.png', 'Entornos de Desarrollo', NULL);
    `);
    console.log('Datos insertados correctamente');
  } catch (err) {
    console.error('Error insertando datos:', err);
  }
};

seedDB();

*/