import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res) => res.status(200).send(
  {
  status: 200,
  message: 'TAXI-24',
}));

app.listen(3000,(req,res)=>console.log(`listerning at port 3000`))