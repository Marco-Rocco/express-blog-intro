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
            titolo: 'ciambellone',
            contenuto: 'ricetta & descrizione del dolce',
            image: '/images/ciambellone.jpeg',
            tags: ['#homemade', '#buonissimo']
        },
        {
            titolo: 'cracker con barbabietola',
            contenuto: 'ricetta & descrizione del dolce',
            image: '/images/cracker_barbabietola.jpeg',
            tags: ['#homemade', '#buonissimo']
        },
        {
            titolo: 'pane fritto dolce',
            contenuto: 'ricetta & descrizione del dolce',
            image: '/images/pane_fritto_dolce.jpeg',
            tags: ['#homemade', '#buonissimo']
        },
        {
            titolo: 'pasta con barbabietola',
            contenuto: 'ricetta & descrizione del dolce',
            image: '/images/pasta_barbabietola.jpeg',
            tags: ['#homemade', '#buonissimo']
        },
        {
            titolo: 'torta paesana',
            contenuto: '/ricetta & descrizione del dolce',
            image: 'images/torta_paesana.jpeg',
            tags: ['#homemade', '#buonissimo']
        }
    ]

    // res.send('Benvenuto in bacheca');
    res.json(posts);

});

app.listen(port, () => {
    console.log('server attivo su port ' + port);
})