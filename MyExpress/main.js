const express = require('express') 
const router = express.Router();

const app = express()
const port = 3000

router.get('/', (req, res) => {
  res.send('Hello World!')
})

// URL : /about/3/5
// id : 3, id2 : 5
// path parameter
router.get('/about/:id/:id2', (req, res) => {
  res.send(`about id : ${req.params.id2}`)
})

router.get('/example', (req, res) => {
  res.send('Wow, hello')
})

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})