import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routerUrls from './routes/routes.js';
import cors from 'cors';
const app = express();
const port = 4000;

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database Connected Successfully"));

app.use(express.json())
app.use(cors())
app.use('/app', routerUrls);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});