const express = require('express');
const app = express();
const port = 1000;

app.get('/', (req, res) => {
    console.log('response to client was sent for /')

    res.send('Server del mio blog')
});

app.get('/bacheca', (req, res) => {
    console.log('response to client was sent for /bacheca')

   

    const posts = [
        {
            name: 'ciambellone',
            image: 'img/ciambellone.jpeg'
        },
        {
            name: 'cracker con barbabietola',
            image: 'img/cracker_barbabietola.jpeg'
        },
        {
            name: 'pane fritto dolce',
            image: 'img/pane_fritto_dolce.jpeg'
        },
        {
            name: 'pasta con barbabietola',
            image: 'img/pasta_barbabietola.jpeg'
        },
        {
            name: 'torta paesana',
            image: 'img/torta_paesana.jpeg'
        }
    ]

    // res.send('Benvenuto in bacheca');
    res.json(posts);

});

app.listen(port, () => {
    console.log('server attivo su port ' + port);
})