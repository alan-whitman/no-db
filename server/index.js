const express = require('express');
const bodyParser = require('body-parser');
const vc = require('./controllers/vote_controller');
const app = express();
const port = 3500;

app.use(bodyParser.json())

app.get('/api/votes', vc.getVotes);

app.post('/api/votes', vc.createVote);

app.put('api/votes/:id', vc.updateVote);

app.delete('/api/votes/:id', vc.deleteVote);

app.listen(port, () => console.log(port));