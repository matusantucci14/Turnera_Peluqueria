import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import { getDB } from './db.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Registro de usuario
app.post('/api/register', async (req, res) => {
  const { nombre, apellido, dni, email, fecha, password } = req.body;
  if (!nombre || !apellido || !dni || !email || !fecha || !password) {
    return res.status(400).json({ error: 'Completa todos los campos.' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres.' });
  }
  try {
    const db = await getDB();
    const hash = await bcrypt.hash(password, 10);
    db.run(
      'INSERT INTO usuarios (nombre, apellido, dni, email, fecha_nacimiento, password) VALUES (?, ?, ?, ?, ?, ?)',
      [nombre, apellido, dni, email, fecha, hash],
      function(err) {
        if (err) {
          if (err.message.includes('UNIQUE')) {
            return res.status(400).json({ error: 'El email o DNI ya está registrado.' });
          }
          return res.status(500).json({ error: 'Error en el servidor.' });
        }
        res.json({ success: true });
      }
    );
  } catch (err) {
    res.status(500).json({ error: 'Error en el servidor.' });
  }
});

// Login de usuario
app.post('/api/login', async (req, res) => {
  const { usuario, password } = req.body;
  if (!usuario || !password) {
    return res.status(400).json({ error: 'Completa usuario/email y contraseña.' });
  }
  try {
    const db = await getDB();
    db.get(
      'SELECT * FROM usuarios WHERE email = ? OR dni = ?',
      [usuario, usuario],
      async (err, user) => {
        if (err) return res.status(500).json({ error: 'Error en el servidor.' });
        if (!user) return res.status(401).json({ error: 'Usuario no encontrado.' });
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ error: 'Contraseña incorrecta.' });
        const { password: _, ...userData } = user;
        res.json({ success: true, user: userData });
      }
    );
  } catch (err) {
    res.status(500).json({ error: 'Error en el servidor.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
