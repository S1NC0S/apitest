const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('TEAM NAKED');
})

app.get('/api', (req, res) => {
  res.send('TEAM NAKED API');
})

app.get('/api/pixelhands/:id', (req, res) => {
  const id = req.params.id;
  res.json({ 
    name: `Pixelhand #${id}`,
    id: id,
    description: "Pixelhands is a really cool collection of hands. And some other thingies.",
    image:  `https://storage.googleapis.com/opensea-prod.appspot.com/creature/${id}.png`,
    attributes: [
      {
        "trait_type": "Base", 
        "value": "Starfish"
      }, 
      {
        "trait_type": "Eyes", 
        "value": "Big"
      }, 
      {
        "trait_type": "Mouth", 
        "value": "Surprised"
      }, 
      {
        "trait_type": "Level", 
        "value": 5
      }, 
      {
        "trait_type": "Stamina", 
        "value": 1.4
      }, 
      {
        "trait_type": "Personality", 
        "value": "Sad"
      }, 
      {
        "display_type": "boost_number", 
        "trait_type": "Aqua Power", 
        "value": 40
      }, 
      {
        "display_type": "boost_percentage", 
        "trait_type": "Stamina Increase", 
        "value": 10
      }, 
      {
        "display_type": "number", 
        "trait_type": "Generation", 
        "value": 2
      }
    ]
  })
})

app.listen(port, () => {
  console.log(`Team Naked API listening at http://190.92.134.12:${port}`);
  console.log(`Type "kill ${process.pid}" to shut down the API`);
})