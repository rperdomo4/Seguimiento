import express from 'express';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import db from './config/db.js'; 
import SequelizeStore from 'connect-session-sequelize';
import usuarioRoutes from './routes/UsuarioRouter.js'; 

import authRoutes from './routes/AuthRoute.js';
import './models/associations.js'; 

dotenv.config();

const app = express();
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
    db: db
});

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'false'
    }
}));

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH','FETCH'],
    allowedHeaders: ['Authorization', 'Content-Type']
}));


app.use(express.json()); 

app.use('/api', usuarioRoutes);
app.use('/auth', authRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Errot!');
  });
  



app.listen(process.env.PORT || 4000, () => {
    console.log('Servidor corriendo en el puerto 4000');
});
