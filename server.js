express = require('express');

const cors = require('cors')
const app = express();

app.use(cors())

let current_version = null

app.get('/model/version:version_no', (req, res) => {
  const model = require('./model/version' + req.params.version_no + '/javascript/model.json')
  current_version = req.params.version_no
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(model));
});

app.get('/model/group:a-shard:b', (req, res) => {
  res.sendfile('./model/version' + current_version +  '/javascript/group'+ req.params.a + '-shard' + req.params.b)
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
