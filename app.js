const express = require('express');
const Lakers = require('./json/Lakers.json'); 
const Suns = require('./json/Suns.json');
const Warriors = require('./json/Warriors.json');

const app = express();
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/Public'));

app.get('/', (req, res) => {

    res.render('home', {
    title: 'Homepage',
    Lal: Lakers.LosAngelesLakers,
    Phx: Suns.PhoenixSuns,
    Gsw: Warriors.GoldenStateWarriors
    });
});

app.get('/LosAngelesLakers', (req, res) => {
    res.render('squadre', {
    title: 'Los Angeles Lakers',
    squadre: Lakers.LosAngelesLakers
    });
});

app.get('/PhoenixSuns', (req, res) => {
    res.render('squadre', {
        title: 'Phoenix Suns',
        squadre: Suns.PhoenixSuns
    });
});
app.get('/GoldenStateWarriors', (req, res) => {
    res.render('squadre', {
        title: 'Golden State Warriors',
        squadre: Warriors.GoldenStateWarriors
    });
});

app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});