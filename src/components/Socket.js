import openSocket from 'soceket.io-client'
const socket = openSocket('http://localhost:8000')

recieveNewMessage = (cb) => {
  socket.on('newMessage', data => cb(data))
}

sendNewMessage = (text,username) => {
  socket.emit('newMessage', {
    body: text,
    uname: username
  })
}

export { recieveNewMessage, sendNewMessage }
