const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.json({ limit: '50mb' }));

app.get('/', function(req, res) {
    res.send('Silverlight Replace Backend Mock, version 0.0.1\n\n' + new Date());
});

app.get('/ping', function(req, res) {
    res.send('success\n\n' + new Date());
});

app.get('/api/recipes', function(req, res) {
    console.log('GET:' + '/api/recipes');
    const recipes = JSON.parse(fs.readFileSync('responses/recipes.json'));
    console.log('Response: \n' + JSON.stringify(recipes));
    res.send(recipes);
});

const server = app.listen(20403, () => {
    const host = server.address().address;
    const port = server.address().port;
    const headers = {"Access-Control-Allow-Origin": "*"};
    console.log('Silverlight Replace Backend Mock listening at http://%s:%s', host, port, headers);
});
