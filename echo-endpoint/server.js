const express = require('express');
const app = express();

// your code here!
app.get('/echo/:what', (req, res) => {
  // get `foo` and `bar` from request object
  //console.log(`${req.params}`);
  const {
    what
  } = req.params;
  res.json({
    host: req.hostname,
    query: {
      cats: req.query.cats
    },
    params: {
      what: what
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
