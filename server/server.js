
const io = require('socket.io')(3006, {
  cors: {
    origin: 'http://localhost:3004',
    methods: ['GET', 'POST'],
    credentials: true
  }
});



io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  socket.on('message', (message) => {
    console.log('Sending message:', message);
    // Optionally emit an event back to the client
    io.emit('message', message);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });


})
