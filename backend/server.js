const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const categories = require('./categories.json');

app.use(cors());

// Search endpoint
app.get('/api/search', (req, res) => {
  const query = req.query.q.toLowerCase();
  const results = categories.filter(category =>
    category.name.toLowerCase().includes(query)
  );
  res.json(results);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
