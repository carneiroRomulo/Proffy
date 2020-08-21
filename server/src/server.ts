import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  const users = [
    { name: 'Romulo', age: 25 },
    { name: 'Lucas', age: '20' },
  ];
  return response.json(users);
});

app.listen(3333);
