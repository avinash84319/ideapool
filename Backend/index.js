const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config()
const pool = require('./database');
const socketio = require('socket.io');
const http = require('http');

const routes= require('./routes/apiRoutes');

app.use(cors());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true,limit: '50mb' }));
app.use('/api', routes);

const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  }
});

io.on('connect', (socket) => {

    let user = {};

    socket.on('join', ({ name, room }, callback) => {
        console.log(name, room);
        user = { id: socket.id, name, room };
        socket.join(user.room);
        console.log(user);
        callback();
    });

    socket.on('sendMessage', (message, room, callback) => {
        console.log('message', message);
        console.log('room', room);
        // send to socket in the same id
        io.to(user.room).emit('message', message);
        callback();
    });

    socket.on('disconnect', () => {
        console.log('User has left the chat');
    });

  });


server.listen(port, async() => {

    // check if the database is connected
    try {
        await pool.query('SELECT 1 + 1 AS solution');
        console.log('Database is connected');
    } catch (error) {
        console.log('Database is not connected');
    }
    
    console.log('Server is running at port ' + port);
});

