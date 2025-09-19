import sqlite3 from 'sqlite3';

// Inicializa y exporta la base de datos SQLite
export async function getDB() {
  const db = new sqlite3.Database('./peluqueria.db');
  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellido TEXT NOT NULL,
    dni TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    fecha_nacimiento TEXT NOT NULL,
    password TEXT NOT NULL
  )`);
  return db;
}
