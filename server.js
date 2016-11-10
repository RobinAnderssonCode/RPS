var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);

(function() {
    var userlist = {};

    app.get('/', function(req, res) {
        res.sendfile('index.html');
    });

    app.use(express.static(path.join(__dirname, 'public')));

    io.on('connection', function(socket) {


        io.emit('userlist', socket.server.eio.clientsCount);

        socket.on('userName', function(user) {
            console.log('\nUser connected: ' + user);
            console.log('\nUsers connected: ' + socket.server.eio.clientsCount + '\n');
            userlist[socket.id] = user;
            console.log(userlist);

            io.sockets.emit('connectUsers', userlist);
        });

        socket.on('get weapon', function(w) {
            console.log('\nWEAPON CHOSEN: ' + w)
        });


        socket.on('disconnect', function() {
            console.log('user disconnected: ' + socket.id);
        });
    });



    http.listen(3000, function() {
        console.log('listening on *:3000');
    });

})();
