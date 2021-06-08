const express = require('express');
const app = express();

app.get('/', (req, res) =>res.send('prueba de server TECNIMOTORS --> NodeJS'));

app.listen(3001);
console.log('Server on port', 3001);