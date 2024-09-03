const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(compression());
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((req, res, next) => {
    res.status(404).send('Página não encontrada');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
