const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const port = 3001;

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express Backend!');
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Data from Backend', timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});