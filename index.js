import express from 'express';
import { studentRouter } from './routes/studentRouter.js';

import { connectDB } from './helpers/datebase.js';
const app = express();

//require('dotenv').config();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => {
  global.connection = connectDB();
  console.log('API Iniciada');
});
