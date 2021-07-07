import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
  gotConversations,
  } from "./store/conversations";
import onlineSocket from "./onlineSocket";

const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id, socketId) => {
    onlineSocket[id] = socketId;
    store.dispatch(addOnlineUser(id));
  });
  socket.on("remove-offline-user", (id) => {
    delete onlineSocket[id];
    store.dispatch(removeOfflineUser(id));
  });
  socket.on("new-message", (data) => {
    store.dispatch(setNewMessage(data.message, data.sender));
  });
  socket.on("send-update-message", (data) => {
    console.log('web socket listening -------', socket.id)
    store.dispatch(gotConversations(data));
  });
});

export default socket;
