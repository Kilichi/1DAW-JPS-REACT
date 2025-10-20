import express from 'express';
import { db } from '../config/bd.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM articulos');
  
  const DATA = {};
  for (const art of rows) {
    DATA[art.categoria] = {
      URL: '#',
      CategoryIcon: 'fas fa-cogs',
      CategoryTittle: art.titulo,
      CategoryDescription: art.descripcion,
      CategoryCount: art.categoria,
      Image: `/imagenes/${art.imagen}`,
      Code: art.code_url || '#'
    };
  }
  
  res.json(DATA);
});

// 🔒 Crear nuevo artículo (solo autorizado)
router.post('/crearentrada', verifyToken, async (req, res) => {
  const { titulo, descripcion, imagen, categoria, code_url } = req.body;
  await db.query('INSERT INTO articulos (titulo, descripcion, imagen, categoria, code_url) VALUES (?, ?, ?, ?, ?)', [titulo, descripcion, imagen, categoria, code_url]);
  res.json({ message: 'Artículo creado correctamente' });
});

export default router;
