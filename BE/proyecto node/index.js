// Importar las bibliotecas
const express = require('express');
const app = express();
const personasRouter = require('./routes/personas');

// Definir el Middelware
app.use(express.json());
app.use('/personas', personasRouter);


// Definir las rutas
app.get('/prueba',(request, response) => {
    console.log('Servidor Prueba');
    response.send('<h1>Servidor en Linea</h1>');

});


// Levantar el servidor
app.listen(8080, () => {
    console.log('Servidor en linea');

});