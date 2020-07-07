import express from 'express';
import { studentRouter } from './routes/studentRouter.js';

import { connectDB } from './helpers/datebase.js';
const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(3000 || 5000, () => {
  global.connection = connectDB();
  console.log('API Iniciada');
});
