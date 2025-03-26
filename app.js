const express = require('express');
const app = express();
const port = 1;

app.listen(port, () => {
    console.log('server attivo su port ' + port);
})