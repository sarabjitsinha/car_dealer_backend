import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import carRoutes from './routes/carRoutes.js';
import authRoutes from './routes/authRoutes.js';
import { readFile } from 'fs/promises';
import path from 'path';


const swaggerDoc = JSON.parse(await readFile(new URL('./swagger.json', import.meta.url)));

dotenv.config();
const app = express();

app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));
app.use(express.json());
app.use('/api/cars', carRoutes);
app.use('/api/auth', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/uploads', express.static(path.join(process.cwd(), 'public/uploads')));
app.use('/',(req,res)=>res.redirect("/api-docs"))

mongoose.connect(`mongodb+srv://sarabjit:${process.env.DB_PASSWORD}@cluster0.dxmxozp.mongodb.net/`)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

const PORT=process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}` ));
