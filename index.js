const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
});

app.get('/', (_, response) => {
  connection.query(
    `INSERT INTO people(name) VALUES('VICTOR')`,
    (error, result) => response.send('<h1>Full Cycle Rocks!</h1>')
  );
});

app.get('/people', (_, response) => {
  connection.query(
    'SELECT name FROM people',
    (error, result) => response.send(result)
  );
});

app.listen(port, () => console.log(`Rodando na porta ${port}`));

// on exit from node app, terminates connection with database
process.on('exit', () => connection.end());
