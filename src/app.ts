import express from 'express';
import conceptRouter from './routes/concepts';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express Typescript');
});

app.use('/concepts', conceptRouter);

app.listen(3001);
