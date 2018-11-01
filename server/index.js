const express = require('express');
const bodyParser = require('body-parser');
const vc = require('./controllers/vote_controller');
const massive = require('massive');
require('dotenv').config();
const app = express();
const port = 3500;

const { CONNECTION_STRING: cs} = process.env;

massive(cs).then(db => {
    app.set('db', db);
    console.log('db is connected');
}).catch(err => console.error(err));

app.use(bodyParser.json())


app.get('/api/votes', vc.getVotes);

app.post('/api/votes', vc.createVote);

// app.put('/api/votes/:id', vc.updateVote);

app.put('/api/votes/update_tally/:id/:which', vc.increaseTally);

app.delete('/api/votes/:id', vc.deleteVote);


app.listen(port, () => console.log(port));
