const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: { origin: "*" },
});

const PORT = 3001;

// =============================================
// EVENT LISTENER: Quando um cliente se conecta
// =============================================
io.on("connection", (socket) => {

  // EVENTO: Usuário define seu nome inicial
  socket.on("set_username", (username) => {
    socket.data.username = username;
    console.log(`Usuário conectado: ${username} (ID: ${socket.id})`);
  });

  // EVENTO: Servidor recebe e repassa a mensagem
  socket.on("message", (payload) => {
    // Repassamos tudo para o front-end
    io.emit("receive_message", {
      ...payload,           
      authorId: socket.id,  
    });

    console.log(`Mensagem de [${payload.author}] enviada como ${payload.sentAsAdmin ? 'ADM' : 'USUÁRIO'}`);
  });

  socket.on("disconnect", () => {
    console.log(`Usuário desconectado.`);
  });
});

server.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});