const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World from DevOps Backend! This is After EC2 deployment');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});






