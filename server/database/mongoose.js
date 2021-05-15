const mongoose = require('mongoose');
require('dotenv').config();

// Database name
const dbName = 'ChessDB';

// MongoDB Atlas connection string
const connection = process.env.DB_URL;

// MongoDB local connection string
const connectionURL = 'mongodb://127.0.0.1:27017/'+dbName;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

mongoose.connect(connection,options)
  .then(() => console.log("Database Connected Successfully"))
  .catch(err => console.log("Database Connection Failed"));


// Commands to activate MongoDB from the terminal:
//- - - - - - - - - - - - - - - - - - - - - - - -
// cd ~/
// .\/mongodb/bin/mongod.exe --dbpath=./mongodb-data