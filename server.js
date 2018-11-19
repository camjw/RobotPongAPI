express = require('express');

const model = require('./model/model.json')
const cors = require('cors')
const app = express();

app.use(cors())

app.get('/model', (req, res) => {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(model));
});

app.get('/group:a-shard:b', (req, res) => {
  res.sendFile('./model/group'+ req.params.a + '-shard' + req.params.b)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
