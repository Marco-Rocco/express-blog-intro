const express = require('express');
const app = express();
const port = 1000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('response to client was sent for /')

    res.send('Server del mio blog')
});

app.get('/bacheca', (req, res) => {
    console.log('response to client was sent for /bacheca')

   

    const posts = [
        {
            name: 'ciambellone',
            image: 'images/ciambellone.jpeg'
        },
        {
            name: 'cracker con barbabietola',
            image: 'images/cracker_barbabietola.jpeg'
        },
        {
            name: 'pane fritto dolce',
            image: 'images/pane_fritto_dolce.jpeg'
        },
        {
            name: 'pasta con barbabietola',
            image: 'images/pasta_barbabietola.jpeg'
        },
        {
            name: 'torta paesana',
            image: 'images/torta_paesana.jpeg'
        }
    ]

    // res.send('Benvenuto in bacheca');
    res.json(posts);

});

app.listen(port, () => {
    console.log('server attivo su port ' + port);
})