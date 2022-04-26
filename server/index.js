import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { Server } from "socket.io";
import * as http from 'http';
import cors from 'cors';
import { userJoin, getCurrentUser, userLeave, getRoomUsers } from './utils/users';

import postRoutes from './routes/post.js';
//import auth from './routes/auth.js';
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use('/', postRoutes);
//app.use('/', auth);

app.use(bodyParser.json({ limit: "20mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true}));
app.use(cors());

io.on('connection', socket => {
    socket.on('joinRoom', ({ username, color, emoji, room }) => {
        const user = userJoin(socket.id, username, color, emoji, room);

        socket.join(user.room)
    });

    //Listen for chatMessage
    socket.on('chatMessage', (msg) => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', {
            username: user.username,
            text: msg,
            time: Date.now()
        });
    })

    //Runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
    });
})

const CONNECTION_URL = 'mongodb+srv://alex:LRE6xWLC0zdTBRA3@spamgram.ssmlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.Port || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => app.listen(PORT, () => console.log('Server running on port: ${PORT}')))
    .catch((error) => console.log(error.message));


   
    