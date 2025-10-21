import express from 'express';
import { db } from '../config/bd.js';
import { verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM articulos');
    const rows = result.rows; // aquí están los registros

    const DATA = {};

    for (const art of rows) {
      if (!DATA[art.categoria]) {
        DATA[art.categoria] = [];
      }

      DATA[art.categoria].push({
        URL: '#',
        CategoryIcon: 'fas fa-cogs',
        CategoryTittle: art.titulo,
        CategoryDescription: art.descripcion,
        CategoryCount: art.categoria,
        Image: `/imagenes/${art.imagen}`,
        Code: art.code_url || '#'
      });
    }

    res.json(DATA);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener los artículos' });
  }
});


// 🔒 Crear nuevo artículo (solo autorizado)
/*router.post('/crearentrada', verifyToken, async (req, res) => {
  const { titulo, descripcion, imagen, categoria, code_url } = req.body;
  await db.query('INSERT INTO articulos (titulo, descripcion, imagen, categoria, code_url) VALUES (?, ?, ?, ?, ?)', [titulo, descripcion, imagen, categoria, code_url]);
  res.json({ message: 'Artículo creado correctamente' });
});
*/
export default router;
