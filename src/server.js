import express from 'express';
import pingRouter from './routes/ping.routes.js'
const app = express()

app.get('/', (req, res) =>{
    res.send('Hello World')
})

app.use('/ping', pingRouter)
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});