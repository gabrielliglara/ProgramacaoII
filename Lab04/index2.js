const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/public`));

app.listen(3001, () => console.log('Servidor na porta 3001.'));

app.get("/", (request, response) => {
    response.sendFile(`${__dirname}`/index.css);
});
