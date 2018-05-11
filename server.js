const io = require('socket.io')();
const port = 8000;

//new client connects
io.on('connection', client => {
  //new client connects, broadcast to all other clients
  client.broadcast.emit('newMessage', {
    body: 'A new user has joined',
    uname: ''
  });
  //new message sent to server
  client.on('newMessage', data => {
    client.broadcast.emit('newMessage',data);
  });
});

//new message sent

io.listen(port);
console.log('listening on port 8000')
