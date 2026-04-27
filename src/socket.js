import { io } from 'socket.io-client';

// In production, connect to the same host that served the page
// In dev, connect to the local backend on port 3000
const URL = import.meta.env.PROD ? window.location.origin : 'http://localhost:3000';

export const socket = io(URL, {
  autoConnect: true
});
