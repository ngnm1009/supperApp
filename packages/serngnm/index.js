const express = require('express')
const fs = require('fs');
const app = express()
const port = 3000

app.get('/:name', (req, res) => {
  // https://github.com/ngnm1009/food-app/releases/download/myvideo/App_tsx.chunk.bundle?platform=ios
  const {name} = req.params
  console.log({name})
  const file = `src/bundle/${name.replace('name=','')}`;
  console.log({file})
  res.download(file); // Set disposition and send it.
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports = app;