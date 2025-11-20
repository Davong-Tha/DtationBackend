import express from 'express';
import pingRouter from './routes/ping.routes.js'
import authRouter from './routes/auth.routes.js';
import mongoose from 'mongoose';
import 'dotenv/config';

const app = express()
app.use(express.json());   
app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.use('/ping', pingRouter)
app.use('/auth', authRouter);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI

async function start() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB');
    console.error(err);
    process.exit(1);
  }
}

start();