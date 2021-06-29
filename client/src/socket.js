import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
  gotConversations,
  updateMessage} from "./store/conversations";
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
    console.log("online socket", onlineSocket);
    store.dispatch(removeOfflineUser(id));
  });
  socket.on("new-message", (data) => {
    store.dispatch(setNewMessage(data.message, data.sender));
  });
  socket.on("update-message", (data) => {
    store.dispatch(gotConversations(data));
  });
  socket.on("check-receiver-active-chat", (activeName, data, message) => {
    if(activeName === store.getState().activeConversation){
      store.dispatch(updateMessage(message));
    }
  });
});

export default socket;
