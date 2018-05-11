import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function recieveNewMessage(cb){
  socket.on('newMessage', data => cb(data))
}

function sendNewMessage(text,username){
  socket.emit('newMessage', {
    body: text,
    uname: username
  })
}

export { recieveNewMessage, sendNewMessage }
