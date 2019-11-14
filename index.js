// Configuration de l'environnement
require('dotenv').config();

// Import des modules
import express from 'express';
import path from 'path';
const app = express();
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import {
  configureJWTStrategy
} from './config/passport-jwt';

// Déclaration de variable du port
const port = process.env.PORT || 5000;

// Import Routes
import userRouter from './routes/users';
import taskRouter from './routes/tasks';

// Connection à la base de données
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connecté à la base de données'));

// Middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(morgan('dev'));
app.use(cors());

//initializes the passport configuration.
app.use(passport.initialize());
configureJWTStrategy();

// Static Public forlder (production)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);

// Start the server
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});