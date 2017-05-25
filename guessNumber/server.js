// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const spawn = require('child_process').spawn;
const build = spawn('ng', ['build', '-w']);
const ajaxController = require('./server/controller/Ajax');
const commsController = require('./server/controller/Comms');
const session = require('express-session');

var port = '3000';

build.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

// print process.argv
process.argv.forEach(function (val, index, array) {
  port = (index === 2) ? val : port;
});

// Get our API routes
const api = require('./server/routes/api');

const app = express();

app.use(session({secret: 'no secret', cookie: {maxAge: 60000}}))

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.post('/ajax/*', (req, res) => {
  ajaxController(req, res);
});

app.get('/comms/*', commsController);
app.post('/comms/*', commsController);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
//const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
