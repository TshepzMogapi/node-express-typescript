import express from 'express';
import conceptRouter from './routes/concepts';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/', (req, res) => {
  res.send('Hello Express Typescript');
});

app.use('/concepts', conceptRouter);

app.listen(3001);
