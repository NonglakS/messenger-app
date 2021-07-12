import io from "socket.io-client";
import store from "./store";
import {
  setNewMessage,
  removeOfflineUser,
  addOnlineUser,
  gotConversations,
} from "./store/conversations";

import { updateMessageStatus } from "./store/utils/thunkCreators";
const socket = io(window.location.origin);

socket.on("connect", () => {
  console.log("connected to server");

  socket.on("add-online-user", (id, socketId) => {
    store.dispatch(addOnlineUser(id));
  });
  socket.on("remove-offline-user", (id) => {
    store.dispatch(removeOfflineUser(id));
  });
  socket.on("new-message", (data) => {
    const state = store.getState();
    const activeChat = state.activeConversation;
    if (activeChat === data.senderUsername) {
      data.message.isRead = true;
    }
    store.dispatch(setNewMessage(data.message, data.sender));
  });

  socket.on("send-update-message", (data) => {
    store.dispatch(gotConversations(data));
  });

  socket.on(
    "update-message-status-by-active-user",
    (sender, conversationId) => {
      const state = store.getState();
      const activeChat = state.activeConversation;
      if (activeChat === sender.username) {
        updateMessageStatus(sender.id, conversationId);
      }
    }
  );
});

export default socket;
