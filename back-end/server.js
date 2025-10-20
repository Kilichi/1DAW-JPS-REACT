import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import articuloRoutes from './routes/articulos.js';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/imagenes', express.static(path.join(process.cwd(), 'public/images'))); // ruta estática

app.use('/api/articulos', articuloRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
