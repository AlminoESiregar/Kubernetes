const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', (req, res) => {
  res.send('Hello from Node.js App in Kubernetes!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
