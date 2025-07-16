const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// In-memory storage for users
let users = [];

// ✅ Add a new user
app.post('/users', (req, res) => {
  const { name, age, interests } = req.body;

  if (!name || !age || !Array.isArray(interests)) {
    return res.status(400).json({ error: 'Invalid user data' });
  }

  users.push({ name, age, interests });
  res.json({ message: 'User added successfully' });
});

// ✅ Get matches for a user
app.get('/matches/:username', (req, res) => {
  const username = req.params.username.toLowerCase();
  const user = users.find(u => u.name.toLowerCase() === username);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const matches = users.filter(other =>
    other.name.toLowerCase() !== username &&
    user.interests.filter(i => other.interests.includes(i)).length >= 2
  ).map(u => ({ name: u.name, interests: u.interests }));

  res.json(matches);
});

// ✅ Delete all users
app.delete('/users', (req, res) => {
  users = [];
  res.json({ message: 'All users deleted' });
});

// ✅ Delete specific user by name
app.delete('/users/:name', (req, res) => {
  const username = req.params.name.toLowerCase();
  const originalLength = users.length;

  users = users.filter(user => user.name.toLowerCase() !== username);

  if (users.length < originalLength) {
    res.json({ message: `User '${req.params.name}' deleted` });
  } else {
    res.status(404).json({ error: `User '${req.params.name}' not found` });
  }
});

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
