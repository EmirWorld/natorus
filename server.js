const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './.env' });

const DB = process.env.DATABASE.replace('<password>', process.env.DB_PASSSWORD);
/*
 * Connect database
 * */
mongoose.connect(DB, {
  useNewUrlParser: true,
});

/*
 * Start server ( ` )
 * */
const port = process.env.PORT || 3000;
app.listen(port, 'localhost', () => {
  console.log(`App running on port ${port}`);
});
