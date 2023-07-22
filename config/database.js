const mongoose = require('mongoose')
// const { MongoClient, ServerApiVersion } = require('mongodb');

// const client = new MongoClient(process.env.MONGO_DATABASE_URL, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// run().catch(console.dir);


mongoose.connect(process.env.MONGO_DATABASE_URL)

const db = mongoose.connection;


db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});