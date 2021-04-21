const mongoose = require('mongoose');
const app = require('./app.js');
// const dotenv = require('dotenv');
import config from './config';


// dotenv.config({path: './config.env'})

// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
mongoose.connect(config.DATABASE, {
// mongoose.connect(process.env.DATABASE_LOCAL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  autoIndex: true
})
.then(()=> console.log("DB Connection..."))

app.listen(config.PORT, () => {
  console.log(`App running on port ${config.PORT}...`);
});