const express = require('express');
const cors = require('cors');
const connection = require('./configs/db');
const authRoutes = require('./routes/authRoutes');
const session = require('express-session');
require('dotenv').config({path:'./configs/.env'});
const app = express();
const helmet = require('helmet');
const cookie = require('cookie-parser');
app.use(express.json());
app.use(session({
  secret:process.env.secret,
  resave:false,
  saveUninitialized:false,
  rolling:true,
  }))
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'https://wander-on-six.vercel.app/' || 'http://localhost:5173' );
//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
// });
const allowedOrigins = ['https://wander-on-six.vercel.app', 'http://localhost:5173'];

app.use(cors({
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(helmet());
app.use(cookie());
const port = process.env.PORT;
app.get('/', (req, res) => {
  res.send('Hello!');
});
app.use('/auth',authRoutes);
app.listen(port, async () => {
  await connection;
  console.log('Database connected');
  console.log(` App listening at ${port}`);
});