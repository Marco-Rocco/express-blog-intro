const express = require('express');
const app = express();
const port = 1000;

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.listen(port, () => {
    console.log('server attivo su port ' + port);
})