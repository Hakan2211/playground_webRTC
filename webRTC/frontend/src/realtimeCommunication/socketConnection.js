import io from "socket.io-client";

let socket = null;
export const connectWithSocketServer = (userDetails) => {
  socket = io("https://localhost:5000");
  socket.on("connect", () => {
    console.log("successfully connected with socket.io server");
    console.log(socket.id);
  });
};
