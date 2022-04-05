import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';
const app = express();

app.use('/', postRoutes);
app.use(bodyParser.json({ limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://alex:LRE6xWLC0zdTBRA3@spamgram.ssmlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.Port || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
    .catch((error) => console.log(error.message));


   
    