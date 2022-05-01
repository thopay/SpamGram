import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { Server } from "socket.io";
import * as http from 'http';
import cors from 'cors';
import { userJoin, getCurrentUser, userLeave } from './utils/users.js';

import postRoutes from './routes/post.js';
//import auth from './routes/auth.js';
const app = express();
const io = null

app.use('/api', postRoutes);
//app.use('/', auth);

app.use(express.json());
app.use(express.text());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://alex:LRE6xWLC0zdTBRA3@spamgram.ssmlp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5555;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}) 
    .then(() => {
        const server = app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
        const io = new Server(server);
        io.on('connection', socket => {
            socket.on('joinRoom', ({ username, color, emoji, room }) => {
                const user = userJoin(socket.id, username, color, emoji, room);
                console.log(`USER CONNECTED TO ROOM! ${username} ${color} ${emoji} ${room}`)
                socket.join(user.room)
            });
        
            //Listen for chatMessage
            socket.on('chatMessage', (msg) => {
                const user = getCurrentUser(socket.id);
                console.log(`New Message! ${msg} ${JSON.stringify(user)}`)
                io.to(user.room).emit('message', {
                    id: (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2),
                    text: msg,
                    author: user.username,
                    authorColor: user.color,
                    authorEmoji: user.emoji,
                    timestamp: Date.now(),
                });
            })
        
            //Runs when client disconnects
            socket.on('disconnect', () => {
                console.log("User disconnected!")
                const user = userLeave(socket.id);
            });
        })
    })
    .catch((error) => console.log(error.message));


   
    