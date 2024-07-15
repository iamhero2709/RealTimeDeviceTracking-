import express from 'express';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

const server = http.createServer(app);
const io = new SocketIOServer(server);

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Socket.IO connection handler
io.on('connection', (socket) => {
  socket.on("send-location", (data) => {
    io.emit("recieve-location", { id: socket.id, ...data });
  });

  socket.on("disconnect", () => {
    io.emit("user-disconnected", socket.id);
  });

  console.log('A user connected');
});

// Route for rendering index.ejs
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
