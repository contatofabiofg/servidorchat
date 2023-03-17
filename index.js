const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origins: [process.env.URL]
  }
});

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('<h1>Servidor de Chat ativo</h1><h2>Desenvolvido por Fábio Gonçaves</h2>');
});


io.on('connection', (socket) => {
  console.log('usuário conectado');
  socket.on('disconnect', () => {
    console.log('usuário desconectado');
  });

  socket.on('mensagem', (obj) => {
    console.log('transmitiu mensagem')
      io.emit('retorno', obj);
  });

});

http.listen(3001, () => {
  console.log('listening http on 3001');
});