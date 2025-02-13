import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import urlRoutes from './routes/urlRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', urlRoutes);

export default app;