const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();
const app = express();
const port = 5000;

const uri = `mongodb+srv://process.env.DB_USER:process.env.DB_PASS@cluster0.4sdse.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run(){
    try{
        await client.connect();
        console.log("Connected to Database");
    }
    finally{
        // await client.close();
    }
}
run().catch(console.dir)

app.get('/', (req, res) => {
    res.send('Running Genius Server')
})


app.listen(port, () => {
    console.log("Running Genius Server on port", port);
})











// Initial Step
// const express = require('express');

// const app = express();
// const port = 5000;

// app.get('/', (req, res) => {
//     res.send('Running Genius Server')
// })


// app.listen(port, () => {
//     console.log("Running Genius Server on port", port);
// })