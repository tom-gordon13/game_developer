const mongoose = require('mongoose')

console.log(process.env.MONGO_DATABASE_URL)
mongoose.connect(process.env.MONGO_DATABASE_URL)

const db = mongoose.connection;


db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});