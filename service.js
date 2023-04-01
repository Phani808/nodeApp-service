const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();

app.get('/:port', (req, res) => { // Use a URL parameter named "port"
  const port = req.params.port; // Get the port number from the URL parameter
  if (!port) {
    res.status(400).send('Please provide a port number');
    return;
  }
  const scriptPath = path.join(__dirname, 'fetch_service.sh');
  exec(`${scriptPath} ${port}`, (err, stdout, stderr) => {
    if (err) {
      res.status(500).send(stderr);
      return;
    }
    res.send(stdout);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

