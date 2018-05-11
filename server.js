const io = require('socket.io')();
const port = 8000;

io.on('connection', client => {
  //new client connects, broadcast to all other clients
  io.broadcast.emit('newMessage', {
    body: 'A new user has joined',
    uname: ''
  });
  //new message sent to server
  io.on('newMessage', data => {
    console.log(data)
  });
});

io.listen(port);
console.log('listening on port 8000')
