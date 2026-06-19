const express = require('express');
const app = express();
const port = 2150;

app.get('/connect', (req, res) => {
  console.log(req.query);
  if (req.query.token === '12345') {
    res.send('Connected');
  } else {
    res.status(401).send('Unauthorized');
  }
});
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

while (true) {
    // keep server running
    task.sleep(1000);
}