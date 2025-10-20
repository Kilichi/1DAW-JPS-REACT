import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

const USER = {
  username: 'admin',
  password: await bcrypt.hash('1234', 10)
};

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (username !== USER.username) return res.status(400).json({ error: 'Usuario inválido' });

  const valid = await bcrypt.compare(password, USER.password);
  if (!valid) return res.status(400).json({ error: 'Contraseña incorrecta' });

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

export default router;
